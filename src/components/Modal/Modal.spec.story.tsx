import React from "react";

import { TestModalWithContent } from "./TestModalWithContent";
import { TestModalWithOpenButton } from "./TestModalWithOpenButton";
import "./styles.css";

export default {};
// we have to pump theme into the content as well as the theme wrapper because of react portals ignoring the theme wrapper
export const Component = () => <TestModalWithContent />;

export const WithOpenButton = () => (
  <main data-theme="cruk">
    <TestModalWithOpenButton />
  </main>
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
