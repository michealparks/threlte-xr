<script lang='ts'>

const demos = [
  ['Hands', '/hands']
] as const

</script>

<main class='p-4'>
  <h1 class='font-bold text-xl'>Demos</h1>
  {#each demos as [text, href] (href)}
    <a {href} class='hover:underline'>{text}</a>
  {/each}
</main>
