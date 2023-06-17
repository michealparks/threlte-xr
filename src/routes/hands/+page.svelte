<script lang='ts'>

import { Canvas } from '@threlte/core'
import Scene from './scene.svelte'
import { VRButton } from '$lib';

</script>

<Canvas
  useLegacyLights={false}
>
  <Scene />
</Canvas>

<VRButton />