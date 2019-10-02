interface StorageData {
  name: string
  data: any
}

enum DataEnum {
  name = 'popupData',
  form = 'fiscal-popup-form',
  wordInput = 'fiscal-popup-word',
  regexInput = 'fiscal-popup-regex'
}

export {
  DataEnum,
  StorageData
}
