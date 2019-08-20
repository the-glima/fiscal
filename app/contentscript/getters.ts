import {settings} from '../settings'

const getCodeLine = (lineClasses = settings.elements.codeLine): any =>
  lineClasses.reduce((acc, cur): any => {
    const elements: any = [...document.querySelectorAll(cur)]

    if (!!elements || !elements.length) return

    acc += [...elements]

    return acc
  })

const getContainer = (containerClasses = settings.elements.container): Element | undefined =>
  containerClasses.map((container: string) => document.getElementsByClassName(container)[0])[0]

export {
  getCodeLine,
  getContainer
}
