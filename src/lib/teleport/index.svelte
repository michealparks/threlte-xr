

<script lang='ts'>

import * as THREE from 'three'
import { onMount, afterUpdate } from 'svelte'
import { T, useFrame } from '@threlte/core'
import { useTeleport, useXREvent } from '../hooks'
import Marker from './marker.svelte'
    import type { XREvent } from '$lib/types';

export let raycaster = new THREE.Raycaster()

let hasIntersection = false
let ref: THREE.Group
let interactObjects: THREE.Object3D[] = []
let selectingController: THREE.XRTargetRaySpace | undefined
let destination: THREE.Vector3 | undefined

const teleport = useTeleport()
const matrix4 = new THREE.Matrix4()

const { start, stop } = useFrame(() => {
  if (selectingController === undefined) return

  hasIntersection = false
  destination = undefined

  matrix4.identity().extractRotation(selectingController.matrixWorld)
  raycaster.ray.origin.setFromMatrixPosition(selectingController.matrixWorld)
  raycaster.ray.direction.set(0, 0, -1).applyMatrix4(matrix4)

  const [intersect] = raycaster.intersectObjects(interactObjects)

  if (intersect === undefined) return

  hasIntersection = true
  destination = intersect.point

}, { autostart: false })

const handleSelectStart = (event: XREvent) => {
  selectingController = event.target

  start()
}

const handleSelectEnd = () => {
  stop()

  hasIntersection = false
  selectingController = undefined

  if (destination === undefined) return

  teleport(destination)
}

useXREvent('selectstart', handleSelectStart)
useXREvent('selectend', handleSelectEnd)

afterUpdate(() => {
  interactObjects = ref.children
})

onMount(() => {
  interactObjects = ref.children
})

</script>

<!--
### Teleport

A teleportation plane with a marker that will teleport on interaction.

```svelte
  <Teleport
    /** Whether to allow teleportation from left controller. Default is `false` */
    leftHand={false}
    /** Whether to allow teleportation from right controller. Default is `false` */
    rightHand={false}
    /** The maximum distance from the camera to the teleportation point. Default is `10` */
    maxDistance={10}
    /** The radial size of the teleportation marker. Default is `0.25` */
    size={0.25}
  >

  </Teleport>
```
-->
<T.Group bind:ref={ref}>
  <slot />
</T.Group>

<T.Group
  visible={hasIntersection}
  position.x={destination?.x}
  position.y={destination?.y}
  position.z={destination?.z}
>
  <slot name='marker'>
    <Marker />
  </slot>
</T.Group>
