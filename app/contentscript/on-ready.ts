import * as getters from './getters'
import {paint} from './paint'

const onScroll = (container: any) => {
  let timeout: any

  container.addEventListener(
    'scroll',
    (event: any) => {
      if (timeout) window.cancelAnimationFrame(timeout)

      timeout = window.requestAnimationFrame(paint)
    },
    false
  )
}

const onReady = (): any => {
  if (document.body) {
    const container = getters.getContainer()

    if (container && container[0]) {
      const codeLine = getters.getCodeLine()

      if (codeLine && codeLine.length > 1) {
        paint()
        onScroll(container[0])

        return
      }
    }
  }

  window.requestAnimationFrame(onReady)
}

export {onScroll, onReady}
