const getSyncedData = (key: any, callback: any) => {
  chrome.storage.local.get([key], result => callback(result))
}

const setSyncedData = (data: any, callback?: any) => {
  chrome.storage.local.set(data, callback)
}

export {getSyncedData, setSyncedData}
