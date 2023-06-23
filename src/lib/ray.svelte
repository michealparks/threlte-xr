<script lang='ts'>

import * as THREE from 'three'
import { T } from '@threlte/core'
import { useFrame } from '@threlte/core'
// import { hoverState } from './stores'

/** The XRController to attach the ray to */
// export let target: XRController

/** Whether to hide the ray on controller blur. Default is `false` */
export let hideOnBlur: boolean = false

let ref: THREE.Line

const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1)])

// Show ray line when hovering objects
useFrame(() => {
  let rayLength = 1

  // const intersection: THREE.Intersection = $hoverState[target.inputSource.handedness].values().next().value

  // if (intersection && target.inputSource.handedness !== 'none') {
  //   rayLength = intersection.distance
  //   if (hideOnBlur) ray.visible = false
  // } else if (hideOnBlur) {
  //   ray.visible = true
  // }

  // Tiny offset to clip ray on AR devices
  // that don't have handedness set to 'none'
  const offset = -0.01
  ref.scale.z = rayLength + offset
})

</script>

<T.Line bind:ref {...$$props} {geometry}>
  <T.MeshBasicMaterial transparent opacity={0.8} />
</T.Line>
