import * as THREE from 'three'
import { onDestroy } from 'svelte'
import { session } from '$lib/stores'
import type { HitTestCallback } from '$lib/types'
import { useThrelte, useFrame } from '@threlte/core'

/**
 * Use this hook to perform a hit test for an AR environment.
 *
 * @param hitTestCallback 
 */
export const useHitTest = (hitTestCallback: HitTestCallback): void => {
  const { renderer } = useThrelte()
  const { xr } = renderer!

  const hitMatrix = new THREE.Matrix4()

  let hitTestSource: XRHitTestSource | undefined

  const unsub = session.subscribe((value) => {
    if (value === undefined) {
      hitTestSource = undefined
      return
    }

    value.requestReferenceSpace('viewer').then(async (space) => {
      hitTestSource = await value.requestHitTestSource?.({ space })
    })
  })

  const { stop } = useFrame(() => {
    const frame = xr.getFrame()

    if (hitTestSource === undefined) return

    const [hit] = frame.getHitTestResults(hitTestSource)

    if (hit === undefined) return
    
    const referenceSpace = xr.getReferenceSpace()

    if (referenceSpace === null) return

    const pose = hit.getPose(referenceSpace)

    if (pose === undefined) return

    hitMatrix.fromArray(pose.transform.matrix)
    hitTestCallback(hitMatrix, hit)
  })

  onDestroy(() => {
    stop()
    unsub()
  })
}
