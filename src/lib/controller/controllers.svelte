<script lang='ts'>

import { createRawEventDispatcher } from '@threlte/core'
import Controller from './controller.svelte'
import type { XREvent } from '../types'

export let modelLeft: THREE.Object3D | undefined = undefined
export let modelRight: THREE.Object3D | undefined = undefined

type $$Events = {
  connected: XREvent<'connected'>
  disconnected: XREvent<'disconnected'>
  select: XREvent<'select'>
  selectstart: XREvent<'selectstart'>
  selectend: XREvent<'selectend'>
  squeeze: XREvent<'squeeze'>
  squeezeend: XREvent<'squeezeend'>
  squeezestart: XREvent<'squeezestart'>
}

const dispatch = createRawEventDispatcher<$$Events>()
const handedness = [undefined, undefined]

const handleXrEvent = (event: XREvent) => dispatch(event.type, event)

const setHandedness = (index: number, event: XREvent<'connected'>) => {
  console.log(index, event)
  return
  handedness[index] = event.target
}

</script>

<Controller
  model={modelLeft}
  index={0}
  on:connected={(event) => {
    console.log('here')
    setHandedness(0, event)
    handleXrEvent(event)
  }}
  on:disconnected={handleXrEvent}
  on:select={handleXrEvent}
  on:selectstart={handleXrEvent}
  on:selectend={handleXrEvent}
  on:squeeze={handleXrEvent}
  on:squeezeend={handleXrEvent}
  on:squeezestart={handleXrEvent}
>
  <slot name='left' />
</Controller>

<Controller
  model={modelRight}
  index={1}
  on:connected={(event) => {
    setHandedness(1, event)
    handleXrEvent(event)
  }}
  on:disconnected={handleXrEvent}
  on:select={handleXrEvent}
  on:selectstart={handleXrEvent}
  on:selectend={handleXrEvent}
  on:squeeze={handleXrEvent}
  on:squeezeend={handleXrEvent}
  on:squeezestart={handleXrEvent}
>
  <slot name='right' />
</Controller>
