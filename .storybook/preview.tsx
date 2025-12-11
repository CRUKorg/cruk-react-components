import React from "react";
import type { Preview } from "@storybook/react-vite";
import {
  Title,
  Heading,
  Subtitle,
  Description,
  Primary,
  Stories,
  Controls,
  // PRIMARY_STORY,
} from "@storybook/addon-docs/blocks";
import { ThemeProvider } from "styled-components";

import { crukTheme } from "../src/components";

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
          <ThemeProvider theme={crukTheme}>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <Stories />
            <Heading>Theming</Heading>
          </ThemeProvider>
        </>
      ),
    },
  },

  tags: ["autodocs"],
};

export default preview;
