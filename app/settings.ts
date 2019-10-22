export const settings = {
  contentScript: {
    styles: `
      color: white !important;
      border-top: 1px solid #953131 !important;
      background-color: rgb(239, 77, 77) !important;
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
  },
  background: {
    urlRegex: [
      '(pullrequest/.*)', //
      '(pull/.*)'
    ],
    badge: {
      bgColor: '#e41313',
      defaultText: '',
      enableImagePath: 'images/icon-48.png',
      disableImagePath: 'images/icon-48-disable.png'
    }
  }
}
