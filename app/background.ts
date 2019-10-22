import {toggleBrowserAction} from './background/toggle-browser-action.background'
import {updateBadge} from './background/update-badge.background'
import {checkPage} from './contentscript/check-page'
import {getSyncedData} from './data/get-set.data'
import {onMessage, sendMessage} from './data/messaging.data'
import {MessageData, MessageDataEnum, MessageDataObject, MessageEventParams} from './models/message-data.model'

(() => {
  console.log('%c⧭', 'color: #917399', 'BACKGROUND')

  const updateBadgeWithSyncData = () => {
    getSyncedData(MessageDataEnum.contentscriptData, (messageData: MessageDataObject) => {
      updateBadge(messageData)
    })
  }

  const run = (tab: any) => {
    if (!checkPage(tab.url as string)) {
      toggleBrowserAction(false)
      return
    }

    toggleBrowserAction(true)

    updateBadgeWithSyncData()

    const messageData = {
      backgroundData: {
        from: '‍🍉 Background: tabs.onActivated',
        action: 'DOMRePaint',
        data: {
          tabId: tab.tabId
        }
      } as MessageData
    }

    sendMessage(messageData)
  }

  const onInit = () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs: any) => {
      if (!tabs && !tabs.length) return

      if (!checkPage(tabs[0].url as string)) {
        toggleBrowserAction(false)
      }
    })

    updateBadgeWithSyncData()

    onMessage((params: MessageEventParams) => {
      const {message} = params

      updateBadge(message)
    })
  }

  const onSwitchingUpdatingTab = () => {
    chrome.tabs.onActivated.addListener(info => {
      chrome.tabs.get(info.tabId, (tab: any) => {
        run(tab)
      })

      chrome.tabs.onUpdated.addListener((_, changeInfo, tab) => {
        if (changeInfo.status !== 'complete') return

        run(tab)
      })
    })
  }

  onInit()
  onSwitchingUpdatingTab()
})()
