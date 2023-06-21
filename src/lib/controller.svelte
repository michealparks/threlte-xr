<script lang='ts' context='module'>

import { controllers } from './stores';
import { onMount, onDestroy } from 'svelte'
import { T, useThrelte, createRawEventDispatcher } from '@threlte/core'
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory'
import { fire } from './events'
import type { XREvent } from './types'

const controllerModelFactory = new XRControllerModelFactory()

</script>

<script lang='ts'>

export let index: number

export let ray = false

/** Optional material props to pass to controllers' ray indicators */
export const rayMaterial: THREE.MeshBasicMaterial | undefined = undefined

/** Whether to hide controllers' rays on blur. Default is `false` */
export const hideRaysOnBlur: boolean = false

const xrEvents = [
  'select',
  'selectstart',
  'selectend',
  'squeeze',
  'squeezeend',
  'squeezestart'
] as const

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

const { renderer } = useThrelte()
const controller = renderer!.xr.getController(index)
const grip = renderer!.xr.getControllerGrip(index)

export let model: THREE.Object3D | undefined = controllerModelFactory.createControllerModel(grip)

const handleConnected = (event: XREvent<'connected'>) => {
  $controllers[index] = { controller, inputSource: event.data }
  controller.visible = grip.visible = true
  fire(event.type, event)
  dispatch('connected', event)
}

const handleDisconnected = (event: XREvent<'disconnected'>) => {
  controllers.update((value) => value.filter((item) => item.controller !== controller))
  controller.visible = grip.visible = false
  fire(event.type, event)
  dispatch('disconnected', event)
}

const handleXrEvent = (event: XREvent<typeof xrEvents[number]>) => {
  fire(event.type, event)
  dispatch(event.type, event)
}

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
