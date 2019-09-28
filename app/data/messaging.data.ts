const onMessage = (callback: any) => {
  /// #if env == 'production'
  chrome.runtime.onMessage.addListener(callback)
  /// #else
  console.log('🧾 FISCAL: Reading a message');
  /// #endif
}

const sendMessage = (data: object) => {
  /// #if env == 'production'
  chrome.runtime.sendMessage(data, (response) => console.log(`📩 FISCAL: Sending a message ${JSON.stringify(response)}`));
  /// #else
  console.log(`📩 FISCAL: Sending a message ${JSON.stringify(data)}`);
  /// #endif
}

export {
  onMessage,
  sendMessage
}
