const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;
const getHTMLPluginConfig = require('./webpack/html-plugin.webpack');

const config = {
  entry: {
    contentscript: [
      path.resolve(__dirname + '/app/contentscript.ts')
    ],
    popup: [
      path.resolve(__dirname + '/app/popup.ts'),
      path.resolve(__dirname + '/assets/scss/main.scss')
    ]
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {loader: 'html-loader'}
      }
    ]
  },
  plugins: [
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
        from: path.resolve(__dirname, 'assets', 'images'),
        to: path.resolve(__dirname, 'dist', 'images'),
        toType: 'dir',
      }
    ])
  ].concat(getHTMLPluginConfig()),
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
