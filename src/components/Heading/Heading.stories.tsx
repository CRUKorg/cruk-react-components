import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import AllThemesWrapper from "../AllThemesWrapper";
import Heading from ".";
import "./styles.css";

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
  title: "Heading",
  component: Heading,
  args: {},
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

type Story = StoryObj<typeof Heading>;

export const DefaultHeading: Story = {
  name: "DefaultHeading",
  args: {
    children: "H2 is the default",
  },

  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};

export const HeadingSize: Story = {
  name: "HeadingSize",
  args: {
    textSize: "xxxxl",
    children: "This is H2 with H1 size",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};

export const HeadingAligned: Story = {
  name: "HeadingAligned",
  args: {
    textAlign: "center",
    children: "This is center aligned",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};

export const H1: Story = {
  name: "H1",
  args: {
    h1: true,
    children: "This is H1",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};

export const H2: Story = {
  name: "H2",
  args: {
    h2: true,
    children: "This is H2",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};

export const H3: Story = {
  name: "H3",
  args: {
    h3: true,
    children: "This is H3",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};

export const H4: Story = {
  name: "H4",
  args: {
    h4: true,
    children: "This is H4",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};

export const H5: Story = {
  name: "H5",
  args: {
    h5: true,
    children: "This is H5",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};

export const H6: Story = {
  name: "H6",
  args: {
    h6: true,
    children: "This is H6",
  },
  render: (args) => (
    <AllThemesWrapper>
      <Heading {...args} />
    </AllThemesWrapper>
  ),
};
