<script lang='ts'>

import * as THREE from 'three'
import type { RigidBody as RapierRigidBody } from '@dimforge/rapier3d-compat'
import { T, useFrame } from '@threlte/core'
import { InstancedMesh, Instance } from '@threlte/extras'
import { Collider, RigidBody } from '@threlte/rapier'
import RoundedBoxGeometry from './rounded-box-geometry.svelte'
import { XR, Controllers, Hands, useXR } from '$lib'

const { isHandTracking } = useXR()
const colors = ['#ff5252', '#ff4081', '#d500f9', '#3d5afe', '#40c4ff', '#18ffff', '#f9a825', '#ffd740', '#bf360c'] as const
const positions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]] as const
const directions = ['top', 'left', 'down', 'right'] as const

type Cube = {
  position: THREE.Vector3
  color: string
  direction: typeof directions[number]
}

let cubes: Cube[] = []
let num = 100

for (let i = 0; i < num; i += 1) {
  const [x, y] = positions[Math.trunc(Math.random() * positions.length)]!
  cubes.push({
    direction: directions[Math.trunc(Math.random() * directions.length)]!,
    position: new THREE.Vector3(x, y, -i * 6),
    color: colors[i % colors.length]!
  })
}

let rigidBodyLeft: RapierRigidBody
let rigidBodyRight: RapierRigidBody

let saberLeft: THREE.Mesh
let saberRight: THREE.Mesh

let handSaberLeft: THREE.Mesh
let handSaberRight: THREE.Mesh

const v3 = new THREE.Vector3()
const q = new THREE.Quaternion()

useFrame(() => {
  const left = isHandTracking.current ? handSaberLeft : saberLeft 
  const right = isHandTracking.current ? handSaberRight : saberRight

  if (left) {
    rigidBodyLeft.setTranslation(left.getWorldPosition(v3), true)
    rigidBodyLeft.setRotation(left.getWorldQuaternion(q), true)
  }

  if (right) {
    rigidBodyRight.setTranslation(right.getWorldPosition(v3), true)
    rigidBodyRight.setRotation(right.getWorldQuaternion(q), true)
  }
})

</script>

<T.AmbientLight />
<T.DirectionalLight />

<XR>
  <Controllers>
    <T.Mesh slot='left' rotation.x={Math.PI / 2} position.z={-0.7} bind:ref={saberLeft}>
      <T.CylinderGeometry args={[0.02, 0.02, 1.4]} />
      <T.MeshPhongMaterial color='red' />
    </T.Mesh>
    <T.Mesh slot='right' rotation.x={Math.PI / 2} position.z={-0.7} bind:ref={saberRight}>
      <T.CylinderGeometry args={[0.02, 0.02, 1.4]} />
      <T.MeshPhongMaterial color='red' />
    </T.Mesh>
  </Controllers>
  <Hands>
    <T.Mesh slot='left' rotation.x={Math.PI / 2} position.z={-0.7} bind:ref={handSaberLeft}>
      <T.CylinderGeometry args={[0.02, 0.02, 1.4]} />
      <T.MeshPhongMaterial color='red' />
    </T.Mesh>
    <T.Mesh slot='right' rotation.x={Math.PI / 2} position.z={-0.7} bind:ref={handSaberRight}>
      <T.CylinderGeometry args={[0.02, 0.02, 1.4]} />
      <T.MeshPhongMaterial color='red' />
    </T.Mesh>
  </Hands>
</XR>

<RigidBody type='kinematicPosition' bind:rigidBody={rigidBodyLeft}>
  <Collider shape='capsule' args={[0.7, 0.02]} />
</RigidBody>

<RigidBody type='kinematicPosition' bind:rigidBody={rigidBodyRight}>
  <Collider shape='capsule' args={[0.7, 0.02]} />
</RigidBody>

<InstancedMesh limit={num}>
  <RoundedBoxGeometry radius={0.15} args={[0.7, 0.7, 0.7]} />
  <T.MeshPhongMaterial />

  {#each cubes as { position, color }, index (index)}
    <T.Group
      position.x={position.x}
      position.y={position.y + 1.5}
      position.z={position.z}
    >
      <RigidBody linearVelocity={[0, 0, 10]}>
        <Collider shape='cuboid' mass={0.5} args={[0.35, 0.35, 0.35]} />
        <Instance {color} />
      </RigidBody>
    </T.Group>
  {/each}
</InstancedMesh>

<T.Mesh>
  <T.CircleGeometry args={[1]} on:create={({ ref }) => ref.rotateX(Math.PI / 2)} />
  <T.MeshStandardMaterial color='white' />
</T.Mesh>
