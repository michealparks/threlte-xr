<script lang='ts'>

import { createRawEventDispatcher } from '@threlte/core'
import Controller from './controller.svelte'

export let modelLeft: THREE.Object3D | undefined = undefined
export let modelRight: THREE.Object3D | undefined = undefined

const dispatch = createRawEventDispatcher()

</script>

<Controller
  model={modelLeft}
  index={0}
  on:connect={(event) => dispatch('connect', event)}
  on:disconnect={(event) => dispatch('disconnect', event)}
>
  <slot name='left' />
</Controller>

<Controller
  model={modelRight}
  index={1}
  on:connect={(event) => dispatch('connect', event)}
  on:disconnect={(event) => dispatch('disconnect', event)}
>
  <slot name='right' />
</Controller>
