import {settings} from '../settings'

const getCodeLine = (lineClasses = settings.elements.codeLine): any =>
  lineClasses.reduce((a: any, c:any) => {
    return [...a, ...document.querySelectorAll(c)]
  }, [])

const getContainer = (containerClasses = settings.elements.container): Element | undefined =>
  containerClasses.map((container: string) => document.getElementsByClassName(container)[0])[0]

export {
  getCodeLine,
  getContainer
}
