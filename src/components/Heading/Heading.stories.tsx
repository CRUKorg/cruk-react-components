import React from "react";
import { ThemeProvider } from "styled-components";
import { StoryObj, Meta } from "@storybook/react";
import Heading, { HeadingProps } from ".";
import { su2cTheme, bowelbabeTheme, GlobalStyle } from "..";

export default {
  title: "Heading",
  component: Heading,
  args: {},
  tags: ["autodocs"],
} as Meta<HeadingProps>;

type Story = StoryObj<typeof Heading>;

export const DefaultHeading: Story = {
  name: "DefaultHeading",
  args: {
    children: "H2 is the default",
  },
};

export const HeadingSize: Story = {
  name: "HeadingSize",
  args: {
    textSize: "xxxxl",
    children: "This is H2 with H1 size",
  },
};

export const HeadingAligned: Story = {
  name: "HeadingAligned",
  args: {
    textAlign: "center",
    children: "This is center aligned",
  },
};

export const H1: Story = {
  name: "H1",
  args: {
    h1: true,
    children: "This is H1",
  },
};

export const H2: Story = {
  name: "H2",
  args: {
    h2: true,
    children: "This is H2",
  },
};

export const H3: Story = {
  name: "H3",
  args: {
    h3: true,
    children: "This is H3",
  },
};

export const H4: Story = {
  name: "H4",
  args: {
    h4: true,
    children: "This is H4",
  },
};

export const H5: Story = {
  name: "H5",
  args: {
    h5: true,
    children: "This is H5",
  },
};

export const H6: Story = {
  name: "H6",
  args: {
    h6: true,
    children: "This is H6",
  },
};

/// SU2C

const su2cRender = (args: HeadingProps) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <Heading {...args} />
  </ThemeProvider>
);

// export const FooterSU2C: Story = {
//   name: "FooterSU2C",
//   args: {},
//   render: su2cRender,
// };

export const H1SU2C: Story = {
  name: "H1 SU2C",
  args: {
    h1: true,
    children: "This is H1",
  },
  render: su2cRender,
};

export const H2SU2C: Story = {
  name: "H2 SU2C",
  args: {
    h2: true,
    children: "This is H2",
  },
  render: su2cRender,
};

export const H3SU2C: Story = {
  name: "H3 SU2C",
  args: {
    h3: true,
    children: "This is H3",
  },
  render: su2cRender,
};

export const H4SU2C: Story = {
  name: "H4 SU2C",
  args: {
    h4: true,
    children: "This is H4",
  },
  render: su2cRender,
};
export const H5SU2C: Story = {
  name: "H5 SU2C",
  args: {
    h5: true,
    children: "This is H5",
  },
};
export const H6SU2C: Story = {
  name: "H6 SU2C",
  args: {
    h6: true,
    children: "This is H6",
  },
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: HeadingProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <GlobalStyle />
    <Heading {...args} />
  </ThemeProvider>
);

export const H1Bowelbabe: Story = {
  name: "H1 Bowelbabe",
  args: {
    h1: true,
    children: "This is H1",
  },
  render: bowelbabeRender,
};

export const H2Bowelbabe: Story = {
  name: "H2 Bowelbabe",
  args: {
    h2: true,
    children: "This is H2",
  },
  render: bowelbabeRender,
};

export const H3Bowelbabe: Story = {
  name: "H3 Bowelbabe",
  args: {
    h3: true,
    children: "This is H3",
  },
  render: bowelbabeRender,
};

export const H4Bowelbabe: Story = {
  name: "H4 Bowelbabe",
  args: {
    h4: true,
    children: "This is H4",
  },
  render: bowelbabeRender,
};

export const H5Bowelbabe: Story = {
  name: "H5 Bowelbabe",
  args: {
    h5: true,
    children: "This is H5",
  },
  render: bowelbabeRender,
};

export const H6Bowelbabe: Story = {
  name: "H6 Bowelbabe",
  args: {
    h6: true,
    children: "This is H6",
  },
  render: bowelbabeRender,
};
