<script lang='ts'>

import { handJoints } from '$lib'
import { useThrelte, useFrame } from '@threlte/core'
import type { RigidBody as RapierRigidBody } from '@dimforge/rapier3d-compat'
import { Collider, RigidBody } from '@threlte/rapier'

export let jointIndex: number
export let handIndex: number

let body: RapierRigidBody

const { xr } = useThrelte().renderer!
const hand = xr.getHand(handIndex)
const joint = hand.joints[handJoints[jointIndex]!]!
const radius = joint.jointRadius ?? 0.0001

useFrame(() => {
  if (joint === undefined || body === undefined) return
  const { x, y, z } = joint.position
  body.setNextKinematicTranslation({ x, y, z })
})

</script>

<RigidBody bind:rigidBody={body} type='kinematicPosition'>
  <Collider shape='ball' args={[radius]} />
</RigidBody>
