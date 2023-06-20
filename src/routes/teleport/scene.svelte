<script lang='ts'>

import * as THREE from 'three'
import { T, useFrame, useThrelte } from '@threlte/core'
import { useGltf } from '@threlte/extras'
import { XR, Teleport, Controllers, Hands, useXR, useTeleport } from '$lib'

const { isPresenting } = useXR()
const { scene, camera, renderer } = useThrelte()
const teleport = useTeleport()

camera.current.position.z = 1.75
camera.current.lookAt(0, 1.75, 1)

let show = false

const position = new THREE.Vector3()

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
