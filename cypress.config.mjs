import { defineConfig } from "cypress";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); //

const testWebpackConfig = {
  mode: "development",
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve(__dirname, "./")],
    extensions: [".tsx", ".ts", ".js", ".json"],
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
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
      {
        test: /\.mdx?$/,
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
};

export default defineConfig({
  viewportWidth: 900,
  viewportHeight: 900,
  experimentalFetchPolyfill: true,
  scrollBehavior: "center",
  waitForAnimations: true,

  component: {
    specPattern: "src/components/**/*.cypress.*",
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig: testWebpackConfig,
    },
  },
});
