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

export const toggleSession = async (
  sessionMode: XRSessionMode,
  sessionInit: XRSessionInit & { domOverlay?: { root: HTMLElement } | undefined } | undefined,
  enterOnly: boolean,
  exitOnly: boolean,
) => {
  const sess = get(session)

  // Bail if certain toggle way is disabled
  if (sess && enterOnly) return
  if (!sess && exitOnly) return

  // Exit/enter session
  if (sess) {
    return await stopSession()
  } else {
    return await startSession(sessionMode, sessionInit)
  }
}

export const startSession = async (
  sessionMode: XRSessionMode,
  sessionInit: XRSessionInit & { domOverlay?: { root: HTMLElement } | undefined } | undefined,
): Promise<XRSession | undefined> => {
  let sess = get(session)

  if (sess) {
    console.warn('@react-three/xr: session already started, please stop it first')
    return
  }

  const options = getSessionOptions(get(referenceSpaceType), sessionInit)
  sess = await navigator.xr!.requestSession(sessionMode, options)
  session.set(sess)
  return sess
}

export const stopSession = async () => {
  const sess = get(session)

  if (!sess) {
    console.warn('@react-three/xr: no session to stop, please start it first')
    return
  }

  await sess.end()
  session.set(undefined)
}