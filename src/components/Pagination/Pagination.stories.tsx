import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { bowelbabeTheme, su2cTheme } from "..";
import Pagination, { PaginationProps } from ".";

export default {
  title: "Pagination",
  component: Pagination,
  args: {
    current: 6,
    perPage: 10,
    items: 101,
    pagerCallback: (n: number) => alert(n),
  },
  tags: ["autodocs"],
} as Meta<PaginationProps>;

type Story = StoryObj<typeof Pagination>;

export const PaginationDefault: Story = {
  name: "PaginationDefault",
  args: {},
};

export const PaginationFirstPage: Story = {
  name: "PaginationFirstPage",
  args: {
    current: 6,
  },
};

export const PaginationLastPage: Story = {
  name: "PaginationLastPage",
  args: {
    current: 11,
  },
};
/// SU2C

const su2cRender = (args: PaginationProps) => (
  <ThemeProvider theme={su2cTheme}>
    <Pagination {...args} />
  </ThemeProvider>
);

export const ErrorTextSU2C: Story = {
  name: "PaginationSU2C",
  args: {},
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: PaginationProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <Pagination {...args} />
  </ThemeProvider>
);

export const ErrorTextBowelbabe: Story = {
  name: "PaginationBowelbabe",
  args: {},
  render: bowelbabeRender,
};
