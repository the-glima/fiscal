import {onReady} from './contentscript/on-ready'
import {paint} from './contentscript/paint'
import {onMessage} from './data/messaging.data'
import {MessageEventParams} from './models/messaging.model'

// ContentScript Init
;(() => {
  // Azure or GiHub PR pages only
  console.log('%c⧭', 'color: #d90000', 'CONTENTSCRIPT INIT')

  // Paint and fires scroll event listener when it's ready
  window.requestAnimationFrame(onReady)

  // When receiving a message from popup re-paint
  onMessage((params: MessageEventParams) => {
    paint()
  })
})()
