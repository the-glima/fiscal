import {getSyncedData} from './data/get-set.data'
import {MessageDataEnum} from './models/messaging.model'
import {PopupDataEnum} from './models/popup.model'
import {onSubmit, updateForm} from './popup/form'

// Popup Init
;(() => {
  console.log('%c⧭', 'color: #ffa640', 'POPUP INIT')

  // Listening to form submission
  const form = document.getElementById(PopupDataEnum.form) as HTMLFormElement
  form.addEventListener('submit', onSubmit)

  // Get Chrome Sync Data and update form inputs
  getSyncedData(MessageDataEnum.popupData, updateForm)
})()
