import {getSyncedData, setSyncedData} from '../data/get-set.data'
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
    if (!result) return

    const regex = getRegex(result)

    if (!regex) return

    const arrayMatches = findMatch(regex, codeLine)
    const arrayMatchesParam: MatchesData = {contentMatches: arrayMatches}

    removeStyle()
    addStyle(arrayMatchesParam)
    setSyncedData(arrayMatchesParam)
    sendMessage({from: 'ContentScript: onReady', ...arrayMatchesParam})
  })
}
