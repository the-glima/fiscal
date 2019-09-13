import {settings} from '../settings'

import {addStyle} from './add-style'
import {findMatch} from './find-match'
import * as getters from './getters'
import {mutationObserver} from './mutation-observer'

export const paint = (container = getters.getContainer(), codeLine = getters.getCodeLine()) => {
  if (!container || !codeLine.length) return

  const observer = mutationObserver(addStyle)

  observer.observe(container, settings.mutationObserver)

  const arrayMatches = findMatch(settings.regex, codeLine)

  addStyle(arrayMatches, 'span', settings.styles)
}
