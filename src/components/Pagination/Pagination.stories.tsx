import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { bowelbabeTheme, GlobalStyle, su2cTheme } from "..";
import Pagination, { PaginationProps } from ".";

export default {
  title: "Pagination",
  component: Pagination,
} as Meta<PaginationProps>;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const PaginationDefault: Story<PaginationProps> = Template.bind({});
PaginationDefault.storyName = "Pagination";
PaginationDefault.args = {
  current: 6,
  perPage: 10,
  items: 101,
  pagerCallback: (n: number) => alert(n),
};

export const PaginationFirstPage: Story<PaginationProps> = Template.bind({});
PaginationFirstPage.storyName = "Pagination 1st page";
PaginationFirstPage.args = {
  current: 1,
  perPage: 10,
  items: 101,
  pagerCallback: (n: number) => alert(n),
};

const TemplateWithSU2C: Story<PaginationProps> = (args) => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <Pagination {...args} />
  </ThemeProvider>
);

export const SU2CPagination: Story<PaginationProps> = TemplateWithSU2C.bind({});
SU2CPagination.storyName = "SU2C Pagination";
SU2CPagination.args = {
  current: 6,
  perPage: 10,
  items: 101,
  pagerCallback: (n: number) => alert(n),
};

const TemplateWithBowelbabe: Story<PaginationProps> = (args) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <GlobalStyle />
    <Pagination {...args} />
  </ThemeProvider>
);

export const BowelbabePagination: Story<PaginationProps> =
  TemplateWithBowelbabe.bind({});
BowelbabePagination.storyName = "Bowelbabe Pagination";
BowelbabePagination.args = {
  current: 6,
  perPage: 10,
  items: 101,
  pagerCallback: (n: number) => alert(n),
};
