const form = document.getElementById('fiscal-popup-form') as HTMLFormElement
const formData = new FormData(form)

const sendMessage = () =>
  chrome.runtime.sendMessage(formData, response => {
    console.log(response)
  })

const onSubmit = () => {
  form.addEventListener('submit', event => {
    event.preventDefault()

    console.log(JSON.stringify(Object.fromEntries(formData)))

    sendMessage()
  })
}

export {onSubmit}
