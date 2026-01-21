import React from "react";
import { type StoryObj } from "@storybook/react-vite";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";
import IconFa from "../IconFa";

import AllThemesWrapper from "../AllThemesWrapper";
import TextField from ".";
import { fontSizes } from "../../types";
import "./styles.css";
import "../ErrorText/styles.css";
import "../LabelWrapper/styles.css";

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
    extraLeft: "",
    extraRight: "",
  },
  argTypes: {
    isValid: { control: "boolean" },
    isValidVisible: { control: "boolean" },
    isInvalidVisible: { control: "boolean" },
    hasError: { control: "boolean" },
    errorMessage: { control: "text" },
    textSize: {
      control: { type: "select" },
      options: [...fontSizes],
    },
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

export const TextFieldExtraTop: Story = {
  name: "TextField Extra Top",
  args: {
    extraTop: <span>Extra content above the input</span>,
  },
  render: (args) => (
    <AllThemesWrapper>
      <TextField {...args} />
    </AllThemesWrapper>
  ),
};

export const TextFieldExtraBottom: Story = {
  name: "TextField Extra Bottom",
  args: {
    extraBottom: <span>Extra content above the input</span>,
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
