<script lang='ts'>

import * as THREE from 'three'
import { T, useThrelte } from '@threlte/core'
import { XR, Teleport, Controllers, Hands, useTeleport } from '$lib'

const { camera, renderer } = useThrelte()
const teleport = useTeleport()

renderer?.setClearColor(0x000000)

camera.current.position.z = 1.75
camera.current.lookAt(0, 1.75, 1)

teleport(new THREE.Vector3(0.5, 0, 0.5))

</script>

<XR>
  <Controllers />
  <Hands />
</XR>

<Teleport>
  <T.Mesh rotation={[-Math.PI / 2, 0, 0]}>
    <T.CircleGeometry args={[5]} />
    <T.MeshStandardMaterial color='#444' />
  </T.Mesh>
</Teleport>

<T.AmbientLight />
<T.DirectionalLight />
