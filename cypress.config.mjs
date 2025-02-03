import { defineConfig } from "cypress";
import testConfig from "./webpack.config.test";

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
      webpackConfig: testConfig,
    },
  },
});
