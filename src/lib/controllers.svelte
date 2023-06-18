<script lang='ts'>

import { createRawEventDispatcher } from '@threlte/core'
import Controller from './controller.svelte'

export let modelLeft: THREE.Object3D | undefined = undefined
export let modelRight: THREE.Object3D | undefined = undefined

const dispatch = createRawEventDispatcher()

const handleXrEvent = (event) => dispatch(event.type, event)

</script>

<Controller
  model={modelLeft}
  index={0}
  on:connect={handleXrEvent}
  on:disconnect={handleXrEvent}
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
  on:connect={handleXrEvent}
  on:disconnect={handleXrEvent}
  on:select={handleXrEvent}
  on:selectstart={handleXrEvent}
  on:selectend={handleXrEvent}
  on:squeeze={handleXrEvent}
  on:squeezeend={handleXrEvent}
  on:squeezestart={handleXrEvent}
>
  <slot name='right' />
</Controller>
