import {StorageData} from '../models/storage-data.model'
import {isProd} from '../settings'

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
const getData = (key: string, callback?: any): any => {
  if (isProd()) {
    chrome.storage.sync.get([key], callback);
  } else {
    return localStorageGetItem(key)
  }
}

const setData = (data: StorageData, callback?: any) => {
  if (isProd()) {
    chrome.storage.sync.set(data, () => callback ? callback() : null)
  } else {
    localStorageSetItem(data)
  }
}

export {
  getData,
  setData
}
