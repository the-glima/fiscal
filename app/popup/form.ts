const sendMessage = (data: any) =>
  chrome.runtime.sendMessage(data, response => {
    console.log('🍍 =======POPUP======== 🍔')
    console.log(data)
    console.log('🍎 ========LOGEND========= 🍦')

    console.log('🍍 =======LOGSTART======== 🍔')
    console.log(response.data)
    console.log('🍎 ========LOGEND========= 🍦')
  })

const onSubmit = () => {
  const form = document.getElementById('fiscal-popup-form') as HTMLFormElement

  form.addEventListener('submit', event => {
    event.preventDefault()

    const formData = new FormData(form)

    const formDataObject = [...formData].reduce((acc: any, cur: any) => {
      acc[cur[0]] = cur[1]

      return acc
    }, {})

    sendMessage(formDataObject)
  })
}

export {onSubmit}
