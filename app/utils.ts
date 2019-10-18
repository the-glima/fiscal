export const getPropertySafe = (fn: Function, defaultVal?: any) => (fn() === undefined ? defaultVal : fn())
