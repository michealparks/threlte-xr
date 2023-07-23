import { onDestroy } from 'svelte'
import { on, off } from '$lib/events'
import type {
  XRControllerEventType,
  XRHandEventType,
  XRControllerEvent,
  XRHandEvent,
} from '$lib/types'

/**
 * Handles controller events that are not bound to any object in the scene.
 * This subscribes directly into the native XRInputSource (see XRInputSourceEvent).
 *
 * @param event 
 * @param handler 
 * @param options 
 */
export const useXRControllerEvent = (
  event: XRControllerEventType,
  handler: (event: XRControllerEvent) => void,
  { handedness }: { handedness?: XRHandedness } = {}
): void => {
  const listener = (event: XRControllerEvent) => {
    if (handedness !== undefined && event.data?.handedness !== handedness) {
      return
    }

    handler(event)
  }

  on<XRControllerEvent>(event, listener)

  onDestroy(() => off(event, listener))
}

/**
 * Adds listeners for hand events.
 * This subscribes directly into the native XRInputSource (see XRInputSourceEvent).
 *
 * @param event 
 * @param handler 
 * @param options 
 */
export const useXRHandEvent = (
  event: XRHandEventType,
  handler: (event: XRHandEvent<XRHandEventType, null | THREE.XRHandSpace>) => void,
  { handedness }: { handedness?: 'left' | 'right' } = {}
): void => {
  const listener = (event: XRHandEvent<XRHandEventType, null | THREE.XRHandSpace>) => {
    if (handedness !== undefined && event.data?.handedness !== handedness) {
      return
    }

    handler(event)
  }

  on(event, listener)

  onDestroy(() => off(event, listener))
}
