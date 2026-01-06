import React from "react";
import { type StoryObj } from "@storybook/react-vite";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

import AllThemesWrapper from "../AllThemesWrapper";
import { IconFa } from "..";
import "./styles.css";

import { colours, spaces } from "../../types";

export default {
  title: "IconFa",
  component: IconFa,
  args: {
    faIcon: faBullseye,
    size: "xs",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: [...spaces, "full"],
    },
    color: { control: { type: "select" }, options: [...colours] },
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof IconFa>;

export const IconFADefault: Story = {
  name: "IconFA Default",
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <IconFa {...args} />
    </AllThemesWrapper>
  ),
};
