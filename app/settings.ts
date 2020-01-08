export const settings = {
  contentScript: {
    itemFoundProps: {
      element: {
        className: 'FiscalCS-item-found',
        style: `
          position: relative !important;
          overflow: visible !important;
          border-bottom: 2px solid rgb(239, 77, 77) !important;
        `,
      },
      icon: {
        className: 'FiscalCS-item-icon',
        style: `
        display: inline-block !important;
        position: absolute !important;
        top: 0 !important;
        left: -8px !important;
        `,
        content: '👮‍♂️'
      }
    },
    elements: {
      container: ['summaryContainer', 'diff-view'],
      codeLine: [
        '.code-line', //
        '.view-line',
        '.blob-code-inner'
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
