import { currentWritable } from '@threlte/core'
import { controllers } from '$lib/stores'
import type { XRController } from '$lib/types'

const left = currentWritable<undefined | XRController>(undefined)
const right = currentWritable<undefined | XRController>(undefined)
const gaze = currentWritable<undefined | XRController>(undefined)

controllers.subscribe((value) => {
  for (let controller of value) {
    switch (controller.inputSource.handedness) {
      case 'left': return left.set(controller)
      case 'right': return right.set(controller)
      case 'none': return gaze.set(controller)
    }
  }
})

export const useController = (handedness: XRHandedness) => {
  switch (handedness) {
    case 'left': return left
    case 'right': return right
    case 'none': return gaze
  }
}
