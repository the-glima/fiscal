import {toggleBrowserAction} from './background/toggle-browser-action.background'
import {updateBadge} from './background/update-badge.background'
import {checkPage} from './contentscript/check-page'
import {getSyncedData} from './data/get-set.data'
import {onMessage, sendMessage} from './data/messaging.data'
import {MessageData, MessageDataEnum, MessageDataObject, MessageEventParams} from './models/message-data.model'

;(() => {
  console.log('%c⧭', 'color: #917399', 'BACKGROUND')

  chrome.tabs.query({active: true, currentWindow: true}, (tabs: any) => {
    if (!tabs && !tabs.length) return

    if (!checkPage(tabs[0].url as string)) {
      toggleBrowserAction(false, tabs[0].id as number)
    }
  })

  chrome.tabs.onActivated.addListener(info => {
    chrome.tabs.get(info.tabId, (tab: any) => {
      if (!checkPage(tab.url as string)) {
        toggleBrowserAction(false)
        return
      }

      toggleBrowserAction(true, tab.id as number)

      const messageData = {
        backgroundData: {
          from: '‍🍉 Background: tabs.onActivated',
          action: 'DOMRePaint',
          data: {
            tabId: tab.id
          }
        } as MessageData
      }

      sendMessage(messageData)

      getSyncedData(MessageDataEnum.contentscriptData, (messageData: MessageDataObject) => {
        updateBadge(messageData)
      })

      onMessage((params: MessageEventParams) => {
        const {message} = params

        updateBadge(message)
      })
    })
  })
})()
