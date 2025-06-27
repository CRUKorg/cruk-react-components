import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Step } from ".";

function component() {
  return (
    <Step
      current={3}
      steps={["Account", "Details", "Activity", "Motivation", "Page"]}
    />
  );
}

testAccessibilityOnAllThemes({ componentName: "Step", component });
