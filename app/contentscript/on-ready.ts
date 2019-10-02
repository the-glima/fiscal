import * as getters from './getters'
import {paint} from './paint'

export const onReady = (): any => {
  const container = getters.getContainer()

  if (document.body && container) {
    const codeLine = getters.getCodeLine()

    if (codeLine && codeLine.length > 1) {
      paint()

      container.addEventListener('scroll', () => paint(), false)

      return
    }
  }

  window.requestAnimationFrame(onReady)
}
