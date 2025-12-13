import React, { type ReactNode } from "react";
import styled from "styled-components";

import { Box } from "./Box";

import { type ThemeNameType } from "../types";

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  margin: 1em 0;
`;

export const TestThemeWrapper = ({
  children,
  themeName,
}: {
  themeName: ThemeNameType;
  children?: ReactNode;
}) => (
  <main>
    <div
      data-theme={themeName || "cruk"}
      style={{ overflow: "auto" }}
      tabIndex={0}
    >
      <Box backgroundColor="background-light">{children}</Box>
    </div>
  </main>
);

export const AllThemesWrapper = ({ children }: { children?: ReactNode }) => (
  <main>
    <div tabIndex={0}>
      <div data-theme="cruk">
        <h2>CRUK Theme:</h2>
        {children}
        <Line />
      </div>
      <div data-theme="rfl">
        <h2>RFL Theme:</h2>
        {children}
        <Line />
      </div>
      <div data-theme="su2c">
        <h2>SU2C Theme:</h2>
        {children}
        <Line />
      </div>
      <div data-theme="bowelbabe">
        <h2>Bowelbabe Theme:</h2>
        {children}
        <Line />
      </div>
    </div>
  </main>
);

export default AllThemesWrapper;
