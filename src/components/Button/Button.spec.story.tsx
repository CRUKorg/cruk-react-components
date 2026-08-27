import React from "react";
import {
  faCamera,
  faEye,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from ".";
import { IconFa, Box } from "..";
import "./styles.css";

export default {};
export const Component = () => (
  <Box backgroundColor="background-light" padding="none">
    <Button appearance="primary">Primary</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button appearance="tertiary">Tertiary</Button>
    <Button disabled appearance="primary">
      Disabled primary
    </Button>
    <Button disabled appearance="secondary">
      Disabled secondary
    </Button>
    <Button disabled appearance="tertiary">
      Disabled secondary
    </Button>
    <Button>
      <IconFa faIcon={faEye} />
      Icon with text
    </Button>
    <Button>
      Icon right
      <IconFa faIcon={faPenToSquare} />
    </Button>
    <Button>
      <IconFa faIcon={faEye} />
      Icon either side
      <IconFa faIcon={faEye} />
    </Button>
    <Button href="https://cancerresearchuk.org/">Link as Button</Button>
    <Button aria-label="Upload a photo">
      <IconFa faIcon={faCamera} />
    </Button>
    <Button full>Full width Button</Button>
  </Box>
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
