import {settings} from '../settings'

const DOMGetCodeLine = (lineClasses = settings.contentScript.elements.codeLine): any =>
  lineClasses.reduce((a: any, c: any) => {
    return [...a, ...document.querySelectorAll(c)]
  }, [])

const DOMGetContainer = (containerClasses = settings.contentScript.elements.container): any => {
  const result = containerClasses
    .map((container: any) => {
      const el = document.getElementsByClassName(container)[0]

      return !!el && el
    })
    .filter(x => !!x)

  return result.length > 0 ? result : null
}

export {DOMGetCodeLine, DOMGetContainer}
