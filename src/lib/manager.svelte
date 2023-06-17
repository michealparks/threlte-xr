<script lang='ts'>

import * as THREE from 'three'
import { useFrame } from '@threlte/core'
//const get = useThree((state) => state.get)
//const events = useThree((state) => state.events)
import { interactions, hoverState, controllers, hasInteraction, getInteraction } from './stores'
import type { XRInteractionType, XREvent, XRControllerEvent } from './types'
import { useXREvent } from './hooks'

const tempMatrix = new THREE.Matrix4()
const raycaster = new THREE.Raycaster()

const intersect = (controller: THREE.Object3D) => {
  const objects = Array.from($interactions.keys())
  tempMatrix.identity().extractRotation(controller.matrixWorld)
  raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld)
  raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix)
  return raycaster.intersectObjects(objects, true)
}

// Trigger hover and blur events
useFrame(() => {
  if ($interactions.size === 0) return

  for (const target of $controllers) {
    const hovering = $hoverState[target.inputSource.handedness]
    const hits = new Set()
    let intersections = intersect(target.controller)

    // if (events.filter) {
    //   // https://github.com/mrdoob/three.js/issues/16031
    //   // Allow custom userland intersect sort order
    //   intersections = events.filter(intersections, get())
    // } else {
    //   // Otherwise, filter to first hit
    //   const hit = intersections.find((intersection) => intersection?.object)
    //   if (hit) intersections = [hit]
    // }

    for (const intersection of intersections) {
      let eventObject: THREE.Object3D | null = intersection.object

      while (eventObject) {
        if (hasInteraction(eventObject, 'onHover') && !hovering.has(eventObject)) {
          const handlers = getInteraction(eventObject, 'onHover')!
          for (const handler of handlers) {
            handler({ target, intersection, intersections })
          }
        }

        const moveHandlers = getInteraction(eventObject, 'onMove')
        moveHandlers?.forEach((handler) => handler({ target, intersection, intersections }))

        hovering.set(eventObject, intersection)
        hits.add(eventObject.id)
        eventObject = eventObject.parent
      }
    }

    // Trigger blur on all the object that were hovered in the previous frame
    // but missed in this one
    for (const eventObject of hovering.keys()) {
      if (!hits.has(eventObject.id)) {
        hovering.delete(eventObject)

        const handlers = getInteraction(eventObject, 'onBlur')
        if (!handlers) continue

        for (const handler of handlers) {
          handler({ target, intersections })
        }
      }
    }
  }
})

const triggerEvent = (interaction: XRInteractionType) => (event: XREvent<XRControllerEvent>) => {
  const hovering = $hoverState[event.target.inputSource.handedness as XRHandedness]
  const intersections = Array.from(new Set(hovering.values()))

  for (const [object, handlers] of $interactions) {
    if (hovering.has(object)) {
      if (!handlers[interaction]) return

      for (const handler of handlers[interaction] ?? []) {
        handler?.({ target: event.target, intersection: hovering.get(object)!, intersections })
      }
    } else {
      if (interaction === 'onSelect' && handlers['onSelectMissed']) {
        for (const handler of handlers['onSelectMissed']) {
          handler?.({ target: event.target, intersections })
        }
      } else if (interaction === 'onSqueeze' && handlers['onSqueezeMissed']) {
        for (const handler of handlers['onSqueezeMissed']) {
          handler?.({ target: event.target, intersections })
        }
      }
    }
  }
}

useXREvent('select', triggerEvent('onSelect'))
useXREvent('selectstart', triggerEvent('onSelectStart'))
useXREvent('selectend', triggerEvent('onSelectEnd'))
useXREvent('squeeze', triggerEvent('onSqueeze'))
useXREvent('squeezeend', triggerEvent('onSqueezeEnd'))
useXREvent('squeezestart', triggerEvent('onSqueezeStart'))

</script>
