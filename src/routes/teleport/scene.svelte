<script lang='ts'>

import * as THREE from 'three'
import { T, useThrelte } from '@threlte/core'
import { XR, TeleportControls, Controllers, Hands, useTeleport } from '$lib'

const { camera, renderer } = useThrelte()
const teleport = useTeleport()

renderer!.setClearColor(0x000000)

camera.current.position.z = 1.75
camera.current.lookAt(0, 1.75, 1)

teleport(new THREE.Vector3(0.5, 0, 0.5))

</script>

<XR>
  <Controllers />
  <Hands />
</XR>

<TeleportControls handedness='left'>
  <T.Mesh rotation={[-Math.PI / 2, 0, 0]}>
    <T.CircleGeometry args={[20]} />
    <T.MeshStandardMaterial color='#444' />
  </T.Mesh>
</TeleportControls>

{#each [[0, 0, 8], [8, 0, 0], [0, 0, -8], [-8, 0, 3]] as position}
  <T.Mesh
    {position}
    renderOrder={10}
  >
    <T.CylinderGeometry args={[1, 1, 0.1]} />
    <T.MeshStandardMaterial color='#fff' />
  </T.Mesh>
{/each}

<T.AmbientLight />
<T.DirectionalLight />
