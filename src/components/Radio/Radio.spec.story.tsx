import React from "react";

import { Radio } from ".";
import "./styles.css";
import "../ErrorText/styles.css";

export default {};
export const Component = () => (
  <>
    <Radio
      name="example1"
      value="one"
      defaultChecked
      onClick={() => {
        console.log("Option one selected");
      }}
    >
      Option one
    </Radio>

    <Radio
      name="example1"
      value="two"
      onClick={() => {
        console.log("Option two selected");
      }}
    >
      Option two
    </Radio>
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
