import {init} from './contentscript/init'
import {checkPage} from './contentscript/check-page'
import {onReady} from './contentscript/on-ready'
import {settings} from './contentscript/settings'

;(() => {
  if (!checkPage(settings.url)) return

  console.log('=STARTLOG <>================================<> STARTLOG=');
  console.log(this);
  console.log('=ENDLOG <>================================<> ENDLOG=');

  const iframe: any = document.getElementById('azure')

  const diffContainer = [document.getElementsByClassName('summaryContainer')[0]]

  const elCollection = [...document.querySelectorAll('.vc-diff-viewer .diff-contents-row'), ...document.querySelectorAll('.view-lines .view-line')]

  const initialized = init(elCollection, diffContainer)

  window.requestAnimationFrame(onReady(elCollection, initialized))
})()
