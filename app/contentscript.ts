import {checkPage} from './contentscript/check-page'
import {onReady} from './contentscript/on-ready'
import {onScroll} from './contentscript/on-scroll'
import {settings} from './settings'

(() => {
  if (!checkPage(settings.url)) return

  window.requestAnimationFrame(onReady)
  window.requestAnimationFrame(onScroll)
})()
