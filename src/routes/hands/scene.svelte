<script lang='ts'>

import { T, useThrelte } from '@threlte/core'
import { XR, Controllers, Hands } from '$lib'

const { camera } = useThrelte()

camera.current.position.z = 1.75
camera.current.lookAt(0, 1.75, 1)

</script>

<XR />
<Controllers />
<Hands />

<T.Mesh rotation={[-Math.PI / 2, 0, 0]}>
  <T.CircleGeometry args={[1]} />
  <T.MeshBasicMaterial />
</T.Mesh>

<T.AmbientLight />
<T.DirectionalLight />