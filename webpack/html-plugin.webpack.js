const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const indexHTML = {
  filename: 'index.html',
  template: '../views/index.html'
}

const filePreviewHTML = {
  filename: 'file-preview.html',
  template: '../views/file-preview.html'
}

const viewsHTML = [
  indexHTML,
  filePreviewHTML
]

const getHTMLPluginConfig = () =>
  viewsHTML.reduce((acc, curr) => {
    return [...acc, new HtmlWebpackPlugin({
      inject: 'head',
      filename: curr.filename,
      chunks: ['app'],
      template: path.resolve(__dirname, curr.template)
    })]
  }, [])

module.exports = getHTMLPluginConfig
