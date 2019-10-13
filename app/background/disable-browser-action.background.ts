export const disableBrowserAction = (): void => {
  chrome.browserAction.disable()
  chrome.browserAction.setBadgeText({text: ''})
}
