import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    // "@storybook/addon-docs",
    // "@storybook/addon-styling",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    // check: false,
    // reactDocgenTypescriptOptions: {
    //   skipChildrenPropWithoutDoc: true,
    //   shouldExtractLiteralValuesFromEnum: true,
    //   shouldRemoveUndefinedFromOptional: true,
    // },
  },
};
export default config;
