import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Loader } from ".";
import "./styles.css";

function component() {
  return <Loader />;
}

testAccessibilityOnAllThemes({ componentName: "Loader", component });
