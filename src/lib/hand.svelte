<script lang='ts' context='module'>

import { onMount, onDestroy } from 'svelte';
import { T, useThrelte, createRawEventDispatcher } from '@threlte/core'
import { XRHandModelFactory } from 'three/examples/jsm/webxr/XRHandModelFactory'

const handModelFactory = new XRHandModelFactory()

</script>

<script lang='ts'>

export let index: number

export let profile: 'mesh' | 'spheres' | 'boxes' = 'mesh'

const { renderer } = useThrelte()
const dispatch = createRawEventDispatcher()

const hand = renderer!.xr.getHand(index)
const model = handModelFactory.createHandModel(hand, profile)

const handleConnectionUpdate = (event: THREE.Event) => {
  hand.visible = event.type === 'connected'
  dispatch(event.type, event)
}

onMount(() => {
  hand.addEventListener('connected', handleConnectionUpdate)
  hand.addEventListener('disconnected', handleConnectionUpdate)
})

onDestroy(() => {
  hand.removeEventListener('connected', handleConnectionUpdate)
  hand.removeEventListener('disconnected', handleConnectionUpdate)
})

</script>

<T is={hand}>
  <T is={model} />
</T>
