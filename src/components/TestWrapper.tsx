import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "src/components/GlobalStyle";
import crukTheme from "src/themes/cruk";
import su2cTheme from "src/themes/su2c";
import Heading from "src/components/Heading";
import Box from "src/components/Box";
import { ThemeType } from "src/types";

type TestThemeWrapperProps = {
  theme?: ThemeType;
  children?: ReactNode;
};

export const TestThemeWrapper = ({
  children,
  theme,
}: TestThemeWrapperProps) => (
  <main>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
    <div style={{ overflow: "auto" }} tabIndex={0}>
      <ThemeProvider theme={theme || crukTheme}>
        <Box backgroundColor="backgroundLight">
          <GlobalStyle />
          {children}
        </Box>
      </ThemeProvider>
    </div>
  </main>
);

type TestWrapperProps = {
  children?: ReactNode;
};

export const TestWrapper = ({ children }: TestWrapperProps) => (
  <main>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
    <div style={{ overflow: "auto" }} tabIndex={0}>
      <ThemeProvider theme={crukTheme}>
        <GlobalStyle />
        <Heading>CRUK Theme</Heading>
        {children}
      </ThemeProvider>
      <ThemeProvider theme={su2cTheme}>
        <GlobalStyle />
        <Heading>SU2C Theme</Heading>
        {children}
      </ThemeProvider>
    </div>
  </main>
);

export default TestWrapper;
