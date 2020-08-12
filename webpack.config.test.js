var path = require('path');

module.exports = {
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
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: path.resolve(__dirname, './src'),
    watchContentBase: true,
    port: 8080,
  },
};
