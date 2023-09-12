import React from "react";
import { StoryObj } from "@storybook/react";

import Text from ".";
import AllThemesWrapper from "../AllThemesWrapper";

export default {
  title: "Text",
  component: Text,
  args: {
    children: "This is text it defaults to a paragraph tag",
    textColor: "textDark",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Text>;

export const TextDefault: Story = {
  name: "TextDefault",
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <Text {...args} />
    </AllThemesWrapper>
  ),
};
