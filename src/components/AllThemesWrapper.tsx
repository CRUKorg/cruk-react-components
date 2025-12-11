import React, { type ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";

import { crukTheme } from "../themes/cruk";
import { rflTheme } from "../themes/rfl";
import { su2cTheme } from "../themes/su2c";
import { bowelbabeTheme } from "../themes/bowelbabe";

import { Box } from "./Box";

import { type ThemeType } from "../types";

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  margin: 1em 0;
`;

export const TestThemeWrapper = ({
  children,
  theme,
}: {
  theme?: ThemeType;
  children?: ReactNode;
}) => (
  <main>
    <div
      data-theme={theme?.name || "cruk"}
      style={{ overflow: "auto" }}
      tabIndex={0}
    >
      <ThemeProvider theme={theme || crukTheme}>
        <Box backgroundColor="backgroundLight">{children}</Box>
      </ThemeProvider>
    </div>
  </main>
);

export const AllThemesWrapper = ({ children }: { children?: ReactNode }) => (
  <main>
    <div tabIndex={0}>
      <h2>CRUK Theme:</h2>
      <div data-theme="cruk">
        <ThemeProvider theme={crukTheme}>
          {children}
          <Line />
        </ThemeProvider>
      </div>
      <div data-theme="rfl">
        <h2>RFL Theme:</h2>
        <ThemeProvider theme={rflTheme}>
          {children}
          <Line />
        </ThemeProvider>
      </div>
      <div data-theme="su2c">
        <h2>SU2C Theme:</h2>
        <ThemeProvider theme={su2cTheme}>
          {children}
          <Line />
        </ThemeProvider>
      </div>
      <div data-theme="bowelbabe">
        <h2>Bowelbabe Theme:</h2>
        <ThemeProvider theme={bowelbabeTheme}>
          {children}
          <Line />
        </ThemeProvider>
      </div>
    </div>
  </main>
);

export default AllThemesWrapper;
