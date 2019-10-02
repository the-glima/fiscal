interface PopupData {
  popupData: {
    'fiscal-popup-word': string
    'fiscal-popup-regex': string
  }
}

enum PopupDataEnum {
  name = 'popupData',
  form = 'fiscal-popup-form',
  wordInput = 'fiscal-popup-word',
  regexInput = 'fiscal-popup-regex'
}

export {PopupData, PopupDataEnum}
