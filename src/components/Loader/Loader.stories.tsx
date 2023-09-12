import React from "react";
import { StoryObj } from "@storybook/react";

import Loader from ".";
import AllThemesWrapper from "../AllThemesWrapper";

export default {
  title: "Loader",
  component: Loader,
  args: {},
  tags: ["autodocs"],
};
type Story = StoryObj<typeof Loader>;

export const LoaderDefault: Story = {
  name: "Loader",
  args: {},
  render: () => (
    <AllThemesWrapper>
      <Loader />
    </AllThemesWrapper>
  ),
};
