import {getSyncedData, setSyncedData} from '../data/get-set.data'
import {sendMessage} from '../data/messaging.data'
import {MessageData, MessageDataEnum, MessageDataObject} from '../models/messaging.model'
import {getRegex} from '../popup/get-regex'

import {addStyle, removeStyle} from './add-style'
import {findMatch} from './find-match'
import * as getters from './getters'

export const paint = (container = getters.getContainer(), codeLine = getters.getCodeLine()) => {
  if (!container || !codeLine.length) return

  getSyncedData(MessageDataEnum.popupData, (messageData: MessageDataObject) => {
    const searchTerm = messageData && messageData.popupData && messageData.popupData.searchTerm

    if (!searchTerm) return

    const regex = getRegex(searchTerm)

    if (!regex) return

    const matchesFound = findMatch(regex, codeLine)

    const messageDataMatches = {
      contentscriptData: {
        from: '‍🚀 Contentscript: onReady',
        matches: matchesFound
      } as MessageData
    }

    removeStyle()
    addStyle({contentMatches: matchesFound})
    setSyncedData(messageDataMatches)
    sendMessage(messageDataMatches)
  })
}
