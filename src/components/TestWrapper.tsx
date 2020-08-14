import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import crukTheme from '../themes/cruk';
import crukTheme2 from '../themes/cruk2';
import su2cTheme from '../themes/su2c';
import Heading from './Heading';

export const TestWrapper: FC = ({ children }) => (
  <div style={{ overflow: 'auto' }} tabIndex={0}>
    <ThemeProvider theme={crukTheme}>
      <GlobalStyle />
      <Heading>CRUK Theme</Heading>
      {children}
    </ThemeProvider>
    <ThemeProvider theme={crukTheme2}>
      <GlobalStyle />
      <Heading>CRUK 2 Theme</Heading>
      {children}
    </ThemeProvider>
    <ThemeProvider theme={su2cTheme}>
      <GlobalStyle />
      <Heading>SU2C Theme</Heading>
      {children}
    </ThemeProvider>
  </div>
);

export default TestWrapper;
