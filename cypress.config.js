const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseUrl: "http://server:8080/",
  viewportWidth: 900,
  viewportHeight: 900,
  experimentalFetchPolyfill: true,
  componentFolder: "src/components",
  testFiles: "**/*.cypress.*",
  video: true,
  videoUploadOnPasses: false,
  scrollBehavior: "center",
});
