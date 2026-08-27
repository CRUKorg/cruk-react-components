import React from "react";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

import { IconFa } from ".";
import "./styles.css";

export default {};
export const Component = () => (
  <>
    <IconFa faIcon={faBullseye} />
    <IconFa faIcon={faBullseye} size="l" color="primary" />
    <IconFa faIcon={faBullseye} size="xl" color="secondary" />
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
