interface AddStyleParams {
  matches: Element[]
  targetElement?: string
  style?: string
}

interface MatchesData {
  matches: any[]
}

enum ItemFoundEnum {
  class = 'FiscalCS-item-found'
}

export {AddStyleParams, ItemFoundEnum, MatchesData}
