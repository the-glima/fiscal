import {checkPage} from './contentscript/check-page'
import {onReady} from './contentscript/on-ready'
import {paint} from './contentscript/paint'
import {onMessage} from './data/messaging.data'
import {settings} from './settings'

// ContentScript Init
;(() => {
  // Azure or GiHub PR pages only
  if (!checkPage(settings.url)) return

  // Paint and fires scroll event listener when it's ready
  window.requestAnimationFrame(onReady)

  // When receiving a message from popup re-paint
  onMessage(paint)
})()
