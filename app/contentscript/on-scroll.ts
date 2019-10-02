import * as getters from './getters'
import {onReady} from './on-ready'
import {paint} from './paint'

export const onScroll = (container: any): void => {
  let timeout: number
  // const container = getters.getContainer()

  if (!container) return

  container.addEventListener(
    'scroll',
    () => {
      // if (timeout) window.cancelAnimationFrame(timeout)

      paint()
      // timeout = w  indow.requestAnimationFrame(onScroll)
    },
    false
  )
}
