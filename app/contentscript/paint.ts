import {getSyncedData} from '../data/get-set.data'
import {sendMessage} from '../data/messaging.data'
import {MatchesData} from '../models/contentscript.model'
import {PopupDataEnum} from '../models/popup.model'
import {getRegex} from '../popup/get-regex'

import {addStyle, removeStyle} from './add-style'
import {findMatch} from './find-match'
import * as getters from './getters'

export const paint = (container = getters.getContainer(), codeLine = getters.getCodeLine()) => {
  if (!container || !codeLine.length) return

  getSyncedData(PopupDataEnum.name, (result: any) => {
    const regex = getRegex(result)

    if (!regex) return

    const arrayMatches = findMatch(regex, codeLine)
    const arrayMatchesParam: MatchesData = {matches: arrayMatches}

    removeStyle()
    addStyle(arrayMatchesParam)
    sendMessage(arrayMatchesParam)
  })
}
