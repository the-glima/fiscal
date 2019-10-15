import {settings} from '../settings'

export const toggleBrowserAction = (toggle = false, tabId?: number): void => {
  if (!toggle) {
    if (tabId) {
      chrome.browserAction.disable(tabId)
    } else {
      chrome.browserAction.disable()
    }
    chrome.browserAction.setIcon({path: settings.background.badge.disableImagePath})
    chrome.browserAction.setBadgeText({text: settings.background.badge.defaultText})

    return
  } else {
    if (tabId) {
      chrome.browserAction.enable(tabId)
    } else {
      chrome.browserAction.enable()
    }

    chrome.browserAction.setIcon({path: settings.background.badge.enableImagePath})
  }
}
