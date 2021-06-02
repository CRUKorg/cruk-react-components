import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { su2cTheme } from '..';
import Loader from '.';

export default {
  title: 'Loader',
  component: Loader,
} as Meta<{}>;

const Template: Story = () => <Loader />;

export const LoaderDefault: Story = Template.bind({});
LoaderDefault.storyName = 'Loader';
LoaderDefault.args = {};

const TemplateWithSU2C: Story = () => (
  <ThemeProvider theme={su2cTheme}>
    <Loader />
  </ThemeProvider>
);

export const SU2CLoader: Story = TemplateWithSU2C.bind({});
SU2CLoader.storyName = 'SU2C Loader';
SU2CLoader.args = {};
