import {getSyncedData} from './data/get-set.data'
import {PopupDataEnum} from './models/popup-data.model'
import {onSubmit, updateForm} from './popup/form'

;(() => {
  const form = document.getElementById(PopupDataEnum.form) as HTMLFormElement
  form.addEventListener('submit', onSubmit)

  getSyncedData(PopupDataEnum.name, updateForm)
})()
