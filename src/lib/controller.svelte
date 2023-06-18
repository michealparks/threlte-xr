<script lang='ts' context='module'>

import { controllers } from './stores';
import { onMount, onDestroy } from 'svelte'
import { T, useThrelte, createRawEventDispatcher } from '@threlte/core'
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory'

const controllerModelFactory = new XRControllerModelFactory()

</script>

<script lang='ts'>

export let index: number

export let ray = false

/** Optional material props to pass to controllers' ray indicators */
export const rayMaterial: THREE.MeshBasicMaterial | undefined = undefined

/** Whether to hide controllers' rays on blur. Default is `false` */
export const hideRaysOnBlur: boolean = false

const { renderer } = useThrelte()

const dispatch = createRawEventDispatcher<{
  connect: THREE.Event
  disconnect: THREE.Event
}>()

const controller = renderer!.xr.getController(index)
const grip = renderer!.xr.getControllerGrip(index)

export let model: THREE.Object3D | undefined = controllerModelFactory.createControllerModel(grip)

const handleConnect = (event: THREE.Event) => {
  $controllers[index] = { controller, inputSource: event.data }
  controller.visible = grip.visible = true
  dispatch('connect', event)
}

const handleDisconnect = (event: THREE.Event) => {
  controller.visible = grip.visible = false
  dispatch('disconnect', event)
}

onMount(() => {
  controller.addEventListener('connected', handleConnect)
  controller.addEventListener('disconnected', handleDisconnect)
})

onDestroy(() => {
  controller.removeEventListener('connected', handleConnect)
  controller.removeEventListener('disconnected', handleDisconnect)
})

</script>

<T is={grip}>
  <T is={model} />
  <slot />
</T>

<T is={controller}>
  {#if ray}
    <!-- <Ray
      visible={!$isHandTracking}
      hideOnBlur={hideRaysOnBlur}
      {target}
      material={rayMaterial}
    /> -->
  {/if}
</T>
