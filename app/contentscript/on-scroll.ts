import * as getters from './getters'
import {onReady} from './on-ready'

export const onScroll = (): void => {
  let timeout: number
  const container = getters.getContainer()

  if (!container) return

  container.addEventListener(
    'scroll',
    () => {
      if (timeout) window.cancelAnimationFrame(timeout)

      timeout = window.requestAnimationFrame(onReady)
    },
    false
  )
}
