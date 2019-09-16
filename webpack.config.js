const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const customRules = require('./webpack/rules.webpack');
const customPlugins = require('./webpack/plugins.webpack');

const config = {
  entry: {
    contentscript: [
      path.resolve(__dirname + '/app/contentscript.ts')
    ],
    popup: [
      path.resolve(__dirname + '/app/popup.ts'),
      path.resolve(__dirname + '/app/assets/scss/main.scss')
    ]
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: customRules
  },
  plugins: customPlugins,
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  devtool: 'inline-source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
  }
};

module.exports = config;
