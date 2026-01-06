import React from "react";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { IconFa } from ".";
import "./styles.css";

function component() {
  return (
    <>
      <IconFa faIcon={faBullseye} />
      <IconFa faIcon={faBullseye} size="l" color="primary" />
      <IconFa faIcon={faBullseye} size="xl" color="secondary" />
    </>
  );
}

testAccessibilityOnAllThemes({ componentName: "IconFa", component });
