import {getSyncedData} from './data/get-set.data'
import {MessageDataEnum} from './models/message-data.model'
import {PopupDataEnum} from './models/popup.model'
import {onSubmit, updateForm} from './popup/form'

(() => {
  console.log('%c⧭', 'color: #ffa640', 'POPUP')

  const form = document.getElementById(PopupDataEnum.form) as HTMLFormElement
  form.addEventListener('submit', onSubmit)

  getSyncedData(MessageDataEnum.popupData, updateForm)
})()
