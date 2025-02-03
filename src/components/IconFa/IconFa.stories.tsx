import React from "react";
import { type StoryObj } from "@storybook/react";

import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { IconFa } from "..";

import AllThemesWrapper from "../AllThemesWrapper";

export default {
  title: "IconFa",
  component: IconFa,
  args: {
    faIcon: faBullseye,
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
