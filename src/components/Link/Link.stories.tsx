import React from 'react';
import { Story, Meta } from '@storybook/react';
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
