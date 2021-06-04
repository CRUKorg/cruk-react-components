import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme } from '../';
import Link, { Props } from '.';

export default {
  title: 'Link',
  component: Link,
} as Meta<Props>;

const Template: Story = args => <Link {...args} />;

export const Default: Story = Template.bind({});
Default.args = {
  appearance: undefined,
  href: 'http://www.google.com',
  children: 'Default link',
};

export const Primary: Story = Template.bind({});
Primary.args = {
  appearance: 'primary',
  href: 'http://www.google.com',
  children: 'Primary link',
};

export const Secondary: Story = Template.bind({});
Secondary.args = {
  appearance: 'secondary',
  href: 'http://www.google.com',
  children: 'Secondary link',
};

const TemplateWithImage: Story = args => (
  <Link {...args}>
    <img
      style={{ width: '80px', height: '30px' }}
      alt=""
      src="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/logo.png"
    />
  </Link>
);

export const WithImage: Story = TemplateWithImage.bind({});
WithImage.args = {
  appearance: undefined,
  href: 'http://www.google.com',
  'aria-label': 'google homepage',
};

const TemplateWithSU2C: Story = args => (
  <ThemeProvider theme={su2cTheme}>
    <Link {...args} />
  </ThemeProvider>
);

export const SU2CDefault: Story = TemplateWithSU2C.bind({});
SU2CDefault.storyName = 'SU2C Default';
SU2CDefault.args = {
  appearance: undefined,
  href: 'http://www.google.com',
  children: 'Default link',
};

export const SU2CPrimary: Story = TemplateWithSU2C.bind({});
SU2CPrimary.storyName = 'SU2C Primary';
SU2CPrimary.args = {
  appearance: 'primary',
  href: 'http://www.google.com',
  children: 'Primary link',
};

export const SU2CSecondary: Story = TemplateWithSU2C.bind({});
SU2CSecondary.storyName = 'SU2CS econdary';
SU2CSecondary.args = {
  appearance: 'secondary',
  href: 'http://www.google.com',
  children: 'Secondary link',
};
