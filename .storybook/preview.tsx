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
import "../src/components/global-styles.css";

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
        </>
      ),
    },
  },

  tags: ["autodocs"],
};

export default preview;
