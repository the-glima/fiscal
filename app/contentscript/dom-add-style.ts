import {DOMAddStyleParams, ItemFoundEnum} from '../models/contentscript.model'
import {settings} from '../settings'

const DOMAddStyle = ({contentMatches, targetElement = 'span', style = settings.styles}: DOMAddStyleParams) => {
  if (!contentMatches) return

  contentMatches.forEach((el: Element) =>
    el.querySelectorAll(targetElement).forEach((child: any) => {
      child.className = ItemFoundEnum.class
      child.style.cssText = style
    })
  )
}

const DOMRemoveStyle = (elementClass = ItemFoundEnum.class) => {
  const styledElements = document.querySelectorAll(`.${elementClass}`)

  if (!styledElements.length) return

  styledElements.forEach((el: any) => el.removeAttribute('style'))
}

export {DOMAddStyle, DOMRemoveStyle}
