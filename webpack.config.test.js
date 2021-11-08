var path = require("path");
const createWebpackConfig = require("./webpack.common").createWebpackConfig;

module.exports = createWebpackConfig({
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.md?$/,
        use: ["babel-loader", "@mdx-js/loader"],
      },
    ],
  },
  devtool: false,
  devServer: {
    host: "0.0.0.0",
    port: 8080,
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
