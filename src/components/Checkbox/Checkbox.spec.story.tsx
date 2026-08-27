import React from "react";

import { Box } from "../Box";
import { Checkbox } from ".";
import "./styles.css";
import "../ErrorText/styles.css";

export default {};
export const Component = () => (
  <>
    <Box>
      <Checkbox name="example" value="one" checked>
        Option one
      </Checkbox>
    </Box>
    <Box>
      <Checkbox name="example" value="two">
        Option two
      </Checkbox>
    </Box>
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
