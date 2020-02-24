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
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, './'),
    ],
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
};

const libConfig = {
  entry: './components',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    library: 'crukReactComponents',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'styled-components': {
      root: 'StyledComponents',
      commonjs2: 'styled-components',
      commonjs: 'styled-components',
      amd: 'styled-components',
    },
  },
  devtool: 'source-map',
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
