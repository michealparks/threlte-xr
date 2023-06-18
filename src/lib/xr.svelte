<script lang='ts'>

import { T, useThrelte, createRawEventDispatcher } from '@threlte/core'
import type { XRManagerEvent } from './types'
import { session, referenceSpaceType, player, isPresenting, isHandTracking, xrFrame } from './stores'
import InteractionManager from './manager.svelte'

/**
 * Enables foveated rendering. `Default is `0`
 * 0 = no foveation, full resolution
 * 1 = maximum foveation, the edges render at lower resolution
 */
export let foveation: number = 0

/**
 * The target framerate for the XRSystem. Smaller rates give more CPU headroom at the cost of responsiveness.
 * Recommended range is `72`-`120`. Default is unset and left to the device.
 * @note If your experience cannot effectively reach the target framerate, it will be subject to frame reprojection
 * which will halve the effective framerate. Choose a conservative estimate that balances responsiveness and
 * headroom based on your experience.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Rendering#refresh_rate_and_frame_rate
 */
export let frameRate: number | undefined = undefined

/** Type of WebXR reference space to use. Default is `local-floor` */
export let referenceSpace: XRReferenceSpaceType = 'local-floor'

const dispatch = createRawEventDispatcher()
const { renderer, scene, camera } = useThrelte()

let cleanup: () => void = () => {}

const animationLoop = (_dt: number, frame: XRFrame) => {
  xrFrame.set(frame)
  renderer!.render(scene, camera.current)
}

const handleSessionStart = (nativeEvent: XRManagerEvent) => {
  $isPresenting = true

  /** Called as an XRSession is requested */
  dispatch('sessionstart', { ...nativeEvent, target: $session! })
}

const handleSessionEnd = (nativeEvent: XRManagerEvent) => {
  $isPresenting = false
  $session = undefined

  /** Called after an XRSession is terminated */
  dispatch('sessionend', { ...nativeEvent, target: $session! })
}

const handleVisibilityChange = (nativeEvent: XRSessionEvent) => {
  /** Called when an XRSession is hidden or unfocused. */
  dispatch('visibilitychange', { ...nativeEvent, target: $session! })
}

const handleInputSourcesChange = (nativeEvent: XRInputSourceChangeEvent) => {
  $isHandTracking = Object.values($session!.inputSources).some((source) => source.hand)

  /** Called when available inputsources change */
  dispatch('inputsourceschange', { ...nativeEvent, target: $session! })
}

renderer!.xr.addEventListener('sessionstart', handleSessionStart)
renderer!.xr.addEventListener('sessionend', handleSessionEnd)
renderer!.setAnimationLoop(animationLoop)

renderer!.xr.enabled = true

$: renderer!.xr.setFoveation(foveation)

$: if (frameRate !== undefined) {
  try { $session?.updateTargetFrameRate(frameRate) } catch {}
}

$: renderer!.xr.setReferenceSpaceType(referenceSpace)
$: $referenceSpaceType = referenceSpace

$: {
  cleanup()

  if ($session === undefined) {
    renderer!.xr.setSession(null)
  } else {
    $session.addEventListener('visibilitychange', handleVisibilityChange)
    $session.addEventListener('inputsourceschange', handleInputSourcesChange)

    renderer!.xr.setSession($session!).then(() => {
      // on setSession, three#WebXRManager resets foveation to 1
      // so foveation set needs to happen after it
      renderer!.xr.setFoveation(foveation)
    })

    cleanup = () => {
      $session?.removeEventListener('visibilitychange', handleVisibilityChange)
      $session?.removeEventListener('inputsourceschange', handleInputSourcesChange)
    }
  }
}

</script>

<InteractionManager />

<T name='Player' is={$player}>
  <T is={camera.current} />
</T>
