<script lang='ts'>

import * as THREE from 'three'
import { T } from '@threlte/core'
import { XR, Controller, useHitTest } from '$lib'

const geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.2, 32).translate(0, 0.1, 0);
const meshes: THREE.Mesh[] = []

const reticle = new THREE.Object3D()

const handleSelect = () => {
  if (!reticle.visible) return

  const material = new THREE.MeshPhongMaterial({ color: 0xffffff * Math.random() })
  const mesh = new THREE.Mesh(geometry, material)
  reticle.matrix.decompose(mesh.position, mesh.quaternion, mesh.scale)
  mesh.scale.y = Math.random() * 2 + 1
  meshes.push(mesh)
}

useHitTest((hitMatrix) => {
  console.log(hitMatrix)
})

</script>

<XR foveation={1} />

<Controller index={0} on:select={handleSelect} />

<T.HemisphereLight
  args={[0xffffff, 0xbbbbff, 1]}
  position={[0.5, 1, 0.25]}
/>

{#each meshes as mesh, index (index)}
  <T is={mesh} />
{/each}
