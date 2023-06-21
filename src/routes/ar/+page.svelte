<script lang='ts'>

import { Canvas } from '@threlte/core'
import { ARButton } from '$lib'
import Scene from './scene.svelte'

</script>

<Canvas frameloop='always'>
  <Scene />
</Canvas>

<ARButton />

