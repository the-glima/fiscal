import {setSyncedData} from '../data/get-set.data'
import {sendTabMessage} from '../data/messaging.data'
import {MessageData, MessageDataObject} from '../models/message-data.model'
import {PopupDataEnum} from '../models/popup.model'
import {getPropertySafe} from '../utils'

const onSubmit = (event: any) => {
  event.preventDefault()

  const searchTerm = document.getElementById(PopupDataEnum.searchTermInput) as HTMLFormElement

  const messageData = {
    popupData: {
      from: '‍🍿 Popup: onSubmit',
      action: 'DOMRePaint',
      data: {
        searchTerm: searchTerm.value
      }
    } as MessageData
  }

  setSyncedData(messageData)
  sendTabMessage(messageData)
  window.close()
}

const updateForm = (messageData: MessageDataObject) => {
  const searchTerm = getPropertySafe(() => messageData.popupData.data.searchTerm)

  if (!searchTerm) return

  const word = document.getElementById(PopupDataEnum.searchTermInput) as HTMLFormElement

  word.value = searchTerm
}

export {
  onSubmit, //
  updateForm
}
