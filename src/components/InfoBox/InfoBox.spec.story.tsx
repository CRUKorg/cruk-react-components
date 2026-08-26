import React from "react";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import { IconFa, Text } from "..";
import { InfoBox } from ".";
import "./styles.css";
import "../Text/styles.css";
import "../Box/styles.css";
import "../IconFa/styles.css";
import "../Heading/styles.css";

export default {};
export const Component = () => (
  <>
    <InfoBox
      titleText="InfoBox With Children"
      titleTextColor="text-dark"
      descriptionText="This is a description block for the infobox with children"
      descriptionTextColor="text-dark"
      icon={<IconFa faIcon={faTriangleExclamation} color="danger" size="m" />}
    >
      <Text color="#000" marginBottom="xs">
        This is children text block for infobox component
      </Text>
    </InfoBox>
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
