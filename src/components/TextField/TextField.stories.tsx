import React from "react";
import { StoryObj } from "@storybook/react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";
import IconFa from "../IconFa";

import TextField from ".";
import AllThemesWrapper from "../AllThemesWrapper";

export default {
  title: "TextField",
  component: TextField,
  args: {
    value: undefined,
    disabled: false,
    required: false,
    label: "TextField",
    hintText: "hint text here",
    hasError: false,
    errorMessage: undefined,
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof TextField>;

export const TextFieldDefault: Story = {
  name: "TextField Default",
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <TextField {...args} />
    </AllThemesWrapper>
  ),
};

export const TextFieldExtraLeft: Story = {
  name: "TextField Extra Left",
  args: {
    extraLeft: "£",
  },
  render: (args) => (
    <AllThemesWrapper>
      <TextField {...args} />
    </AllThemesWrapper>
  ),
};
export const TextFieldExtraRight: Story = {
  name: "TextField Extra Right",
  args: {
    extraRight: (
      <Button appearance="tertiary">
        <IconFa faIcon={faSearch} />
      </Button>
    ),
  },
  render: (args) => (
    <AllThemesWrapper>
      <TextField {...args} />
    </AllThemesWrapper>
  ),
};

export const TextFieldWithError: Story = {
  name: "TextField With Error",
  args: {
    hasError: true,
    errorMessage: "error message",
  },
  render: (args) => (
    <AllThemesWrapper>
      <TextField {...args} />
    </AllThemesWrapper>
  ),
};
