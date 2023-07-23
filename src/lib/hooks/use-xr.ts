import type { CurrentWritable } from '@threlte/core'
import {
  isPresenting,
  isHandTracking,
  player,
  session,
  xrFrame,
} from '$lib/stores'

const stores = {
  isPresenting,
  isHandTracking,
  player,
  session,
  xrFrame,
}

/**
 * Provides access to context related to `<XR />`.
 */
export const useXR = (): {
  isPresenting: CurrentWritable<boolean>
  isHandTracking: CurrentWritable<boolean>
  player: CurrentWritable<THREE.Group>
  session: CurrentWritable<XRSession | undefined>
  xrFrame: CurrentWritable<XRFrame | undefined>
} => stores
