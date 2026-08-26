import React from "react";

import { AddressLookup } from ".";
import "./styles.css";
import "../ErrorText/styles.css";
import "../TextField/styles.css";
import "../IconFa/styles.css";

export default {};
export const Component = () => (
  <fieldset>
    <legend>Your Address</legend>
    <div style={{ height: "300px" }}>
      <AddressLookup
        countries={["GBR"]}
        apiKey="MG17-ZD93-FF33-KF13"
        onAddressSelected={() => {
          // onAddressSelected
        }}
        onChange={() => {
          // onChange
        }}
      />
    </div>
  </fieldset>
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
