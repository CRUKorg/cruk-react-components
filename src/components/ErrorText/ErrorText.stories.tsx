import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import AllThemesWrapper from "../AllThemesWrapper";
import ErrorText from ".";
import "./styles.css";
import "../Text/styles.css";

import {
  colours,
  fontAligns,
  fontFamilyStyles,
  fontSizes,
  fontWeights,
  overflowWraps,
  wordBreaks,
} from "../../types";

export default {
  title: "ErrorText",
  component: ErrorText,
  args: {
    children: "this is error text",
  },
  argTypes: {
    margin: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto", ""],
    },
    marginTop: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto", ""],
    },
    marginRight: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto", ""],
    },
    marginBottom: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto", ""],
    },
    marginLeft: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto", ""],
    },
    marginVertical: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto", ""],
    },
    marginHorizontal: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto", ""],
    },
    padding: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto", ""],
    },
    paddingTop: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto", ""],
    },
    paddingRight: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto", ""],
    },
    paddingBottom: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto", ""],
    },
    paddingLeft: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto", ""],
    },
    paddingVertical: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto", ""],
    },
    paddingHorizontal: {
      control: "select",
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "auto", ""],
    },
    // text controls
    textColor: {
      control: "select",
      options: [...colours, ""],
    },
    textAlign: {
      control: "select",
      options: [...fontAligns, ""],
    },
    textSize: {
      control: "select",
      options: [...fontSizes, ""],
    },
    textWeight: {
      control: "select",
      options: [...fontWeights, ""],
    },
    textFontFamily: {
      control: "select",
      options: [...fontFamilyStyles, ""],
    },
    wordBreak: {
      control: "select",
      options: [...wordBreaks, ""],
    },
    overflowWrap: {
      control: "select",
      options: [...overflowWraps, ""],
    },
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof ErrorText>;

export const ErrorTextDefault: Story = {
  name: "ErrorTextDefault",
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <ErrorText {...args} />
    </AllThemesWrapper>
  ),
};
