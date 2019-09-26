import {getData, setData} from '../data/get-set.data'
import {sendMessage} from '../data/messaging.data'

const onSubmit = () => {
  const form = document.getElementById('fiscal-popup-form') as HTMLFormElement

  form.addEventListener('submit', event => {
    event.preventDefault()

    const formData = new FormData(form)

    const formDataObject = [...formData].reduce((acc: any, cur: any) => {
      acc[cur[0]] = cur[1]

      return acc
    }, {})

    const popupData = {
      name: 'popupData',
      data: {...formDataObject}
    }

    sendMessage(popupData);
    setData(popupData);
  })
}

const updateForm = () => {
  const data = getData('popupData')
  const word = document.getElementById('fiscal-popup-word') as HTMLFormElement
  const regex = document.getElementById('fiscal-popup-regex') as HTMLFormElement

  word.value = data['fiscal-popup-word']
  regex.value = data['fiscal-popup-regex']
}

export {
  onSubmit,
  updateForm
}
