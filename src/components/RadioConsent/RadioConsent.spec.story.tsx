import React, { type ChangeEvent } from "react";

import { RadioConsent } from ".";
import "./styles.css";
import "../ErrorText/styles.css";

export default {};
export const Component = () => (
  <>
    <RadioConsent
      legend="Email"
      name="email"
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        console.log(e.target.value)
      }
      attributes={[
        { option: "Yes", value: "yes" },
        { option: "No", value: "no" },
      ]}
      selectedValue="yes"
    />

    <RadioConsent
      legend="Telephone"
      name="phone"
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        console.log(e.target.value)
      }
      attributes={[
        { option: "Yes", value: "yes" },
        { option: "No", value: "no" },
      ]}
      selectedValue="yes"
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
