import React from "react";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { InfoBox } from ".";
import { IconFa, Text } from "..";

function component() {
  return (
    <>
      <InfoBox
        titleText="InfoBox With Children"
        titleTextColor="text-dark"
        descriptionText="This is a description block for the infobox with children"
        descriptionTextColor="text-dark"
        icon={
          <IconFa faIcon={faTriangleExclamation} color="danger" size="2em" />
        }
      >
        <Text color="#000" marginBottom="xs">
          This is children text block for infobox component
        </Text>
      </InfoBox>
    </>
  );
}

testAccessibilityOnAllThemes({ componentName: "InfoBox", component });
