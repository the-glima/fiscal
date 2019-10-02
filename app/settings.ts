export const settings = {
  url: [
    'http://localhost:3000/', //
    'https://dev.azure.com/payvision/B-Ops/_git/',
    'https://github.com/the-glima/fiscal/pull/'
  ],
  styles: `
    color: white !important;
    border-top: 1px solid #953131 !important;
    background-color: #ef4d4d !important;
  `,
  elements: {
    container: ['summaryContainer', 'diff-view'],
    codeLine: [
      '.vc-diff-viewer .code-line', //
      '.view-lines .view-line',
      '.blob-code-marker',
      '.blob-code'
    ]
  },
  mutationObserver: {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
  }
}
