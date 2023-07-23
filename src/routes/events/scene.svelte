<script lang='ts'>

import { T, useThrelte } from '@threlte/core'
import { XR, Controllers, Hands, useXRControllerEvent, useXRHandEvent } from '$lib'
  
const { camera } = useThrelte()

useXRControllerEvent('select', (event) => console.log('useXRControllerEvent', event), {
  handedness: 'right'
})

useXRControllerEvent('squeeze', (event) => console.log('useXRControllerEvent', event), {
  handedness: 'right'
})

useXRHandEvent('connected', (event) => console.log('useXRHandEvent', event), {
  handedness: 'left'
})

useXRHandEvent('pinchstart', (event) => console.log('useXRHandEvent', event), {
  handedness: 'left'
})

useXRHandEvent('pinchend', (event) => console.log('useXRHandEvent', event), {
  handedness: 'left'
})

camera.current.position.z = 1.75
camera.current.lookAt(0, 1.75, 1)

</script>

<XR
  on:sessionstart={(event) => console.log('sessionstart', event)}
  on:sessionend={(event) => console.log('sessionend', event)}
  on:visibilitychange={(event) => console.log('visibilitychange', event)}
  on:inputsourceschange={(event) => console.log('inputsourceschange', event)}
>
  <Controllers
    on:connected={(event) => console.log('connected:controller', event)}
    on:disconnected={(event) => console.log('disconnected:controller', event)}
    on:select={(event) => console.log('select', event)}
    on:selectstart={(event) => console.log('selectstart', event)}
    on:selectend={(event) => console.log('selectend', event)}
    on:squeeze={(event) => console.log('squeeze', event)}
    on:squeezestart={(event) => console.log('squeezestart', event)}
    on:squeezeend={(event) => console.log('squeezeend', event)}
  />

  <Hands
    on:connected={(event) => console.log('connected:controller', event)}
    on:disconnected={(event) => console.log('disconnected:controller', event)}

  />
</XR>

<T.Mesh rotation={[-Math.PI / 2, 0, 0]}>
  <T.CircleGeometry args={[1]} />
  <T.MeshBasicMaterial />
</T.Mesh>

<T.AmbientLight />
<T.DirectionalLight />
