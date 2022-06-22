const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://server:8080/",
  },
  viewportWidth: 900,
  viewportHeight: 900,
  experimentalFetchPolyfill: true,
  video: true,
  videoUploadOnPasses: false,
  scrollBehavior: "center",

  component: {
    specPattern: "src/components/**/*.cypress.*",
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig: require("./webpack.config.test"),
    },
  },
});
