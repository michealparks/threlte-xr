<script lang='ts'>

import Inspector from 'three-inspect'
import { T, useThrelte } from '@threlte/core'
import { useGltf } from '@threlte/extras'
import { XR, Teleport, Controllers, Hands } from '$lib'

const { scene, camera, renderer } = useThrelte()

camera.current.position.z = 1.75
camera.current.lookAt(0, 1.75, 1)

const viveController = useGltf('./htc_vive_controller.glb')

if (localStorage.getItem('debug')) {
  new Inspector({ scene, camera: camera.current, renderer: renderer! })
}

let show = false

setInterval(() => (show = !show), 1000)

</script>

<XR>
  <Controllers />
  <Hands />
</XR>

<Teleport>
  {#if show}
  <T.Mesh rotation={[-Math.PI / 2, 0, 0]}>
    <T.CircleGeometry args={[5]} />
    <T.MeshBasicMaterial />
  </T.Mesh>
  {/if}
</Teleport>

<T.AmbientLight />
<T.DirectionalLight />
