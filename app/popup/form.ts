import {setSyncedData} from '../data/get-set.data'
import {sendMessage} from '../data/messaging.data'
import {PopupDataEnum} from '../models/popup-data.model'
import {PopupData} from '../models/popup-data.model'

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
  sendMessage(result)
}

const updateForm = (result: PopupData) => {
  if (!result) return

  const word = document.getElementById(PopupDataEnum.wordInput) as HTMLFormElement
  const regex = document.getElementById(PopupDataEnum.regexInput) as HTMLFormElement

  word.value = result[PopupDataEnum.name][PopupDataEnum.wordInput]
  regex.value = result[PopupDataEnum.name][PopupDataEnum.regexInput]
}

export {onSubmit, updateForm}
