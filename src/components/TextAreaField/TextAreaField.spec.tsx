import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { TextAreaField } from ".";

function component() {
  return (
    <>
      <TextAreaField
        label="Tell us more about your fundraising"
        name="firstName"
        defaultValue="I am baking cakes"
      />
    </>
  );
}

testAccessibilityOnAllThemes({ componentName: "TextAreaField", component });
