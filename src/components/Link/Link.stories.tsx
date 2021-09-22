import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme } from '../';
import Link, { LinkProps } from '.';
import GlobalStyle from '../GlobalStyle';

export default {
  title: 'Link',
  component: Link,
} as Meta<LinkProps>;

const Template: Story<LinkProps> = args => <Link {...args} />;

export const Default: Story<LinkProps> = Template.bind({});
Default.args = {
  appearance: undefined,
  href: 'http://www.google.com',
  children: 'Default link',
  rel: undefined,
  target: undefined,
};

export const Primary: Story<LinkProps> = Template.bind({});
Primary.args = {
  appearance: 'primary',
  href: 'http://www.google.com',
  children: 'Primary link',
  rel: undefined,
  target: undefined,
};

export const Secondary: Story<LinkProps> = Template.bind({});
Secondary.args = {
  appearance: 'secondary',
  href: 'http://www.google.com',
  children: 'Secondary link',
  rel: undefined,
  target: undefined,
};

const TemplateWithImage: Story<LinkProps> = args => (
  <Link {...args}>
    <img
      style={{ width: '80px', height: '30px' }}
      alt=""
      src="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/logo.png"
    />
  </Link>
);

export const WithImage: Story<LinkProps> = TemplateWithImage.bind({});
WithImage.args = {
  appearance: undefined,
  href: 'http://www.google.com',
  'aria-label': 'google homepage',
  rel: undefined,
  target: undefined,
};

const TemplateWithSU2C: Story<LinkProps> = args => (
  <ThemeProvider theme={su2cTheme}>
    <GlobalStyle />
    <Link {...args} />
  </ThemeProvider>
);

export const SU2CDefault: Story<LinkProps> = TemplateWithSU2C.bind({});
SU2CDefault.storyName = 'SU2C Default';
SU2CDefault.args = {
  appearance: undefined,
  href: 'http://www.google.com',
  children: 'Default link',
  rel: undefined,
  target: undefined,
};

export const SU2CPrimary: Story<LinkProps> = TemplateWithSU2C.bind({});
SU2CPrimary.storyName = 'SU2C Primary';
SU2CPrimary.args = {
  appearance: 'primary',
  href: 'http://www.google.com',
  children: 'Primary link',
  rel: undefined,
  target: undefined,
};

export const SU2CSecondary: Story<LinkProps> = TemplateWithSU2C.bind({});
SU2CSecondary.storyName = 'SU2C Secondary';
SU2CSecondary.args = {
  appearance: 'secondary',
  href: 'http://www.google.com',
  children: 'Secondary link',
  rel: undefined,
  target: undefined,
};
