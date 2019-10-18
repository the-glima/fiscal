import {settings} from '../settings'

export const toggleBrowserAction = (toggle = false, tabId?: number): void => {
  if (!toggle) {
    chrome.browserAction.disable()
    chrome.browserAction.setIcon({path: settings.background.badge.disableImagePath})
    chrome.browserAction.setBadgeText({text: settings.background.badge.defaultText})

    return
  } else {
    chrome.browserAction.enable()
    chrome.browserAction.setIcon({path: settings.background.badge.enableImagePath})
  }
}
