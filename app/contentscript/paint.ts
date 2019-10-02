import {getSyncedData} from '../data/get-set.data'
import {DataEnum} from '../models/storage-data.model'
import {searchRegex} from '../popup/search'
import {settings} from '../settings'

import {addStyle} from './add-style'
import {findMatch} from './find-match'
import * as getters from './getters'
import {mutationObserver} from './mutation-observer'

export const paint = (container = getters.getContainer(), codeLine = getters.getCodeLine()) => {
  if (!container || !codeLine.length) return

  const observer = mutationObserver(addStyle)

  observer.observe(container, settings.mutationObserver)

  getSyncedData(DataEnum.name, (result: any) => {
    const regex = searchRegex(result)
    const arrayMatches = findMatch(regex, codeLine)

    console.log('=STARTLOG <>================================<> STARTLOG=');
    console.log(regex);
    console.log('=ENDLOG <>================================<> ENDLOG=');

    addStyle(arrayMatches, 'span', settings.styles)
  })
}
