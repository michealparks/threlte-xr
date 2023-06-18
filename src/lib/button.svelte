<script lang='ts'>

import { createEventDispatcher } from 'svelte'
import { toggleSession, getSupportState } from './utils'
import { session } from './stores'

/** The type of `XRSession` to create */
export let mode: XRSessionMode

/**
 * `XRSession` configuration options
 * @see https://immersive-web.github.io/webxr/#feature-dependencies
 */
export let sessionInit: XRSessionInit & { domOverlay?: { root: HTMLElement } | undefined } | undefined

/** Whether this button should only enter an `XRSession`. Default is `false` */
export let enterOnly: boolean = false

/** Whether this button should only exit an `XRSession`. Default is `false` */
export let exitOnly: boolean = false

const dispatch = createEventDispatcher()

const handleButtonClick = async (state: string) => {
  dispatch('click', { state })

  if (state !== 'supported') return

  try {
    await toggleSession(mode, sessionInit, enterOnly, exitOnly)
  } catch (error) {
    /** This callback gets fired if XR initialization fails. */
    dispatch('error', error)
  }
}

$: modeText = { 'immersive-vr': 'VR', 'immersive-ar': 'AR', inline: 'inline' }[mode]

</script>

{#await getSupportState(mode) then state}
  <button {...$$props} on:click={() => handleButtonClick(state)}>
    {#if state === 'unsupported'}
      {modeText} unsupported
    {:else if state === 'insecure'}
      HTTPS needed
    {:else if state === 'blocked'}
      {modeText} blocked
    {:else if state === 'supported'}
      {$session ? 'Exit' : 'Enter'} {modeText}
    {/if}
  </button>
{/await}

<style>
  button {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    border: 1px solid white;
    background: rgba(0, 0, 0, 0.1);
    color: white;
    outline: none;
    z-index: 99999;
  }
</style>
