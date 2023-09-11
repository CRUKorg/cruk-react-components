import React from "react";
import { StoryObj } from "@storybook/react";

import Pagination from ".";
import AllThemesWrapper from "../AllThemesWrapper";

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
};

type Story = StoryObj<typeof Pagination>;

export const PaginationDefault: Story = {
  name: "PaginationDefault",
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <Pagination {...args} />
    </AllThemesWrapper>
  ),
};

export const PaginationFirstPage: Story = {
  name: "PaginationFirstPage",
  args: {
    current: 6,
  },
  render: (args) => (
    <AllThemesWrapper>
      <Pagination {...args} />
    </AllThemesWrapper>
  ),
};

export const PaginationLastPage: Story = {
  name: "PaginationLastPage",
  args: {
    current: 11,
  },
  render: (args) => (
    <AllThemesWrapper>
      <Pagination {...args} />
    </AllThemesWrapper>
  ),
};
