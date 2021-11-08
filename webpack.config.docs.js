const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const createWebpackConfig = require("./webpack.common").createWebpackConfig;

module.exports = createWebpackConfig({
  mode: "development",
  entry: "./src/docs",
  output: {
    path: path.join(__dirname, "public"),
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/docs/index.html",
      filename: "./index.html",
    }),
  ],
  // webpack-dev-server configuration
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    historyApiFallback: true,
    open: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    static: {
      directory: path.resolve(__dirname, "static"),
      staticOptions: {},
      publicPath: "/public/",
      serveIndex: true,
      watch: true,
    },
  },
});
