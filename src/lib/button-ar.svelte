<script lang='ts'>

import { createEventDispatcher } from 'svelte'
import XRButton from './button.svelte'

const dispatch = createEventDispatcher()

</script>

<!--
@component
`<ARButton />` is an HTML `<button />` that can be used to init and display info about your immersive AR session.

```svelte
  <ARButton
    on:error={(event) => {}}
    on:click={(event) => {}}
  />
```
-->
<XRButton
  {...$$props}
  mode='immersive-ar'
  sessionInit={{
    domOverlay: typeof document !== 'undefined' ? { root: document.body } : undefined,
    optionalFeatures: ['hit-test', 'dom-overlay', 'dom-overlay-for-handheld-ar']
  }}
  on:click={(event) => dispatch('click', event.detail)}
  on:error={(event) => dispatch('error', event.detail)}
/>
