import { session, referenceSpaceType } from './stores'
import { get } from 'svelte/store'

/**
 * Gets the support state of requested session mode.
 * @param mode 
 * @returns The current support state
 */
export const getSupportState = async (mode: XRSessionMode): Promise<'unsupported' | 'insecure' | 'blocked' | 'supported'> => {
  if (navigator?.xr === undefined) {
    return 'unsupported'
  }

  if (location.protocol !== 'https:') {
    return 'insecure'
  }

  try {
    const supported = await navigator.xr.isSessionSupported(mode)
    return supported ? 'supported' : 'unsupported'
  } catch (error) {
    return (error as { name: string }).name === 'SecurityError' ? 'blocked' : 'unsupported'
  }
}

const getSessionOptions = (
  globalStateReferenceSpaceType: XRReferenceSpaceType | undefined,
  sessionInit: XRSessionInit | undefined
): XRSessionInit | undefined => {
  if (!globalStateReferenceSpaceType && !sessionInit) {
    return undefined
  }

  if (globalStateReferenceSpaceType && !sessionInit) {
    return { optionalFeatures: [globalStateReferenceSpaceType] }
  }

  if (globalStateReferenceSpaceType && sessionInit) {
    return {
      ...sessionInit,
      optionalFeatures: [
        ...new Set([...(sessionInit.optionalFeatures ?? []),
        globalStateReferenceSpaceType])
      ]
    }
  }

  return sessionInit
}

/**
 * Starts / ends an XR session.
 *
 * @param sessionMode an XR session mode: 'inline' | 'immersive-vr' | 'immersive-ar'
 * @param sessionInit an XRSessionInit object
 * @param enterOnly only 
 * @param exitOnly 
 * @returns 
 */
export const toggleSession = (
  sessionMode: XRSessionMode,
  sessionInit: XRSessionInit & { domOverlay?: { root: HTMLElement } | undefined } | undefined,
  enterOnly: boolean,
  exitOnly: boolean,
) => {
  const hasSession = get(session) !== undefined

  // Bail if certain toggle way is disabled
  if (hasSession && enterOnly) return
  if (!hasSession && exitOnly) return

  // Exit/enter session
  if (hasSession) {
    return stopSession()
  } else {
    return startSession(sessionMode, sessionInit)
  }
}

export const startSession = async (
  sessionMode: XRSessionMode,
  sessionInit: XRSessionInit & { domOverlay?: { root: HTMLElement } | undefined } | undefined,
): Promise<XRSession | undefined> => {
  let currentSession = get(session)

  if (currentSession !== undefined) {
    console.warn('threlte-xr: session already started.')
    return currentSession
  }

  const options = getSessionOptions(get(referenceSpaceType), sessionInit)
  const nextSession = await navigator.xr!.requestSession(sessionMode, options)
  session.set(nextSession)
  return nextSession
}

export const stopSession = async () => {
  const currentSession = get(session)

  if (currentSession === undefined) {
    console.warn('threlte-xr: no session to stop.')
    return
  }

  await currentSession.end()
  session.set(undefined)
}
