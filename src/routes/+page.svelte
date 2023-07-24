<script lang='ts'>

import { base } from '$app/paths'

const demos = [
  ['Events', 'events'],
  ['Custom controller models', 'models'],
  ['Hands', 'hands'],
  ['Teleporting', 'teleport'],
  ['Immersive AR', 'ar'],
  ['BonkSaber', 'bonksaber'],
  ['Hand Physics', 'hand-physics'],
] as const

</script>

<main class='p-4'>
  <h1 class='font-bold text-xl'>Demos</h1>
  {#each demos as [text, href] (href)}
    <a href='{base}/{href}' class='block hover:underline'>{text}</a>
  {/each}
</main>
