import * as getters from './getters'
import {paint} from './paint'

export const onReady = (): any => {
  if (document.body) {
    const codeLine = getters.getCodeLine()

    console.log(codeLine);
    
    if (codeLine && codeLine.length > 1) {
      paint()

      return
    }
  }

  // window.requestAnimationFrame(onReady)
}
