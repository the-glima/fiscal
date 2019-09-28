import {StorageData} from '../models/storage-data.model'

// Local Storage
const localStorageGetItem = (key: string): object | null =>  {
  const foundItem = window.localStorage.getItem(key)

  return foundItem ? JSON.parse(foundItem) : null
}

const localStorageSetItem = (data: StorageData): void => {
  if (localStorageGetItem(data.name)) window.localStorage.removeItem(data.name)

  window.localStorage.setItem(data.name, JSON.stringify(data.data))
}

// Chrome Storage
const getData = (key: string): any => {
  /// #if env == 'production'
  chrome.storage.sync.get([key], function(result) {
    console.log('Value currently is ' + result);
    return result
  })
  /// #else
  return localStorageGetItem(key)
  /// #endif
}

const setData = (data: StorageData) => {
  /// #if env == 'production'
  chrome.storage.sync.set(data)
  /// #else
  localStorageSetItem(data)
  /// #endif
}

export {
  getData,
  setData
}
