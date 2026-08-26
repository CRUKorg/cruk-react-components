import React from "react";

import { UserBlock } from ".";
import "./styles.css";
import "../Text/styles.css";
import "../Box/styles.css";
import "../IconFa/styles.css";
import "../Avatar/styles.css";

export default {};
export const Component = () => (
  <>
    <UserBlock themeName="cruk" />
    <UserBlock name="Sam Smith" size="s" themeName="cruk" />
    <UserBlock name="Sam Smith" size="l" themeName="cruk" />
    <UserBlock
      name="Sam Smith"
      avatarUrl={`https://rcl.assets.cancerresearchuk.org/images/logos/cruk-160.png`}
      extra="(Managed by My Mum)"
      themeName="cruk"
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
