import React from "react";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { IconFa, Text } from "..";
import { InfoBox } from ".";
import "./styles.css";
import "../Text/styles.css";
import "../Box/styles.css";
import "../IconFa/styles.css";
import "../Heading/styles.css";

function component() {
  return (
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
}

testAccessibilityOnAllThemes({ componentName: "InfoBox", component });
