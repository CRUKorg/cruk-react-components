var path = require('path');
const createWebpackConfig = require('./webpack.common').createWebpackConfig;

module.exports = createWebpackConfig({
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.md?$/,
        use: ['babel-loader', '@mdx-js/loader'],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, './')],
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: false,
  devServer: {
    host: '0.0.0.0',
    contentBase: path.resolve(__dirname, './src'),
    watchContentBase: true,
    port: 8080,
  },
});
