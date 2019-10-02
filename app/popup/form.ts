import {setSyncedData} from '../data/get-set.data'
import {sendMessage} from '../data/messaging.data'
import {DataEnum} from '../models/storage-data.model'

const onSubmit = (event: any) => {
  event.preventDefault()
  event.stopPropagation()

  const formData = new FormData(event.target)

  const formDataObject = [...formData].reduce((acc: any, cur: any) => {
    acc[cur[0]] = cur[1]

    return acc
  }, {})

  const result = {
    popupData: {...formDataObject}
  }

  setSyncedData(result)
  sendMessage(result)
}

const updateForm = (result: any) => {
  if (!result) return
  
  const word = document.getElementById(DataEnum.wordInput) as HTMLFormElement
  const regex = document.getElementById(DataEnum.regexInput) as HTMLFormElement

  word.value = result[DataEnum.name][DataEnum.wordInput]
  regex.value = result[DataEnum.name][DataEnum.regexInput]
}

export {
  onSubmit,
  updateForm
}
