import {DOMOnReady} from './contentscript/dom-on-ready'
import {DOMRepaint} from './contentscript/dom-repaint'
import {onMessage} from './data/messaging.data'
import {MessageEventParams} from './models/message-data.model'

(() => {
  console.log('%c⧭', 'color: #d90000', 'CONTENTSCRIPT INIT')

  window.requestAnimationFrame(DOMOnReady)

  onMessage((params: MessageEventParams) => {
    DOMRepaint()
  })
})()
