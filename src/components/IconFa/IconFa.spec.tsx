import React from "react";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { IconFa } from ".";

function component() {
  return (
    <>
      <IconFa faIcon={faBullseye} />
      <IconFa faIcon={faBullseye} size="36px" color="primary" />
      <IconFa faIcon={faBullseye} size="48px" color="secondary" />
    </>
  );
}

testAccessibilityOnAllThemes({ componentName: "IconFa", component });
