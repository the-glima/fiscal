const onMessage = (callback: any) => {
  console.log('🧾 FISCAL: Reading a message')
  chrome.runtime.onMessage.addListener(callback)
}

const sendMessage = (data: object) => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage((tabs[0].id) as number, data);
  });
}

export {
  onMessage,
  sendMessage
}
