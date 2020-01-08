import {settings} from '../settings'

const DOMGetCodeLine = (lineClasses = settings.contentScript.elements.codeLine): any =>
  lineClasses.reduce((acc: any, cur: any) => [...acc, ...document.querySelectorAll(cur)], [])

const DOMGetContainer = (containerClasses = settings.contentScript.elements.container): any => {
  const result = containerClasses
    .map((container: any) => document.getElementsByClassName(container)[0])
    .filter(x => !!x)

  return result.length > 0 ? result : null
}

export {DOMGetCodeLine, DOMGetContainer}
