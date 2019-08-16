import {settings} from './settings'
import {onScroll} from './on-scroll'
import {mutationObserver} from './mutation-observer'
import {paint} from './paint'
import {findMatch} from './find-match'

export const init = (container: Element[], elCollection: Element[]) => {
  const editor =  container.find(el => !!el)
  const observer = mutationObserver(paint)

  observer.observe(editor, settings.mutationObserver)

  const arrayMatches = findMatch(settings.regex, elCollection)
  paint(arrayMatches, 'span', settings.styles)

  onScroll(container, paint(arrayMatches, 'span', settings.styles))
}
