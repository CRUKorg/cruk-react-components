import React from "react";

import {
  faPoundSign,
  faSearch,
  faComment,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

import { Badge } from ".";
import { IconFa } from "..";
import "./styles.css";

export default {};
export const Component = () => (
  <>
    <Badge>
      <IconFa faIcon={faPoundSign} />
    </Badge>
    <Badge backgroundColor="secondary">
      <IconFa faIcon={faSearch} />
    </Badge>
    <Badge backgroundColor="tertiary">
      <IconFa faIcon={faBullhorn} />
    </Badge>
    <Badge backgroundColor="success">2</Badge>
    <Badge
      backgroundColor="text-light"
      textColor="tertiary"
      borderColor="tertiary"
    >
      <IconFa faIcon={faComment} />
    </Badge>
    <Badge>This is text</Badge>
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
