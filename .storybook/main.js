const path = require("path");

module.exports = {
  framework: "@storybook/react",
  stories: [
    "../src/components/*/*.stories.mdx",
    "../src/components/*/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    // "@react-theming/storybook-addon",
    "@storybook/addon-a11y",
  ],
  core: {
    builder: "webpack5",
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
