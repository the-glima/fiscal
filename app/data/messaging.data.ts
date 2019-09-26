import {isProd} from '../settings'

const onMessage = (callback: any) => {
  if (!isProd) {
    chrome.runtime.onMessage.addListener(callback)
  } else {
    console.log('🧾 FISCAL: Reading a message');
  }
}

const sendMessage = (data: object, callback?: any) => {
  if (!isProd) {
    chrome.runtime.sendMessage(data, (response) => callback ? callback(response) : null);
  } else {
    console.log(`📩 FISCAL: Sending a message ${JSON.stringify(data)}`);
  }
}

export {
  onMessage,
  sendMessage
}
