<script lang='ts'>

import { afterUpdate } from 'svelte'
import { T } from '@threlte/core'

afterUpdate(() => {
  console.log('update')
})

console.log($$slots)

</script>

<!--
  ### TeleportationPlane

  A teleportation plane with a marker that will teleport on interaction.

  ```jsx
  import { TeleportPlane } from '@react-three/xr'
  ;<TeleportPlane
    /** Whether to allow teleportation from left controller. Default is `false` */
    leftHand={false}
    /** Whether to allow teleportation from right controller. Default is `false` */
    rightHand={false}
    /** The maximum distance from the camera to the teleportation point. Default is `10` */
    maxDistance={10}
    /** The radial size of the teleportation marker. Default is `0.25` */
    size={0.25}
  />
  ```
-->
<T.Group>
  <slot />
</T.Group>


