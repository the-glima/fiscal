import {getSyncedData, setSyncedData} from '../data/get-set.data'
import {sendMessage} from '../data/messaging.data'
import {MessageData, MessageDataActionEnum, MessageDataEnum, MessageDataObject} from '../models/message-data.model'
import {getRegex} from '../popup/get-regex'

import {getPropertySafe} from '../utils'
import * as getters from './dom-getters'
import {DOMAddStyle, DOMRemoveStyle} from './dom-handle-style'
import {findMatch} from './find-match'

export const DOMRepaint = (container = getters.DOMGetContainer(), codeLine = getters.DOMGetCodeLine()) => {
  if (!container || !codeLine.length) return

  getSyncedData(MessageDataEnum.popupData, (messageData: MessageDataObject) => {
    const searchTerm = getPropertySafe(() => messageData.popupData.data.searchTerm)
    const action = getPropertySafe(() => messageData.popupData.action)

    if (!searchTerm || action !== MessageDataActionEnum.domRepaint) return

    const regex = getRegex(searchTerm)

    if (!regex) return

    const matchesFound = findMatch(regex, codeLine)

    const messageDataMatches = {
      contentscriptData: {
        from: '‍🚀 Contentscript: onReady',
        action: 'UpdateBadge',
        data: {
          matches: matchesFound
        }
      } as MessageData
    }

    DOMRemoveStyle()
    DOMAddStyle({contentMatches: matchesFound})
    setSyncedData(messageDataMatches)
    sendMessage(messageDataMatches)
  })
}
