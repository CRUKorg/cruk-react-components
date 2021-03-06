import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import {
  Title,
  Heading,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';

import crukTheme from '../src/themes/cruk';
import su2cTheme from '../src/themes/su2c';
import Text from '../src/components/Text';
import GlobalStyle from '../src/components/GlobalStyle';

addDecorator(withThemes(ThemeProvider, [crukTheme, su2cTheme]));
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'mid',
        value: '#ededed',
      },
      {
        name: 'dark',
        value: '#2e2d2c',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <ArgsTable story={PRIMARY_STORY} />
        <Stories />
        <Heading>Theming</Heading>
        <Text>
          Our component library is built on styled components, the different themes can be imported from the component
          library and implemented using ThemeProvider, GlobalStyle is a bit like a css reset
          <pre>
            {`
            import { ThemeProvider } from 'styled-components';
            import {
              Button,
              crukTheme,
              su2cTheme,
              GlobalStyle
            } from '@cruk/cruk-react-components';
            
            const component = () => {
              return (
                <ThemeProvider theme={crukTheme}>
                  <GlobalStyle/>
                  <Button>A button</Button>
                <ThemeProvider>
              )
            }`}
          </pre>
        </Text>
      </>
    ),
  },
};
