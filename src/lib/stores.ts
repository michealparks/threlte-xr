import * as THREE from 'three'
import { get, writable } from 'svelte/store'
import type { XRInteractionType, XRInteractionHandler } from './types'

export const xrFrame = writable<XRFrame>()
export const session = writable<XRSession | undefined>()
export const referenceSpaceType = writable<XRReferenceSpaceType | undefined>()
export const player = writable(new THREE.Group())
export const controllers = writable<{ controller: THREE.XRTargetRaySpace, inputSource: XRInputSource }[]>([])
export const isPresenting = writable(false)
export const isHandTracking = writable(false)
export const hoverState = writable<Record<XRHandedness, Map<THREE.Object3D, THREE.Intersection>>>({
  left: new Map(),
  right: new Map(),
  none: new Map()
})

export const events = writable({})
export const interactions = writable<Map<THREE.Object3D, Record<string, XRInteractionHandler[]>>>(new Map())

export const hasInteraction = (object: THREE.Object3D, eventType: XRInteractionType) => {
  return get(interactions).get(object)?.[eventType]?.some((handler) => handler)
}

export const getInteraction = (object: THREE.Object3D, eventType: XRInteractionType) => {
  return get(interactions).get(object)?.[eventType]?.reduce((result, handler) => {
    if (handler) {
      result.push(handler)
    }
    return result
  }, [] as XRInteractionHandler[])
}

export const addInteraction = (
  object: THREE.Object3D,
  eventType: XRInteractionType,
  handler: XRInteractionHandler
) => {
  interactions.update((value) => {
    if (!value.has(object)) {
      value.set(object, {
        onHover: [],
        onBlur: [],
        onSelect: [],
        onSelectEnd: [],
        onSelectStart: [],
        onSelectMissed: [],
        onSqueeze: [],
        onSqueezeEnd: [],
        onSqueezeStart: [],
        onSqueezeMissed: [],
        onMove: []
      })
    }

    const target = value.get(object)!
    target[eventType]?.push(handler)

    return value
  }) 
}

export const removeInteraction = (
  object: THREE.Object3D,
  eventType: XRInteractionType,
  handler: XRInteractionHandler
) => {
  interactions.update((value) => {
    const target = value.get(object)

    if (target) {
      const interactionIndex = target[eventType]?.indexOf(handler) ?? -1
      if (interactionIndex !== -1) target[eventType]?.splice(interactionIndex, 1)
    }

    return value
  })
}
