<script lang='ts'>
import { Hands, XR, useXR } from '$lib'
import { T } from '@threlte/core'
import JointCollider from './joint-collider.svelte'
import Cube from './cube.svelte'
import { useHandsReady } from './use-hands-ready'

const { isHandTracking } = useXR()
const handsReady = useHandsReady()

</script>

<XR>
  <Hands />

  {#if $isHandTracking && $handsReady}
    {#each { length: 25 } as _, jointIndex}
      <JointCollider {jointIndex} handIndex={0} />
      <JointCollider {jointIndex} handIndex={1} />
    {/each}
  {/if}  
</XR>

{#each { length: 100 } as _, index}
  <Cube position={[((index % 5) - 2) / 2, 0.5 + (index / 50), -0.5]} />
{/each}

<T.AmbientLight intensity={0.5} />
<T.SpotLight position={[1, 8, 1]} angle={0.3} penumbra={1} intensity={1} castShadow />
