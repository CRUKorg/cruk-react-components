import { type StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // Replace your-framework with the framework you are using, e.g. react-vite, nextjs-vite, vue3-vite, etc.
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
  ],
  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {},
  },

  // typescript: {
  //   reactDocgen: "react-docgen-typescript",
  //   // check: false,
  //   // reactDocgenTypescriptOptions: {
  //   //   skipChildrenPropWithoutDoc: true,
  //   //   shouldExtractLiteralValuesFromEnum: true,
  //   //   shouldRemoveUndefinedFromOptional: true,
  //   // },
  // },

  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import("vite");

    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: [
          "@storybook/addon-links",
          "@storybook/addon-a11y",
          "@chromatic-com/storybook",
        ],
      },
    });
  },
};

export default config;
