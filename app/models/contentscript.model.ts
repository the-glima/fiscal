interface DOMAddStyleParams {
  contentMatches: HTMLSpanElement[] | undefined
  targetElement?: string
  className?: string
  style?: string
}

enum ItemFoundEnum {
  class = 'FiscalCS-item-found'
}

export {DOMAddStyleParams, ItemFoundEnum}
