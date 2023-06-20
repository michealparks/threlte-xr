import * as THREE from 'three'
import { useThrelte } from '@threlte/core'

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

    const pose = frame?.getViewerPose(referenceSpace)
  
    if (pose !== undefined) {
      offsetFromBase.x += pose.transform.position.x
      offsetFromBase.z += pose.transform.position.z
    }

    const teleportOffset = new XRRigidTransform(offsetFromBase, quaternion)
    renderer!.xr.setReferenceSpace(referenceSpace.getOffsetReferenceSpace(teleportOffset))
  }
}
