import { session, referenceSpaceType, xr } from '$lib/stores'
import { getXRSessionOptions } from './get-xr-session-options'
import { fire } from '$lib/events'

/**
 * Starts / ends an XR session.
 *
 * @param sessionMode an XR session mode: 'inline' | 'immersive-vr' | 'immersive-ar'
 * @param sessionInit an XRSessionInit object
 * @param force Whether this button should only enter / exit an `XRSession`. Default is to toggle both ways
 * @returns 
 */
export const toggleXRSession = async (
  sessionMode: XRSessionMode,
  sessionInit?: (XRSessionInit & { domOverlay?: { root: HTMLElement } | undefined }) | undefined,
  force?: 'enter' | 'exit'
): Promise<XRSession | undefined> => {
  const currentSession = session.current
  const hasSession = currentSession !== undefined
  console.log(1)

  if (force === 'enter' && hasSession) return currentSession
  if (force === 'exit' && !hasSession) return

  // Exit a session if entered
  if (hasSession) {
    await currentSession.end()
    session.set(undefined)
    return
  }

  // Otherwise enter a session
  const options = getXRSessionOptions(referenceSpaceType.current, sessionInit)
  const nextSession = await navigator.xr!.requestSession(sessionMode, options)
  console.log(nextSession)

  if (xr.current === undefined) {
    throw new Error('An <XR> component was not created when attempting to toggle a session.')
  }

  await xr.current.setSession(nextSession)
  console.log(2)

  session.set(nextSession)
  return nextSession
}
