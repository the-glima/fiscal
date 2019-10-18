interface DOMAddStyleParams {
  contentMatches: Element[] | undefined
  targetElement?: string
  className?: string
  style?: string
}

enum ItemFoundEnum {
  class = 'FiscalCS-item-found'
}

export {DOMAddStyleParams, ItemFoundEnum}
