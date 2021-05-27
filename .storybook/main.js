const path = require('path');

module.exports = {
  stories: ['../src/components/*/*.stories.mdx', '../src/components/*/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@react-theming/storybook-addon',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve('./')];
    return config;
  },
};
