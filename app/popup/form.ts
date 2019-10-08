import {setSyncedData} from '../data/get-set.data'
import {sendTabMessage} from '../data/messaging.data'
import {MessageData, MessageDataEnum} from '../models/messaging.model'
import {PopupDataEnum} from '../models/popup.model'

const onSubmit = (event: any) => {
  event.preventDefault()

  const searchTerm = document.getElementById(PopupDataEnum.searchTermInput) as HTMLFormElement

  const messageData = {
    popupData: {
      from: '‍🐱‍🚀 Popup: onSubmit',
      searchTerm: searchTerm.value
    } as MessageData
  }

  setSyncedData(messageData)
  sendTabMessage(messageData)

  window.close()
}

const updateForm = (messageData: MessageData) => {
  if (!messageData.searchTerm) return

  const word = document.getElementById(PopupDataEnum.searchTermInput) as HTMLFormElement

  word.value = messageData.searchTerm
}

export {
  onSubmit, //
  updateForm
}
