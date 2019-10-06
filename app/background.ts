import {checkPage} from './contentscript/check-page'
import {getSyncedData} from './data/get-set.data'
import {onMessage} from './data/messaging.data'
import {MatchesData} from './models/contentscript.model'
import {settings} from './settings'

// Background Init
;(() => {
  console.log('%c⧭', 'color: #917399', 'BACKGROUND INIT')

  chrome.browserAction.enable()

  const disableBrowserAction = (): void => {
    chrome.browserAction.disable()
    chrome.browserAction.setBadgeText({text: ''})
  }

  const updateBadge = (badgeCount: any, badgeBgColor = settings.badgeBgColor): void => {
    badgeCount = badgeCount !== null || badgeCount !== undefined ? badgeCount : ''

    console.log('%c⧭', 'color: #aa00ff', `updateBadge: ${JSON.stringify(badgeCount)}`)

    chrome.browserAction.setBadgeText({text: `${badgeCount}`})
    chrome.browserAction.setBadgeBackgroundColor({color: badgeBgColor})
  }

  chrome.tabs.onActivated.addListener(info => {
    chrome.tabs.get(info.tabId, (tab: any) => {
      if (!checkPage(tab.url)) {
        disableBrowserAction()
        return
      }

      // Active page action and update badge when a message is heard
      chrome.browserAction.enable()

      getSyncedData('contentMatches', (syncedData: MatchesData) => {
        if (!syncedData.contentMatches) return

        updateBadge(syncedData.contentMatches.length)
      })
    })
  })
})()
