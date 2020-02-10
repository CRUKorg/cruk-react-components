const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const createWebpackConfig = require('./webpack.common').createWebpackConfig;

module.exports = createWebpackConfig({
  entry: './docs',
  output: {
    path: path.join(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './docs/index.html',
      filename: './index.html',
    }),
  ],
});
