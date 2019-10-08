import {getSyncedData, setSyncedData} from '../data/get-set.data'
import {sendMessage} from '../data/messaging.data'
import {MessageData, MessageDataEnum} from '../models/messaging.model'
import {getRegex} from '../popup/get-regex'

import {addStyle, removeStyle} from './add-style'
import {findMatch} from './find-match'
import * as getters from './getters'

export const paint = (container = getters.getContainer(), codeLine = getters.getCodeLine()) => {
  if (!container || !codeLine.length) return

  getSyncedData(MessageDataEnum.popupData, (data: any) => {
    if (!data || !data.popupData || !data.popupData.searchTerm) return

    const regex = getRegex(data.popupData.searchTerm)

    if (!regex) return

    const matchesFound = findMatch(regex, codeLine)

    const messageData = {
      contentscriptData: {
        from: '‍🐱‍👤 Contentscript: onReady',
        matches: matchesFound
      } as MessageData
    }

    removeStyle()
    addStyle({contentMatches: messageData.contentscriptData.matches})
    setSyncedData(messageData)
    sendMessage(messageData)
  })
}
