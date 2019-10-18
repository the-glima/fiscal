enum MessageDataActionEnum {
  domRepaint = 'DOMRePaint',
  updateBadge = 'UpdateBadge'
}

type MessageDataActions = MessageDataActionEnum.domRepaint | MessageDataActionEnum.updateBadge

interface MessageData {
  from: string
  data: {
    matches: any[]
    searchTerm?: string
    tabId: number
  }
  action?: MessageDataActions
}

enum MessageDataEnum {
  popupData = 'popupData',
  contentscriptData = 'contentscriptData',
  backgroundData = 'backgroundData'
}

type MessageDataType = MessageDataEnum.popupData | MessageDataEnum.contentscriptData | MessageDataEnum.backgroundData

type MessageDataObject = {
  [key in MessageDataType]: MessageData
}

interface MessageEventParams {
  message: MessageDataObject
  sender: chrome.runtime.MessageSender
  sendResponse: (response?: any) => void
  tabId?: number
}

export {
  MessageData, //
  MessageDataActionEnum,
  MessageDataEnum,
  MessageDataObject,
  MessageEventParams
}
