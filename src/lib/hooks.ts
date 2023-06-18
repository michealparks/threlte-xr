import type * as THREE from 'three'
import { currentWritable } from '@threlte/core'
import { on, off } from './events'

import {
  addInteraction,
  removeInteraction,
  controllers,
  isPresenting,
  isHandTracking,
  player,
  session,
  xrFrame,
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
  xrFrame,
}

/**
 * This hook gives you access to the current state configured by `<XR />`.
 */
export const useXR = () => stores

export const useController = (handedness: XRHandedness) => {
  const controller = currentWritable<undefined | { controller: THREE.XRTargetRaySpace; inputSource: XRInputSource }>(undefined)

  controllers.subscribe((value) => {
    controller.set(value.find(({ inputSource }) => inputSource.handedness === handedness))
  })

  return controller
}

export const useXREvent = (event: XRControllerEventType, handler: XREventHandler<XRControllerEvent>, { handedness }: XREventOptions = {}) => {
  const listener = (event: any) => {
    if (handedness && event.data.handedness !== handedness) {
      return
    }

    handler(event)
  }

  on(event, listener)

  return () => off(event, listener)
}

export const useInteraction = (target: THREE.Object3D, type: XRInteractionType, handler: XRInteractionHandler) => {
  if (!target) return

  addInteraction(target, type, handler)

  return () => removeInteraction(target, type, handler)
}
