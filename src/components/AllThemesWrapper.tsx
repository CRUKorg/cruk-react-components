import React, { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";

import crukTheme from "../themes/cruk";
import rflTheme from "../themes/rfl";
import su2cTheme from "../themes/su2c";
import bowelbabeTheme from "../themes/bowelbabe";

import Box from "./Box";
import GlobalStyle from "./GlobalStyle";

import { ThemeType } from "../types";

type TestThemeWrapperProps = {
  theme?: ThemeType;
  children?: ReactNode;
};

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  margin: 1em 0;
`;

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

type AllThemesWrapperProps = {
  children?: ReactNode;
};

export const AllThemesWrapper = ({ children }: AllThemesWrapperProps) => (
  <main>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
    <div tabIndex={0}>
      <h2>CRUK Theme:</h2>
      <ThemeProvider theme={crukTheme}>
        {/* <GlobalStyle /> */}
        {children}
        <Line />
      </ThemeProvider>
      <h2>RFL Theme:</h2>
      <ThemeProvider theme={rflTheme}>
        {/* <GlobalStyle /> */}
        {children}
        <Line />
      </ThemeProvider>
      <h2>SU2C Theme:</h2>
      <ThemeProvider theme={su2cTheme}>
        {children}
        <Line />
      </ThemeProvider>
      <h2>Bowelbabe Theme:</h2>
      <ThemeProvider theme={bowelbabeTheme}>
        {children}
        <Line />
      </ThemeProvider>
    </div>
  </main>
);

export default AllThemesWrapper;
