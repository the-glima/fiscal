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

export {
  MessageData, //
  MessageDataEnum
}
