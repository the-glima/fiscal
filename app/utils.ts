export const getPropertySafe = (fn: Function, defaultVal?: any) => {
  try {
    return fn()
  } catch {
    return defaultVal
  }
}
