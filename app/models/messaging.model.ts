interface MessageEventParams {
  message: any
  sender: chrome.runtime.MessageSender
  sendResponse: (response?: any) => void
}

interface MessageData {
  from: string
  searchTerm?: string | null
  tabId?: number
  matches?: any[]
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

export {
  MessageData, //
  MessageDataEnum,
  MessageDataObject,
  MessageEventParams
}
