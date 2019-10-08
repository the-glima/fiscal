const onMessage = (callback: Function) => {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    callback({message, sender, sendResponse})
  })
}

const sendMessage = (data: object) => {
  chrome.runtime.sendMessage(data)
}

const sendTabMessage = (data: object) => {
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    chrome.tabs.sendMessage(tabs[0].id as number, data)
  })
}

export {onMessage, sendMessage, sendTabMessage}
