import React from "react";
import type { Preview } from "@storybook/react-vite";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
  Controls,
  // PRIMARY_STORY,
} from "@storybook/addon-docs/blocks";
import { ThemeProvider } from "styled-components";
import "../src/components/global-styles.css";

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
          </ThemeProvider>
        </>
      ),
    },
  },

  tags: ["autodocs"],
};

export default preview;
