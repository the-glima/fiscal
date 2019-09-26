const settings = {
  url: ['http://localhost:3000/', 'https://dev.azure.com/payvision/B-Ops/_git/'],
  styles: `
    color: white !important;
    border-top: 1px solid #953131 !important;
    background-color: #ef4d4d !important;
  `,
  elements: {
    container: ['summaryContainer'],
    codeLine: ['.vc-diff-viewer .code-line', '.view-lines .view-line']
  },
  environment: 'dev',
  mutationObserver: {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
  }
}

const isDev = () => settings.environment === 'dev'
const isProd = () => settings.environment === 'prod'

export {
  isDev,
  isProd,
  settings
}
