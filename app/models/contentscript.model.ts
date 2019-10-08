interface AddStyleParams {
  contentMatches: Element[] | undefined
  targetElement?: string
  style?: string
}

enum ItemFoundEnum {
  class = 'FiscalCS-item-found'
}

export {
  AddStyleParams, //
  ItemFoundEnum
}
