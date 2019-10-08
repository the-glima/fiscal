const getSyncedData = (key: any, callback: any) => {
  chrome.storage.sync.get([key], result => callback(result))
}

const setSyncedData = (data: any, callback?: any) => {
  chrome.storage.sync.set(data, callback)
}

export {getSyncedData, setSyncedData}
