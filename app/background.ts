import {onMessage} from './data/messaging.data'
import {MatchesData} from './models/contentscript.model'
import {settings} from './settings'

// Background Init
;(() => {
  onMessage((response: any) => {
    if (!response && !response.matches) return

    const matches: MatchesData[] = response.matches
    const matchCount = matches.length

    chrome.browserAction.setBadgeBackgroundColor({color: settings.badgeBgColor})
    chrome.browserAction.setBadgeText({text: `${matchCount}`})
  })
})()
