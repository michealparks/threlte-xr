import { onDestroy } from 'svelte'

type XRCallback = (frame: XRFrame, dt: number) => void

export const xrRenderCallbacks: XRCallback[] = []

/**
 * This replaces useFrame, which does not currently work in XR environments. It may be deprecated and removed in the near future.
 * @param callback 
 * @param options 
 * @returns 
 */
export const useXRFrame = (callback: XRCallback, options: { autostart?: boolean } = {}) => {
  const start = () => xrRenderCallbacks.push(callback)
  const stop = () => xrRenderCallbacks.splice(xrRenderCallbacks.indexOf(callback), 1)

  if (options.autostart) {
    start()
  }

  onDestroy(stop)

  return {
    start,
    stop,
  }
}
