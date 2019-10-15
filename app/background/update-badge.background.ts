import {MessageDataActionEnum, MessageDataObject} from '../models/message-data.model'
import {settings} from '../settings'
import {getPropertySafe} from '../utils'

export const updateBadge = (messageData: MessageDataObject, badgeBgColor = settings.background.badge.bgColor, badgeCount?: any) => {
  const matches = getPropertySafe(() => messageData.contentscriptData.data.matches)
  const action = getPropertySafe(() => messageData.contentscriptData.action)

  if (action !== MessageDataActionEnum.updateBadge && !matches) return

  badgeCount = matches.length

  chrome.browserAction.setBadgeText({text: `${badgeCount}`})
  chrome.browserAction.setBadgeBackgroundColor({color: badgeBgColor})
}
