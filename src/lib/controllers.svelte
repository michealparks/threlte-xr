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
  on:connect={(event) => dispatch('connect', { index: 0, event })}
  on:disconnect={(event) => dispatch('disconnect', { index: 0, event })}
>
  <slot name='left' />
</Controller>

<Controller
  model={modelRight}
  index={1}
  on:connect={(event) => dispatch('connect', { index: 1, event })}
  on:disconnect={(event) => dispatch('disconnect', { index: 1, event })}
>
  <slot name='right' />
</Controller>
