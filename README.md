<h1>threlte-xr</h1>

[![Version](https://img.shields.io/npm/v/threlte-xr?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/threlte-xr)
[![Downloads](https://img.shields.io/npm/dt/threlte-xr.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/threlte-xr)

Svelte components and hooks for creating VR/AR applications with [threlte (v6)](https://next.threlte.xyz/), inspired by the design of [react-xr](https://github.com/pmndrs/react-xr).

> **Warning**
> `threlte-xr` is early in development. There will likely be frequent breaking changes until it reaches 0.1.0. It will only work with Threlte v6 onward.

```bash
npm install threlte-xr
```

## Roadmap

- [x] XR Manager
- [x] Controller and Hand features
  - [ ] Custom hand models and children
  - [ ] Events
- [ ] Teleporting
- [ ] Smooth movement
- [ ] Interactive objects

## Getting started

The following adds a button to start your session and controllers inside an XR manager to prepare your scene for WebXR rendering and interaction.

```svelte
<script>
  import { VRButton, ARButton } from 'threlte-xr'
  import { Canvas } from '@threlte/core'
  import Scene from './scene.svelte'
</script>

<Canvas>
  <Scene />
</Canvas>

<VRButton />
```

Then, in `scene.svelte`:
```svelte
<script>
  import { XR, Controllers, Hands } from 'threlte-xr'
</script>

<XR />
<Controllers />
<Hands />
```

If you want the hands, controllers, or other objects to only be added to the `THREE.Scene` when the XR session starts, make them children of the `<XR>` component:

```svelte
<script>
  import { XR, Controllers, Hands } from 'threlte-xr'
</script>

<XR>
  <Controllers />
  <Hands />
</XR>
```

## XRButton

`<XRButton />` is an HTML `<button />` that can be used to init and display info about your WebXR session. This is aliased by `ARButton` and `VRButton` with sensible session defaults.

```svelte
<!--
  mode - The type of `XRSession` to create
  sessionInit - `XRSession` configuration options, see https://immersive-web.github.io/webxr/#feature-dependencies
  enterOnly - Whether this button should only enter an `XRSession`. Default is `false`
  exitOnly - Whether this button should only exit an `XRSession`. Default is `false`

  on:error - Dispatched if XR initialization fails.
  on:click - Dispatched if a click occurs.
-->
<XRButton
  mode={'immersive-ar' | 'immersive-vr' | 'inline'}
  sessionInit={{ optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking', 'layers'] }}
  enterOnly={false}
  exitOnly={false}
  on:error={(event) => {}}
  on:click={(event) => {}}
/>
```

## XR

`<XR />` is a WebXR manager that configures your scene for XR rendering and interaction. This lives within a Threlte `<Canvas />`.

```svelte
<Canvas>
  <!--
    foveation -
    Enables foveated rendering. Default is `0`
    0 = no foveation, full resolution
    1 = maximum foveation, the edges render at lower resolution

    frameRate -
    The target framerate for the XRSystem. Smaller rates give more CPU headroom at the cost of responsiveness.
    Recommended values are `72`, `90`, or `120`. Default is unset and left to the device.
    @note If your experience cannot effectively reach the target framerate, it will be subject to frame reprojection
    which will halve the effective framerate. Choose a conservative estimate that balances responsiveness and
    headroom based on your experience.
    @see https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Rendering#refresh_rate_and_frame_rate

    referenceSpace -
    Type of WebXR reference space to use. Default is `local-floor`

    on:sessionstart -
    Dispatched as an XRSession is requested

    on:sessionend -
    Dispatched after an XRSession is terminated

    on:visibilitychange -
    Dispatched when an XRSession is hidden or unfocused

    inputsourceschange -
    Dispatched when available inputsources change
  -->
  <XR
    foveation={0}
    frameRate={90}
    referenceSpace='local-floor'
    on:sessionstart={(event: XREvent<XRManagerEvent>) => {}}
    on:sessionend={(event: XREvent<XRManagerEvent>) => {}}
    on:visibilitychange={(event: XREvent<XRSessionEvent>) => {}}
    on:inputsourceschange={(event: XREvent<XRSessionEvent>) => {}}
  />
  <!-- All your regular threlte elements go here -->
</Canvas>
```

### useXR

This hook gives you access to the current state configured by `<XR />`.

```jsx
const {
  // An array of connected `XRController`
  controllers,
  // Whether the XR device is presenting in an XR session
  isPresenting,
  // Whether hand tracking inputs are active
  isHandTracking,
  // A THREE.Group representing the XR viewer or player
  player,
  // The active `XRSession`
  session,
  // `XRSession` foveation. This can be configured as `foveation` on <XR>. Default is `0`
  foveation,
  // `XRSession` reference-space type. This can be configured as `referenceSpace` on <XR>. Default is `local-floor`
  referenceSpace,
  // The current XRFrame
  xrFrame,
} = useXR()
```

## Controllers

Controllers can be added with `<Controllers />` for [motion-controllers](https://github.com/immersive-web/webxr-input-profiles/tree/main/packages/motion-controllers) and/or `<Hands />` for hand-tracking. These will activate whenever their respective input mode is enabled on-device and provide default models for a left and right `XRController`.

```svelte
<Controllers
  modelLeft={undefined | THREE.Object3D}
  modelRight={undefined | THREE.Object3D}
  on:connect={(event) => {}}
  on:disconnect={(event) => {}}
/>

<!-- Can accept children -->
<Controllers>
  <T slot='left' is={$gltf.scene} />
</Controllers>

<Hands
  profile={'mesh' | 'spheres' | 'boxes' | 'none'}
  on:connect={(event) => {}}
  on:disconnect={(event) => {}}
/>
```

### useController

`useController` references an `XRController` by handedness, exposing position and orientation info.

```jsx
const leftController = useController('left')
const rightController = useController('right')
const gazeController = useController('none')
```

### useXREvent

To handle controller events that are not bound to any object in the scene you can use `useXREvent` hook. This is a low-level abstraction that subscribes directly into the native XRInputSource (see [`XRInputSourceEvent`](https://developer.mozilla.org/en-US/docs/Web/API/XRInputSourceEvent#event_types)).

```jsx
useXREvent('squeeze', (event: XRControllerEvent) => {})
```

It supports an optional third parameter with options for filtering by handedness.

```jsx
useXREvent('squeeze', (event: XRControllerEvent) => {}, {
  handedness: 'left' | 'right' | 'none'
})
```

### Custom XRButton

While you can customize <XRButton>, you can also create your own. For this there's a couple of low-level utilities of a headless xr button: `startSession`, `stopSession` and `toggleSession`.

```jsx
import { toggleSession } from 'threlte-xr'

const handleClick = async () => {
  const session = await toggleSession('immersive-vr')
  if (session) {
    button.innerText = 'Exit VR'
  } else {
    button.innerText = 'Enter VR'
  }
}

const button = document.createElement('button')
button.innerText = 'Enter VR'
button.addEventListener('click', handleClick)
document.appendChild(button)
```
