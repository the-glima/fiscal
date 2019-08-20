export const settings = {
  url: [
    'http://localhost:8080/',
    'https://dev.azure.com/payvision/B-Ops/_git/'
  ],
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
  `,
  elements: {
    container: ['summaryContainer'],
    codeLine: [
      '.vc-diff-viewer .code-line', 
      '.view-lines .view-line'
    ]
  }
}
