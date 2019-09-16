const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VIEWS_PATH = '../app/views'

const indexHTML = {
  filename: 'index.html',
  template: `${VIEWS_PATH}/index.html`,
  chunks: ['contentscript']
}

const filePreviewHTML = {
  filename: 'file-preview.html',
  template: `${VIEWS_PATH}/file-preview.html`,
  chunks: ['contentscript']
}

const popupHTML = {
  filename: 'popup.html',
  template: `${VIEWS_PATH}/popup.html`,
  chunks: ['popup']
}

const viewsHTML = [
  indexHTML,
  filePreviewHTML,
  popupHTML
]

const getHTMLPluginConfig = () =>
  viewsHTML.reduce((acc, curr) => {
    return [...acc, new HtmlWebpackPlugin({
      inject: 'head',
      filename: curr.filename,
      chunks: curr.chunks,
      template: path.resolve(__dirname, curr.template)
    })]
  }, [])

module.exports = getHTMLPluginConfig
