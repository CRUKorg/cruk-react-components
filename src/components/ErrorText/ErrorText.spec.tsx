import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { ErrorText } from ".";

function component() {
  return <ErrorText>This field is required</ErrorText>;
}

testAccessibilityOnAllThemes({ componentName: "ErrorText", component });
