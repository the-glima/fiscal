const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const customRules = [
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  },
  {
    test: /\.(css|scss)$/,
    use: [
      'style-loader', // To Prettier break line
      MiniCssExtractPlugin.loader, 
      'css-loader', 
      'postcss-loader', 
      'sass-loader'
  ],
  },
  {
    test: /\.html$/,
    exclude: /node_modules/,
    use: {loader: 'html-loader'}
  }
]

module.exports = customRules
