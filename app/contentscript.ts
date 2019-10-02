import {checkPage} from './contentscript/check-page'
import {onReady} from './contentscript/on-ready'
import {settings} from './settings'
;(() => {
  if (!checkPage(settings.url)) return

  window.requestAnimationFrame(onReady)
})()
