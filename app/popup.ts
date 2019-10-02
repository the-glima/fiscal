import {getSyncedData} from './data/get-set.data'
import {DataEnum} from './models/storage-data.model'
import {onSubmit, updateForm} from './popup/form'

(() => {
  const form = document.getElementById(DataEnum.form) as HTMLFormElement
  form.addEventListener('submit', onSubmit)

  getSyncedData(DataEnum.name, updateForm)
})()
