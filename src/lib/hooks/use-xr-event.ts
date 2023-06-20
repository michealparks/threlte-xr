import { onDestroy } from 'svelte'
import { on, off } from '$lib/events'
import type {
  XRControllerEventType,
  XREventHandler,
  XRControllerEvent,
  XREventOptions,
} from '$lib/types'

export const useXREvent = (event: XRControllerEventType, handler: XREventHandler<XRControllerEvent>, { handedness }: XREventOptions = {}) => {
  const listener = (event: any) => {
    if (handedness !== undefined && event.data.handedness !== handedness) {
      return
    }

    handler(event)
  }

  on(event, listener)

  onDestroy(() => off(event, listener))
}
