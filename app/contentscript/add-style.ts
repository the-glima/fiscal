import {AddStyleParams, ItemFoundEnum} from '../models/contentscript.model'
import {settings} from '../settings'

const addStyle = ({contentMatches, targetElement = 'span', style = settings.styles}: AddStyleParams) =>
  contentMatches.forEach((el: Element) =>
    el.querySelectorAll(targetElement).forEach((child: any) => {
      child.className = ItemFoundEnum.class
      child.style.cssText = style
    })
  )

const removeStyle = (elementClass = ItemFoundEnum.class) => {
  const styledElements = document.querySelectorAll(`.${elementClass}`)

  if (!styledElements.length) return

  styledElements.forEach((el: any) => el.removeAttribute('style'))
}

export {addStyle, removeStyle}
