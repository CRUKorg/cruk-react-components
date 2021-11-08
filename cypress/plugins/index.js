const {
  addMatchImageSnapshotPlugin,
} = require("cypress-image-snapshot/plugin");

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);

  if (config.testingType === "component") {
    const { startDevServer } = require("@cypress/webpack-dev-server");

    // Your project's Webpack configuration
    const webpackConfig = require("../../webpack.config.test.js");
    on("dev-server:start", (options) =>
      startDevServer({ options, webpackConfig })
    );
  }

  return config;
};
