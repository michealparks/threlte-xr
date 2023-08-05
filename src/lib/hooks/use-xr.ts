import type { CurrentWritable } from '@threlte/core'
import {
  isPresenting,
  isHandTracking,
  session,
  xrFrame,
} from '$lib/internal/stores'

const stores = {
  isPresenting,
  isHandTracking,
  session,
  xrFrame,
}

/**
 * Provides access to context related to `<XR />`.
 */
export const useXR = (): {
  isPresenting: CurrentWritable<boolean>
  isHandTracking: CurrentWritable<boolean>
  session: CurrentWritable<XRSession | undefined>
  xrFrame: CurrentWritable<XRFrame | undefined>
} => stores
