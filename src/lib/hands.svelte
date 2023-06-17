<script lang='ts'>

import Hand from './hand.svelte'

export let profile: 'mesh' | 'spheres' | 'boxes' = 'mesh'

</script>

<Hand index={0} {profile} />
<Hand index={1} {profile} />
