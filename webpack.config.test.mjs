import path from "path";
import { fileURLToPath } from "url";
import { createWebpackConfig } from "./webpack.common";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); //

export default createWebpackConfig({
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
        use: ["babel-loader"],
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
