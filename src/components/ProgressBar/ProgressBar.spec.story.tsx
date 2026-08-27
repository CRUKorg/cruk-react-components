import React from "react";

import { Text } from "..";
import { ProgressBar } from ".";
import "./styles.css";

export default {};
export const Component = () => (
  <>
    <ProgressBar percentage={0} />
    <ProgressBar percentage={20} />
    <ProgressBar percentage={150} />
    <ProgressBar percentage={0} isCircular />
    <ProgressBar percentage={20} isCircular />
    <ProgressBar percentage={150} isCircular />
    <ProgressBar
      percentage={60}
      isCircular
      circleSize="10em"
      circleContents={<Text>60 / 100 miles</Text>}
    />
  </>
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
