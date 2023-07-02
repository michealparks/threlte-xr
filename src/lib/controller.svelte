
<script lang='ts' context='module'>

import { controllers } from './stores';
import { onMount, onDestroy } from 'svelte'
import { T, useThrelte, createRawEventDispatcher } from '@threlte/core'
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory'
import { fire } from './events'
import type { XREvent } from './types'
import { isHandTracking, activeTeleportController, pendingTeleportDestination } from './stores'
import { left, right, gaze } from './hooks/use-xr-controller'
import ShortRay from './rayshort.svelte'

const controllerModelFactory = new XRControllerModelFactory()

const xrEvents = [
  'select',
  'selectstart',
  'selectend',
  'squeeze',
  'squeezeend',
  'squeezestart'
] as const

</script>

<script lang='ts'>

export let index: number

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

let connected = false

const handleConnected = (event: XREvent<'connected'>) => {
  const xrController = { controller, inputSource: event.data }

  controllers.update((value) => {
    value[index] = xrController
    return value
  })

  switch (event.data.handedness) {
    case 'left': return left.set(xrController)
    case 'right': return right.set(xrController)
    case 'none': return gaze.set(xrController)
  }

  connected = true

  fire('connected', event)
  dispatch('connected', event)
}

const handleDisconnected = (event: XREvent<'disconnected'>) => {
  controllers.update((value) => value.filter((item) => item.controller !== controller))

  switch (event.data.handedness) {
    case 'left': return left.set(undefined)
    case 'right': return right.set(undefined)
    case 'none': return gaze.set(undefined)
  }

  connected = false

  fire('disconnected', event)
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

<T
  is={grip}
  name='XR Controller Grip {index}'
  visible={connected && !$isHandTracking}
>
  <T is={model} name='XR Controller Grip Model {index}' />
  <slot />
</T>

<T
  is={controller}
  name='XR Controller {index}'
  visible={connected && !$isHandTracking}
>
  <ShortRay visible={
    $activeTeleportController === controller &&
    $pendingTeleportDestination === undefined
  } />
</T>
