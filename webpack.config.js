const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: './docs/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.mdx?$/,
        use: [
          'babel-loader',
          '@mdx-js/loader'
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./docs/index.html",
      filename: "./index.html"
    })
  ]
};
