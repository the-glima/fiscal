interface PopupData {
  popupData: {
    'fiscal-popup-search-term': string
  }
}

enum PopupDataEnum {
  name = 'popupData',
  form = 'fiscal-popup-form',
  searchTermInput = 'fiscal-popup-search-term'
}

export {
  PopupData, //
  PopupDataEnum
}
