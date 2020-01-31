const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.mdx?$/,
        use: ['babel-loader', '@mdx-js/loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
};

const libConfig = {
  entry: './components',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
  },
  ...config,
};

const docsConfig = {
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
  ...config,
};

module.exports = [libConfig, docsConfig];
