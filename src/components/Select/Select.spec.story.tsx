import React from "react";

import { Box, Button } from "..";
import { Select } from ".";
import "./styles.css";
import "../ErrorText/styles.css";
import "../LabelWrapper/styles.css";

export default {};
export const Component = () => (
  <>
    <Box>
      <Select
        value=""
        label="Disabled option"
        onChange={(event) => {
          console.log({ event });
        }}
      >
        <option disabled value="">
          --Please choose an option--
        </option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </Select>
    </Box>
    <Box>
      <Select
        value=""
        label="Disabled control"
        onChange={(event) => {
          console.log({ event });
        }}
        disabled
      >
        <option disabled value="">
          --Please choose an option--
        </option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </Select>
    </Box>
    <Box>
      <Select
        required
        hasError
        label="Has error"
        onChange={(event) => {
          console.log({ event });
        }}
      >
        <option value="dog">Dog</option>
        <option value="red_panda">Red panda</option>
        <option value="axolotl">Axolotl</option>
      </Select>
    </Box>
    <Box>
      <Select
        required
        errorMessage="This field is required ☹️"
        label="Error message"
        onChange={(event) => {
          console.log({ event });
        }}
      >
        <option value="cat">Cat</option>
      </Select>
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

export const SelectSection = () => (
  <main data-theme="cruk">
    <Box>
      <Button>Click me</Button>
    </Box>
    <Select label="Test Select Option">
      <option value="none">Please select one of the below</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
    </Select>
  </main>
);
