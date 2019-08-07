export const onScroll = (container: Element[], callback: any): void => {
  let timeout: number
  const containerMatched = container.find(el => !!el)

  if (!containerMatched) return

  containerMatched.addEventListener(
    'scroll',
    () => {
      if (timeout) window.cancelAnimationFrame(timeout)

      timeout = window.requestAnimationFrame(callback())
    },
    false
  )
}
