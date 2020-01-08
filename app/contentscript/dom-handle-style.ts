import {DOMAddStyleParams} from '../models/contentscript.model'
import {settings} from '../settings'

const DOMAddStyle = ({
  contentMatches, 
  itemFoundProps = settings.contentScript.itemFoundProps
}: DOMAddStyleParams) => {
  if (!contentMatches) return

  contentMatches.forEach((el: HTMLElement) => {
    el.className = itemFoundProps.element.className
    el.style.cssText = itemFoundProps.element.style

    let elIcon = document.createElement('span')
    elIcon.innerText = itemFoundProps.icon.content as string
    elIcon.className = itemFoundProps.icon.className
    elIcon.style.cssText = itemFoundProps.icon.style

    el.appendChild(elIcon)
  })
}

const DOMRemoveStyle = (
  elementClass = settings.contentScript.itemFoundProps.element.className,
  iconElementClass = settings.contentScript.itemFoundProps.icon.className,
  ) => {
  const foundStylesElements = document.querySelectorAll(`.${elementClass}`)

  if (!foundStylesElements.length) return

  foundStylesElements.forEach((el: any) => {
    el.removeAttribute('style')
    el.removeChild(document.getElementsByClassName(iconElementClass))
  })
}

export {DOMAddStyle, DOMRemoveStyle}
