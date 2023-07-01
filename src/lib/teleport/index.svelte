

<script lang='ts'>

import * as THREE from 'three'
import { Line2 } from 'three/examples/jsm/lines/Line2'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial'
import { onMount, afterUpdate } from 'svelte'
import { T, extend, useFrame } from '@threlte/core'
import { useController, useTeleport, useXREvent } from '../hooks'
import Marker from './marker.svelte'
import type { XREvent } from '$lib/types';

extend({ Line2, LineGeometry, LineMaterial })

export let raycaster = new THREE.Raycaster()

let hasIntersection = false
let navmeshParent: THREE.Group
let lineGeometry: LineGeometry
let interactObjects: THREE.Object3D[] = []
let selectingController: THREE.XRTargetRaySpace | undefined
let destination: THREE.Vector3 | undefined

const teleport = useTeleport()
const matrix4 = new THREE.Matrix4()
const midpoint = new THREE.Vector3()
const point = new THREE.Vector3()
const divisions = 40
const positions = new Float32Array(divisions * 3)

const calculateMidpoint = (vector1: THREE.Vector3, vector2: THREE.Vector3) => {
  midpoint.x = (vector1.x + vector2.x) / 2;
  midpoint.y = (vector1.y + vector2.y) / 2;
  midpoint.z = (vector1.z + vector2.z) / 2;
}

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

  const controllerpos = new THREE.Vector3()
  selectingController.getWorldPosition(controllerpos)

  calculateMidpoint(controllerpos, destination)
  midpoint.y += 0.8
  const curve = new THREE.QuadraticBezierCurve3(
    controllerpos,
    midpoint,
    destination
  )

  for (let i = 0, j = 0; i < divisions; i += 1, j += 3) {
    const t = i / divisions;
    curve.getPoint(t, point)
    positions[j + 0] = point.x
    positions[j + 1] = point.y
    positions[j + 2] = point.z
  }

  lineGeometry.setPositions(positions)

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

const left = useController('left')

console.log(left.current?.inputSource.gamepad)

useXREvent('selectstart', handleSelectStart)
useXREvent('selectend', handleSelectEnd)

afterUpdate(() => {
  interactObjects = navmeshParent.children
})

onMount(() => {
  interactObjects = navmeshParent.children
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
<T.Group bind:ref={navmeshParent}>
  <slot />
</T.Group>

<T.Line2>
  <T.LineGeometry bind:ref={lineGeometry} />
  <T.LineMaterial color='white' linewidth={0.004} />
</T.Line2>

<Marker
  open={hasIntersection}
  position.x={destination?.x}
  position.y={destination?.y}
  position.z={destination?.z}
/>
