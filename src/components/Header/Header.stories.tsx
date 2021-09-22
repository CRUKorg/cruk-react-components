import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme, Button, GlobalStyle } from '..';
import Header, { HeaderProps } from '.';

export default {
  title: 'Header (experimental)',
  component: Header,
} as Meta<HeaderProps>;

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const HeaderDefault: Story<HeaderProps> = Template.bind({});
HeaderDefault.args = {
  siteSlogan: 'Header slogan here',
  children: <Button>Child component</Button>,
  isSticky: false,
  fullWidth: false,
};

const TemplateWithSU2C: Story<HeaderProps> = args => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <Header {...args} />
  </ThemeProvider>
);

export const SU2CHeader: Story = TemplateWithSU2C.bind({});
SU2CHeader.storyName = 'SU2C Header';
SU2CHeader.args = {
  siteSlogan: 'Header slogan here',
  children: <Button>Child component</Button>,
  isSticky: false,
  fullWidth: false,
};
