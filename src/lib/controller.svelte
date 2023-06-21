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
  connected: THREE.Event
  disconnected: THREE.Event
}>()

const controller = renderer!.xr.getController(index)
const grip = renderer!.xr.getControllerGrip(index)

export let model: THREE.Object3D | undefined = controllerModelFactory.createControllerModel(grip)

const handleConnected = (event: Event & { type: 'connected' } & { target: THREE.XRTargetRaySpace }) => {
  $controllers[index] = { controller, inputSource: event.data }
  controller.visible = grip.visible = true
  dispatch('connected', event)
}

const handleDisconnected = (event: Event & { type: 'disconnected' } & { target: THREE.XRTargetRaySpace }) => {
  controllers.update((value) => value.filter(({ target }) => target !== event.target))
  controller.visible = grip.visible = false
  dispatch('disconnected', event)
}

const handleXrEvent = (event: Event & { type: typeof xrEvents[number] } & { target: THREE.XRTargetRaySpace }) => {
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
  controller.addEventListener('connected', handleConnected)
  controller.addEventListener('disconnected', handleDisconnected)
  for (const event of xrEvents) {
    controller.addEventListener(event, handleXrEvent)
  }
})

onDestroy(() => {
  controller.removeEventListener('connected', handleConnected)
  controller.removeEventListener('disconnected', handleDisconnected)
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
