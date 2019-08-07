export const settings = {
  url: ['https://dev.azure.com/payvision/B-Ops/_git/'],
  regex: [/console\.log|(\/\/\s)/],
  mutationObserver: {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
  },
  styles: `
    color: white !important;
    border-top: 1px solid #953131 !important;
    background-color: #ef4d4d !important;
  `
}
