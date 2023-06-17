<script lang='ts'>

import XRButton from './button.svelte'

</script>

<XRButton
  {...$$props}
  mode='immersive-ar'
  sessionInit={{
    domOverlay: typeof document !== 'undefined' ? { root: document.body } : undefined,
    optionalFeatures: ['hit-test', 'dom-overlay', 'dom-overlay-for-handheld-ar']
  }}
/>
