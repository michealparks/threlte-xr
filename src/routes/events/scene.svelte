<script lang='ts'>

import { T, useThrelte } from '@threlte/core'
import { XR, Controllers, Hands, useXREvent } from '$lib'
  
const { camera } = useThrelte()

useXREvent('select', (event) => console.log('useXREvent select', event), {
  handedness: 'right'
})

camera.current.position.z = 1.75
camera.current.lookAt(0, 1.75, 1)

</script>

<XR
  on:sessionstart={(event) => console.log('sessionstart', event)}
  on:sessionend={(event) => console.log('sessionend', event)}
  on:visibilitychange={(event) => console.log('visibilitychange', event)}
  on:inputsourceschange={(event) => console.log('inputsourceschange', event)}
/>

<Controllers
  on:connect={(event) => console.log('connect', event)}
  on:disconnect={(event) => console.log('disconnect', event)}
  on:select={(event) => console.log('select', event)}
/>

<Hands
  on:connect={(event) => console.log('connect', event)}
  on:disconnect={(event) => console.log('disconnect', event)}
/>

<T.Mesh rotation={[-Math.PI / 2, 0, 0]}>
  <T.CircleGeometry args={[1]} />
  <T.MeshBasicMaterial />
</T.Mesh>

<T.AmbientLight />
<T.DirectionalLight />
