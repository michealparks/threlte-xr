<script lang='ts' context='module'>

import { controllers } from './stores';
import { onMount, onDestroy } from 'svelte'
import { T, useThrelte, createRawEventDispatcher } from '@threlte/core'
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory'
import { fire } from './events'

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

const handleXrEvent = (event: Event & { type: typeof xrEvents[number] } & { target: XRTargetRaySpace }) => {
  fire(event.type, event)
  dispatch(event.type, event)
}

const xrEvents = [
  'select',
  'selectstart',
  'selectend',
  'squeeze',
  'squeezeend',
  'squeezestart'
] as const

onMount(() => {
  controller.addEventListener('connected', handleConnect)
  controller.addEventListener('disconnected', handleDisconnect)
  for (const event of xrEvents) {
    controller.addEventListener(event, handleXrEvent)
  }
})

onDestroy(() => {
  controller.removeEventListener('connected', handleConnect)
  controller.removeEventListener('disconnected', handleDisconnect)
  for (const event of xrEvents) {
    controller.removeEventListener(event, handleXrEvent)
  }
})

</script>

<T is={grip} name='XR Controller Grip {index}'>
  <T is={model} name='XR Controller Grip Model {index}' />
  <slot />
</T>

<T is={controller} name='XR Controller {index}'>
  {#if ray}
    <!-- <Ray
      visible={!$isHandTracking}
      hideOnBlur={hideRaysOnBlur}
      {target}
      material={rayMaterial}
    /> -->
  {/if}
</T>
