import {settings} from '../settings'

const getCodeLine = (lineClasses = settings.elements.codeLine): any =>
  lineClasses.reduce((a: any, c: any) => {
    return [...a, ...document.querySelectorAll(c)]
  }, [])

const getContainer = (containerClasses = settings.elements.container): any =>
  containerClasses
    .map((container: any) => {
      const el = document.getElementsByClassName(container)[0]

      return el && el
    })
    .filter(x => !!x)

export {getCodeLine, getContainer}
