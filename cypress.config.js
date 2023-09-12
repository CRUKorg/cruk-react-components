const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 900,
  viewportHeight: 900,
  experimentalFetchPolyfill: true,
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
