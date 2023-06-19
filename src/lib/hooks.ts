import * as THREE from 'three'
import { currentWritable, useThrelte } from '@threlte/core'
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

/**
 * Teleport callback, accepting a world-space target position to teleport to.
 */
export type TeleportCallback = (target: THREE.Vector3 | THREE.Vector3Tuple) => void

const quaternion = new THREE.Quaternion()

/**
 * Returns a {@link TeleportCallback} to teleport the player to a position.
 */
export const useTeleport = (): TeleportCallback => {
  const { renderer } = useThrelte()

  return (target) => {
    const referenceSpace = renderer!.xr.getReferenceSpace()
    const frame = renderer!.xr.getFrame()

    if (referenceSpace === null) return

    let x = 0, y = 0, z = 0

    if (Array.isArray(target)) {
      [x, y, z] = target
    } else {
      x = target.x
      y = target.y
      z = target.z
    }

    const offsetFromBase = { x: -x, y: -y, z: -z }

    const pose = frame.getViewerPose(referenceSpace)
  
    if (pose !== undefined) {
      offsetFromBase.x += pose.transform.position.x
      offsetFromBase.z += pose.transform.position.z
    }

    const teleportOffset = new XRRigidTransform(offsetFromBase, quaternion)
    renderer!.xr.setReferenceSpace(referenceSpace.getOffsetReferenceSpace(teleportOffset))
  }
}
