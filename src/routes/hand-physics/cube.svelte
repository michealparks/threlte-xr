<script lang='ts'>

import { T } from '@threlte/core'
import { Collider, RigidBody } from '@threlte/rapier'

const size = 0.06

</script>

<T.Group {...$$restProps}>
  <RigidBody type='dynamic' canSleep={false}>
    <Collider shape='cuboid' args={[size / 2, size / 2, size / 2]} />
    <T.Mesh>
      <T.BoxGeometry args={[size, size, size]} />
      <T.MeshPhysicalMaterial roughness={0} color='red' />
    </T.Mesh>
  </RigidBody>  
</T.Group>
