import type * as THREE from 'three'
import { currentWritable } from '@threlte/core'

import {
  addInteraction,
  removeInteraction,
  controllers,
  isPresenting,
  isHandTracking,
  player,
  session,
} from './stores'

import type {
  XRInteractionType,
  XRControllerEventType,
  XREventHandler,
  XRControllerEvent,
  XREventOptions,
  XRInteractionHandler
} from './types'

const stores = {
  controllers,
  isPresenting,
  isHandTracking,
  player,
  session,
}

export const useXR = () => stores

export const useController = (handedness: XRHandedness) => {
  const controller = currentWritable<undefined | { controller: THREE.XRTargetRaySpace; inputSource: XRInputSource }>(undefined)

  controllers.subscribe((value) => {
    controller.set(value.find(({ inputSource }) => inputSource.handedness === handedness))
  })

  return controller
}

export const useXREvent = (event: XRControllerEventType, handler: XREventHandler<XRControllerEvent>, { handedness }: XREventOptions = {}) => {
  let listeners: ((() => void) | undefined)[] = []

  const unsubscribe = controllers.subscribe((value) => {
    listeners.forEach((cleanup) => cleanup?.())
    listeners = value.map((target) => {
      if (handedness && target.inputSource.handedness !== handedness) return
  
      const listener = (nativeEvent: XRControllerEvent) => handler({ nativeEvent, target })
      target.controller.addEventListener(event, listener)
      return () => target.controller.removeEventListener(event, listener)
    })
  })

  return () => {
    unsubscribe()
    listeners.forEach((cleanup) => cleanup?.())
  }
}

export const useInteraction = (target: THREE.Object3D, type: XRInteractionType, handler: XRInteractionHandler) => {
  if (!target) return

  addInteraction(target, type, handler)

  return () => removeInteraction(target, type, handler)
}
