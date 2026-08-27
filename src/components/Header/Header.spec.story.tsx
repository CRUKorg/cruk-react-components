import React from "react";

import { Button } from "..";
import { Header } from ".";
import "./styles.css";

export default {};
export const Component = () => (
  <>
    <Header siteSlogan="Header slogan here" themeName="cruk">
      <Button>Child component</Button>
    </Header>
    <div id="main" tabIndex={-1}>
      blah
    </div>
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

export const Sticky = () => (
  <main data-theme="cruk">
    <Header siteSlogan="Header slogan here" isSticky themeName="cruk">
      <Button>Child component</Button>
    </Header>
    <div className="making-a-tall-scroll-able-page" style={{ height: 2000 }} />
  </main>
);
