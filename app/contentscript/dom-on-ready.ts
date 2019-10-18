import * as getters from './dom-getters'
import {DOMRepaint} from './dom-repaint'

const DOMOnScroll = (container: any) => {
  let timeout: any

  container.addEventListener(
    'scroll',
    () => {
      if (timeout) window.cancelAnimationFrame(timeout)

      timeout = window.requestAnimationFrame(DOMRepaint)
    },
    false
  )
}

const DOMOnReady = (): any => {
  if (document.body) {
    const container = getters.DOMGetContainer()

    if (container && container[0]) {
      const codeLine = getters.DOMGetCodeLine()

      if (codeLine && codeLine.length > 1) {
        DOMRepaint()
        DOMOnScroll(container[0])

        return
      }
    }
  }

  window.requestAnimationFrame(DOMOnReady)
}

export {DOMOnScroll, DOMOnReady}
