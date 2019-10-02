import {getSyncedData} from '../data/get-set.data'
import {PopupDataEnum} from '../models/popup-data.model'
import {searchRegex} from '../popup/search'
import {settings} from '../settings'

import {addStyle} from './add-style'
import {findMatch} from './find-match'
import * as getters from './getters'
import {mutationObserver} from './mutation-observer'

export const paint = (container = getters.getContainer(), codeLine = getters.getCodeLine()) => {
  if (!container || !codeLine.length) return

  getSyncedData(PopupDataEnum.name, (result: any) => {
    const regex = searchRegex(result)
    const arrayMatches = findMatch(regex, codeLine)

    addStyle(arrayMatches, 'span', settings.styles)

    const observer = mutationObserver(addStyle(arrayMatches, 'span', settings.styles))

    observer.observe(container, settings.mutationObserver)
  })
}
