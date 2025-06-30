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
  Source,
} from "@storybook/addon-docs/blocks";
import { ThemeProvider } from "styled-components";

import { crukTheme, GlobalStyle, Text } from "../src/components";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  tags: ["autodocs"],
};

export default preview;
