import React from "react";

import { Step } from ".";
import "./styles.css";

export default {};
export const Component = () => (
  <Step
    current={3}
    steps={["Account", "Details", "Activity", "Motivation", "Page"]}
  />
);

export const CrukTheme = () => (
  <main data-theme="cruk">
    <Component />
  </main>
);

export const RflTheme = () => (
  <main data-theme="rfl">
    <Component />
  </main>
);

export const Su2cTheme = () => (
  <main data-theme="su2c">
    <Component />
  </main>
);

export const BowelbabeTheme = () => (
  <main data-theme="bowelbabe">
    <Component />
  </main>
);
