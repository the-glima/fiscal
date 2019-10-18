const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const indexHTML = {
  filename: 'index.html',
  template: '../app/views/index.html',
  chunks: ['contentscript']
}

const filePreviewHTML = {
  filename: 'file-preview.html',
  template: '../app/views/file-preview.html',
  chunks: ['contentscript']
}

const popupHTML = {
  filename: 'popup.html',
  template: '../app/views/popup.html',
  chunks: ['popup'],
  inject: 'body'
}

const viewsHTML = [
  indexHTML,
  filePreviewHTML,
  popupHTML
]

const getHTMLPluginConfig = () =>
  viewsHTML.reduce((acc, curr) => {
    return [...acc, new HtmlWebpackPlugin({
      inject: curr.inject || 'head',
      filename: curr.filename,
      chunks: curr.chunks,
      template: path.resolve(__dirname, curr.template)
    })]
  }, [])

module.exports = getHTMLPluginConfig
