<script lang='ts'>

import { createRawEventDispatcher } from '@threlte/core'
import Controller from './controller.svelte'
import { XREvent } from './types'

export let modelLeft: THREE.Object3D | undefined = undefined
export let modelRight: THREE.Object3D | undefined = undefined

type $$Events = {
  connected: XREvent<'connected'>
  disconnected: XREvent<'disconnected'>
  select: XREvent<'select'>
  selectstart: XREvent<'selectstart'>
  selectend: XREvent<'selectend'>
  squeeze: XREvent<'squeeze'>
  squeezeend: XREvent<'squeezend'>
  squeezestart: XREvent<'squeezestart'>
}

const dispatch = createRawEventDispatcher<$$Events>()

const handleXrEvent = (event) => dispatch(event.type, event)

</script>

<Controller
  model={modelLeft}
  index={0}
  on:connected={handleXrEvent}
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
  on:connected={handleXrEvent}
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
