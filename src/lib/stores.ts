import * as THREE from 'three'
import { writable } from 'svelte/store'
import { currentWritable } from '@threlte/core'

export const initialized = writable(false)
export const isPresenting = currentWritable(false)
export const isHandTracking = currentWritable(false)

export const xrFrame = currentWritable<XRFrame>(null!)
export const session = currentWritable<XRSession | undefined>(undefined)
export const referenceSpaceType = currentWritable<XRReferenceSpaceType | undefined>(undefined)
export const activeTeleportController = currentWritable<THREE.XRTargetRaySpace | undefined>(undefined)
export const pendingTeleportDestination = currentWritable<THREE.Vector3 | undefined>(undefined)
