import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import crukTheme from '../src/themes/cruk';
import su2cTheme from '../src/themes/su2c';

addDecorator(withThemes(ThemeProvider, [crukTheme, su2cTheme]));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
};
