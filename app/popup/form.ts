import {setSyncedData} from '../data/get-set.data'
import {sendTabMessage} from '../data/messaging.data'
import {PopupDataEnum} from '../models/popup.model'
import {PopupData} from '../models/popup.model'

const onClose = () => {
  window.close()
}

const onSubmit = (event: any) => {
  event.preventDefault()

  const formData = new FormData(event.target)

  const formDataObject = [...formData].reduce((acc: any, cur: any) => {
    acc[cur[0]] = cur[1]

    return acc
  }, {})

  const result: PopupData = {
    popupData: {...formDataObject}
  }

  setSyncedData(result)
  sendTabMessage(result)
  onClose()
}

const updateForm = (result: PopupData) => {
  if (!result) return

  const word = document.getElementById(PopupDataEnum.searchTermInput) as HTMLFormElement

  word.value = result[PopupDataEnum.name][PopupDataEnum.searchTermInput]
}

export {onClose, onSubmit, updateForm}
