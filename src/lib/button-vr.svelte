<script lang='ts'>

import XRButton from './button.svelte'

</script>

<XRButton
  {...$$props}
  mode='immersive-vr'
  sessionInit={{
    optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking', 'layers']
  }}
/>
