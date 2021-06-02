import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme, Button } from '..';
import Header, { HeaderProps } from '.';

export default {
  title: 'Header (experimental)',
  component: Header,
} as Meta<HeaderProps>;

const Template: Story = args => <Header {...args} />;

export const HeaderDefault: Story = Template.bind({});
HeaderDefault.args = {
  siteSlogan: 'Header slogan here',
  children: <Button>Child component</Button>,
};

const TemplateWithSU2C: Story = args => (
  <ThemeProvider theme={su2cTheme}>
    <Header {...args} />
  </ThemeProvider>
);

export const SU2CHeader: Story = TemplateWithSU2C.bind({});
SU2CHeader.storyName = 'SU2C Header';
SU2CHeader.args = {
  siteSlogan: 'Header slogan here',
  children: <Button>Child component</Button>,
};
