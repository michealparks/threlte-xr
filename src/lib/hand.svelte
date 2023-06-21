<script lang='ts' context='module'>

import { onMount, onDestroy } from 'svelte';
import { T, useThrelte, createRawEventDispatcher } from '@threlte/core'
import { XRHandModelFactory } from 'three/examples/jsm/webxr/XRHandModelFactory'
import type { XREvent } from './types'

const handModelFactory = new XRHandModelFactory()

</script>

<script lang='ts'>

export let index: number

export let profile: 'mesh' | 'spheres' | 'boxes' | 'none' = 'mesh'

type $$Events = {
  connected: XREvent<'connected'>
  disconnected: XREvent<'disconnected'>
  pinchstart: XREvent<'pinchstart'>
  pinchend: XREvent<'pinchend'>
}

const dispatch = createRawEventDispatcher<$$Events>()

const { renderer } = useThrelte()
const hand = renderer!.xr.getHand(index)
const model = handModelFactory.createHandModel(hand, profile === 'none' ? 'mesh' : profile)

const handleConnectionUpdate = (event: XREvent<'connected' | 'disconnected'>) => {
  const connected = event.type === 'connected'
  hand.visible = connected
  dispatch(event.type, event)
}

const handlePinchEvent = (event: XREvent<'pinchstart' | 'pinchend'>) => {
  dispatch(event.type, event)
}

onMount(() => {
  hand.addEventListener('connected', handleConnectionUpdate)
  hand.addEventListener('disconnected', handleConnectionUpdate)
  hand.addEventListener('pinchstart', handlePinchEvent)
  hand.addEventListener('pinchend', handlePinchEvent)
})

onDestroy(() => {
  hand.removeEventListener('connected', handleConnectionUpdate)
  hand.removeEventListener('disconnected', handleConnectionUpdate)
  hand.removeEventListener('pinchstart', handlePinchEvent)
  hand.removeEventListener('pinchend', handlePinchEvent)
})

</script>

<T is={hand} name='XR Hand {index}'>
  {#if profile !== 'none'}
    <T is={model} name='XR Hand Model {index}' />
  {/if}
  <slot />
</T>
