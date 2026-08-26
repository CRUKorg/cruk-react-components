import React from "react";

import { TextAreaField } from ".";
import "./styles.css";
import "../ErrorText/styles.css";
import "../LabelWrapper/styles.css";

export default {};
export const Component = () => (
  <>
    <TextAreaField
      label="Tell us more about your fundraising"
      name="firstName"
      defaultValue="I am baking cakes"
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
