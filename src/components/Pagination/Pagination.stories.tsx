import React from "react";
import { type StoryObj } from "@storybook/react-vite";

import AllThemesWrapper from "../AllThemesWrapper";
import Pagination from ".";
import "./styles.css";

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
  args: {
    current: 6,
  },
  render: (args) => (
    <AllThemesWrapper>
      <Pagination {...args} />
    </AllThemesWrapper>
  ),
};

export const PaginationFirstPage: Story = {
  name: "PaginationFirstPage",
  args: {
    current: 1,
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
