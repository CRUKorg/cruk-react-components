import React from "react";

import { Avatar } from ".";
import "./styles.css";

export default {};
export const Component = () => (
  <>
    <Avatar />
    <Avatar name="Sam" size="s" alt="sam's profile" />
    <Avatar name="Sam" size="m" alt="sam's profile" />
    <Avatar name="Sam" size="l" alt="sam's profile" />
    <Avatar name="Sam" size="xl" alt="sam's profile" />
    <Avatar
      name="Sam"
      alt="sam's profile"
      url={`https://rcl.assets.cancerresearchuk.org/images/logos/cruk-160.png`}
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
