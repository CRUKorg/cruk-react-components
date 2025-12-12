import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import Text from ".";
import AllThemesWrapper from "../AllThemesWrapper";

export default {
  title: "Text",
  component: Text,
  args: {
    children: "This is text it defaults to a paragraph tag",
    textColor: "textDark",
  },
  argTypes: {
    margin: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    marginTop: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    marginRight: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    marginBottom: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    marginLeft: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    marginVertical: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    marginHorizontal: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    padding: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    paddingTop: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    paddingRight: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    paddingBottom: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    paddingLeft: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    paddingVertical: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
    paddingHorizontal: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto"],
    },
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
