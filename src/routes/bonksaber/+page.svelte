<script lang='ts'>

import { Canvas } from '@threlte/core'
import { VRButton } from '$lib'
import { World, Debug } from '@threlte/rapier'
import Scene from './scene.svelte'

</script>

<Canvas>
  <World gravity={[0, 0, 0]}>
    <Debug />
    <Scene />
  </World>
</Canvas>

<VRButton
  on:click={(event) => console.log('vr button click', event)}
  on:error={(event) => console.log('vr button error', event)}
/>
  