
export const getXRSessionOptions = (
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
