import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme } from '..';
import Pagination, { PaginationProps } from '.';

export default {
  title: 'Pagination',
  component: Pagination,
} as Meta<PaginationProps>;

const Template: Story<PaginationProps> = args => <Pagination {...args} />;

export const PaginationDefault: Story<PaginationProps> = Template.bind({});
PaginationDefault.storyName = 'Pagination';
PaginationDefault.args = {
  current: 6,
  perPage: 10,
  items: 101,
  pagerCallback: (n: number) => alert(n),
};

const TemplateWithSU2C: Story<PaginationProps> = args => (
  <ThemeProvider theme={su2cTheme}>
    <Pagination {...args} />
  </ThemeProvider>
);

export const SU2CPagination: Story<PaginationProps> = TemplateWithSU2C.bind({});
SU2CPagination.storyName = 'SU2C Pagination';
SU2CPagination.args = {
  current: 6,
  perPage: 10,
  items: 101,
  pagerCallback: (n: number) => alert(n),
};
