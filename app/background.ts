import {disableBrowserAction} from './background/disable-browser-action.background'
import {updateBadge} from './background/update-badge.background'
import {checkPage} from './contentscript/check-page'
import {getSyncedData} from './data/get-set.data'
import {onMessage, sendTabMessage} from './data/messaging.data'
import {MessageData, MessageDataEnum, MessageDataObject, MessageEventParams} from './models/message-data.model'

;(() => {
  console.log('%c⧭', 'color: #917399', 'BACKGROUND')

  chrome.tabs.onActivated.addListener(info => {
    chrome.tabs.get(info.tabId, (tab: any) => {
      if (!checkPage(tab.url)) {
        disableBrowserAction()
        return
      }

      chrome.browserAction.enable()

      const messageData = {
        backgroundData: {
          from: '‍🍉 Background: tabs.onActivated',
          action: 'DOMRePaint',
          data: {
            tabId: tab.id
          }
        } as MessageData
      }

      sendTabMessage(messageData)

      getSyncedData(MessageDataEnum.contentscriptData, (messageData: MessageDataObject) => {
        updateBadge(messageData)
      })

      onMessage((params: MessageEventParams) => {
        console.log('EITA')

        const {message} = params

        updateBadge(message)
      })
    })
  })
})()
