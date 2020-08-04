import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';

//components
import { Heading, Box, Icon, Button, crukTheme, crukTheme2, su2cTheme } from '../../index';

const buttonContent = () => (
  <Box>
    <Box>
      <Button onClick={action('clicked')}>Standard button!</Button>
    </Box>
    <Box>
      <Button disabled={true} onClick={action('clicked')}>
        Standard disabled button
      </Button>
    </Box>
    <Box>
      <Button appearance="primary" onClick={action('clicked')}>
        Primary button
      </Button>
    </Box>
    <Box>
      <Button appearance="primary" disabled={true} onClick={action('clicked')}>
        Primary disabled button
      </Button>
    </Box>
    <Box>
      <Button appearance="Secondary" onClick={action('clicked')}>
        Secondary button
      </Button>
    </Box>
    <Box>
      <Button appearance="Secondary" disabled={true} onClick={action('clicked')}>
        Secondary disabled button
      </Button>
    </Box>
    <Box>
      <Button size="large" onClick={action('clicked')}>
        Large button
      </Button>
    </Box>
    <Box>
      <Button onClick={action('clicked')}>
        <Icon name="view" />
        Icon with text
      </Button>
    </Box>
    <Box>
      <Button onClick={action('clicked')}>
        Icon right
        <Icon name="edit" />
      </Button>
    </Box>
    <Box>
      <Button onClick={action('clicked')}>
        <Icon name="view" />
        Icon either side
        <Icon name="view" />
      </Button>
    </Box>
    <Box>
      <Button href="https://www.styled-components.com/" onClick={action('clicked')}>
        Link as Button
      </Button>
    </Box>
    <Box>
      <Button appearance="text" onClick={action('clicked')}>
        Text style button
      </Button>
    </Box>
    <Box>
      <Button aria-label="Upload a photo">
        <Icon name="uploadPhoto" />
      </Button>
    </Box>
    <Box>
      <Button
        css="background-color: #4267b2;border-color: #4267b2; color: white; :hover {background-color: #365899; color: white;}"
        onClick={action('clicked')}
      >
        <Icon name="facebookSquare" size="18px" />
        Continue with facebook
      </Button>
    </Box>
    <Box>
      <Button full={true} onClick={action('clicked')}>
        Full width Button
      </Button>
    </Box>
  </Box>
);

storiesOf('Button', module).add('Buttons', () => (
  <>
    <Heading>CRUK Theme</Heading>
    <ThemeProvider theme={crukTheme}>{buttonContent()}</ThemeProvider>
    <Heading>CRUK 2 Theme</Heading>
    <ThemeProvider theme={crukTheme2}>{buttonContent()}</ThemeProvider>
    <Heading>SU2C Theme</Heading>
    <ThemeProvider theme={su2cTheme}>{buttonContent()}</ThemeProvider>
  </>
));
