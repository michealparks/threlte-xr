<script lang='ts'>

import { createRawEventDispatcher } from '@threlte/core'
import Hand from './hand.svelte'
import type { XREvent } from './types'

export let profile: 'mesh' | 'spheres' | 'boxes' | 'none' = 'mesh'

type $$Events = {
  connected: XREvent<'connected'>
  disconnected: XREvent<'disconnected'>
  pinchstart: XREvent<'pinchstart'>
  pinchend: XREvent<'pinchend'>
}

const dispatch = createRawEventDispatcher<$$Events>()

</script>

<Hand
  index={0}
  {profile}
  on:connected={(event) => dispatch('connected', event)}
  on:disconnected={(event) => dispatch('disconnected', event)}
  on:pinchstart={(event) => dispatch('pinchstart', event)}
  on:pinchend={(event) => dispatch('pinchend', event)}
>
  <slot name='left' />
</Hand>

<Hand
  index={1}
  {profile}
  on:connected={(event) => dispatch('connected', event)}
  on:disconnected={(event) => dispatch('disconnected', event)}
  on:pinchstart={(event) => dispatch('pinchstart', event)}
  on:pinchend={(event) => dispatch('pinchend', event)}
>
  <slot name='right' />
</Hand>
