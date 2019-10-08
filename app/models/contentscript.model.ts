interface AddStyleParams {
  contentMatches: Element[] | undefined
  targetElement?: string
  style?: string
}

interface MatchesData {
  contentMatches: any[]
}

interface PageAction {
  active: boolean
}

interface MessageEventParams {
  message: any
  sender: chrome.runtime.MessageSender
  sendResponse: (response?: any) => void
}

enum ItemFoundEnum {
  class = 'FiscalCS-item-found'
}

export {
  AddStyleParams, //
  ItemFoundEnum,
  MatchesData,
  PageAction,
  MessageEventParams
}
