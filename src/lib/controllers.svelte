<script lang='ts'>

import Controller from './controller.svelte'

export let modelLeft: THREE.Object3D | 'none' | undefined = undefined
export let modelRight: THREE.Object3D | 'none' | undefined = undefined

</script>

<Controller model={modelLeft} index={0}>
  <slot name='left' />
</Controller>

<Controller model={modelRight} index={1}>
  <slot name='right' />
</Controller>
