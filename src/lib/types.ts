
export type XRManagerEventType = 'sessionstart' | 'sessionend'


export interface XRController {
  controller: THREE.XRTargetRaySpace
  inputSource: XRInputSource
}

export interface XRManagerEvent {
  type: XRManagerEventType
  target: XRSession
}

export interface XREventRepresentation {
  type: string
  target: any
}

export interface XREventOptions {
  handedness?: XRHandedness
}

export interface XREvent<T extends XREventRepresentation> {
  nativeEvent: T
  target: T['target']
}

export type XRControllerEventType = Exclude<THREE.XRControllerEventType, XRSessionEventType>

export interface XRControllerEvent {
  type: XRControllerEventType
  target: any
  data?: XRInputSource
  fake?: boolean
}

export type XREventHandler<T extends XREventRepresentation> = (event: XREvent<T>) => void
export interface XREventOptions {
  handedness?: XRHandedness
}

export type XRInteractionHandler = (event: XRInteractionEvent) => void

export interface XRInteractionEvent {
  intersection?: THREE.Intersection
  intersections: THREE.Intersection[]
  target: any
}

export type XRInteractionType =
  | 'onHover'
  | 'onBlur'
  | 'onSelect'
  | 'onSelectEnd'
  | 'onSelectStart'
  | 'onSelectMissed'
  | 'onSqueeze'
  | 'onSqueezeEnd'
  | 'onSqueezeStart'
  | 'onSqueezeMissed'
  | 'onMove'
