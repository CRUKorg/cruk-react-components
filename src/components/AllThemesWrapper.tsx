import React, { type ReactNode } from "react";

import { Box } from "./Box";

import { type ThemeNameType } from "../types";

function Line() {
  return (
    <hr
      style={{
        width: "100%",
        height: "1px",
        backgroundColor: "#000",
        margin: "1em 0",
        color: "black",
        borderStyle: "solid",
        borderWidth: "1px",
        borderBottom: "0px",
      }}
    />
  );
}

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
      </div>
      <Line />
      <div data-theme="rfl">
        <h2>RFL Theme:</h2>
        {children}
      </div>
      <Line />
      <div data-theme="su2c">
        <h2>SU2C Theme:</h2>
        {children}
      </div>
      <Line />
      <div data-theme="bowelbabe">
        <h2>Bowelbabe Theme:</h2>
        {children}
      </div>
      <Line />
    </div>
  </main>
);

export default AllThemesWrapper;
