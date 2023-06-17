<h1>threlte-xr</h1>

[![Version](https://img.shields.io/npm/v/threlte-xr?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/threlte-xr)
[![Downloads](https://img.shields.io/npm/dt/threlte-xr.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/threlte-xr)

Svelte components and hooks for creating VR/AR applications with [threlte (v6)](https://next.threlte.xyz/)

```bash
npm install threlte-xr
```

## Getting started

The following adds a button to start your session and controllers inside an XR manager to prepare your scene for WebXR rendering and interaction.

```html
<script>
  import { VRButton, ARButton, XR, Controllers, Hands } from 'threlte-xr'
  import { Canvas } from '@threlte/core'
  import Scene from './scene.svelte'
</script>

<VRButton />

<Canvas>
  <XR />
  <Controllers />
  <Hands />
  <Scene />
  </XR>
</Canvas>
```

## XRButton

`<XRButton />` is an HTML `<button />` that can be used to init and display info about your WebXR session. This is aliased by `ARButton` and `VRButton` with sensible session defaults.

```jsx
<XRButton
  /* The type of `XRSession` to create */
  mode={'immersive-ar' | 'immersive-vr' | 'inline'}
  /**
   * `XRSession` configuration options
   * @see https://immersive-web.github.io/webxr/#feature-dependencies
   */
  sessionInit={{ optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking', 'layers'] }}
  /** Whether this button should only enter an `XRSession`. Default is `false` */
  enterOnly={false}
  /** Whether this button should only exit an `XRSession`. Default is `false` */
  exitOnly={false}
  /** This callback gets fired if XR initialization fails. */
  onError={(error) => ...}
>
  {/* Can accept regular DOM children and has an optional callback with the XR button status (unsupported, exited, entered) */}
  {(status) => `WebXR ${status}`}
</XRButton>
```

## XR

`<XR />` is a WebXR manager that configures your scene for XR rendering and interaction. This lives within a R3F `<Canvas />`.

```svelte
<Canvas>
  <!--
    PROPS:
    foveation:
    Enables foveated rendering. Default is `0`
    0 = no foveation, full resolution
    1 = maximum foveation, the edges render at lower resolution

    frameRate:
    The target framerate for the XRSystem. Smaller rates give more CPU headroom at the cost of responsiveness.
    Recommended values are `72`, `90`, or `120`. Default is unset and left to the device.
    @note If your experience cannot effectively reach the target framerate, it will be subject to frame reprojection
    which will halve the effective framerate. Choose a conservative estimate that balances responsiveness and
    headroom based on your experience.
    @see https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Rendering#refresh_rate_and_frame_rate

    referenceSpace:
    Type of WebXR reference space to use. Default is `local-floor`

    EVENTS:
    sessionstart:
    Called as an XRSession is requested

    sessionend:
    Called after an XRSession is terminated

    visibilitychange:
    Called when an XRSession is hidden or unfocused

    inputsourceschange:
    Called when available inputsources change
  -->
  <XR
    foveation={0}
    frameRate={90}
    referenceSpace="local-floor"
    on:sessionstart={(event: XREvent<XRManagerEvent>) => {}}
    on:sessionend={(event: XREvent<XRManagerEvent>) => {}}
    on:visibilitychange={(event: XREvent<XRSessionEvent>) => {}}
    on:inputsourceschange={(event: XREvent<XRSessionEvent>) => {}}
  />
  <!-- All your regular threlte elements go here -->
</Canvas>
```

### useXR

This hook gives you access to the current `XRState` configured by `<XR />`.

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
  referenceSpace
} = useXR()
```

## Controllers

Controllers can be added with `<Controllers />` for [motion-controllers](https://github.com/immersive-web/webxr-input-profiles/tree/main/packages/motion-controllers) and/or `<Hands />` for hand-tracking. These will activate whenever their respective input mode is enabled on-device and provide live models for a left and right `XRController`.

```jsx
<Controllers
  /** Optional material props to pass to controllers' ray indicators */
  rayMaterial={{ color: 'blue' }}
  /** Whether to hide controllers' rays on blur. Default is `false` */
  hideRaysOnBlur={false}
/>
<Hands
  // Optional custom models per hand. Default is the Oculus hand model
  modelLeft="/model-left.glb"
  modelRight="/model-right.glb"
/>
```

### useController

`useController` references an `XRController` by handedness, exposing position and orientation info.

```jsx
const leftController = useController('left')
const rightController = useController('right')
const gazeController = useController('none')
```

### XRController

`XRController` is an `Object3D` that represents an [`XRInputSource`](https://developer.mozilla.org/en-US/docs/Web/API/XRInputSource) with the following properties:

```jsx
index: number
controller: THREE.XRTargetRaySpace
grip: THREE.XRGripSpace
hand: THREE.XRHandSpace
inputSource: XRInputSource
```

### useXREvent

To handle controller events that are not bound to any object in the scene you can use `useXREvent` hook. This is a low-level abstraction that subscribes directly into the native XRInputSource (see [`XRInputSourceEvent`](https://developer.mozilla.org/en-US/docs/Web/API/XRInputSourceEvent#event_types)).

```jsx
useXREvent('squeeze', (event: XRControllerEvent) => ...)
```

It supports an optional third parameter with options for filtering by handedness.

```jsx
useXREvent('squeeze', (event: XRControllerEvent) => ..., { handedness: 'left' | 'right' | 'none' })
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
