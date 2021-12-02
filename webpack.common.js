const path = require("path");

function createWebpackConfig(config) {
  const defaults = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: "ts-loader",
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
        {
          test: /\.mdx?$/,
          use: ["babel-loader", "@mdx-js/loader"],
        },
      ],
    },
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
  };

  return Object.assign({}, defaults, config);
}

exports.createWebpackConfig = createWebpackConfig;
