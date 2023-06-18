<script lang='ts'>

import { createRawEventDispatcher } from '@threlte/core'
import Hand from './hand.svelte'

export let profile: 'mesh' | 'spheres' | 'boxes' | 'none' = 'mesh'

const dispatch = createRawEventDispatcher()

</script>

<Hand
  index={0}
  {profile}
  on:connect={(event) => dispatch('connect', event)}
  on:disconnect={(event) => dispatch('disconnect', event)}
  on:pinchstart={(event) => dispatch('pinchstart', event)}
  on:pinchend={(event) => dispatch('pinchend', event)}
>
  <slot name='left' />
</Hand>

<Hand
  index={1}
  {profile}
  on:connect={(event) => dispatch('connect', event)}
  on:disconnect={(event) => dispatch('disconnect', event)}
  on:pinchstart={(event) => dispatch('pinchstart', event)}
  on:pinchend={(event) => dispatch('pinchend', event)}
>
  <slot name='right' />
</Hand>
