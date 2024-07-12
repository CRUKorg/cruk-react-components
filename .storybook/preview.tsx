import React from "react";
import type { Preview } from "@storybook/react";

import { Text } from "../src/components";

import {
  Title,
  Heading,
  Subtitle,
  Description,
  Primary,
  Stories,
  Controls,
  // PRIMARY_STORY,
  Source,
} from "@storybook/addon-docs";

const preview: Preview = {
  parameters: {

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
          <Heading>Theming</Heading>
          <Text>
            Our component library is built on styled components, the different
            themes can be imported from the component library and implemented
            using ThemeProvider, GlobalStyle is a bit like a css reset
          </Text>
          <Source
            code={`
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
          />
        </>
      ),
    },
  },

  tags: ["autodocs"]
};

export default preview;
