const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;
const getHTMLPluginConfig = require('./html-plugin.webpack');

const customPlugins = [
  new CleanWebpackPlugin({
    cleanStaleWebpackAssets: false,
    verbose: true,
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].min.css',
  }),
  new ImageMinPlugin({ test: /\.(jpg|jpeg|png|gif|svg)$/i }),
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, '../app/assets/images'),
      to: path.resolve(__dirname, '../dist/images'),
      toType: 'dir',
    }
  ])
].concat(getHTMLPluginConfig())

module.exports = customPlugins
