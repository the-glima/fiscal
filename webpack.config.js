const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;

const config = {
  entry: {
    app: [
      path.resolve(__dirname + '/app/contentscript.ts'),
      path.resolve(__dirname + '/assets/scss/main.scss'),
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
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
    new HtmlWebpackPlugin({
      inject: 'head',
      hash: false,
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
    }),
    new ImageMinPlugin({ test: /\.(jpg|jpeg|png|gif|svg)$/i }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      verbose: true,
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'assets', 'images'),
        to: path.resolve(__dirname, 'dist', 'images'),
        toType: 'dir',
      }
    ])
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist'),
  }
};

module.exports = config;
