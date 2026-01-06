import React, { type ChangeEvent } from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { RadioConsent } from ".";
import "./styles.css";
import "../ErrorText/styles.css";

function unControlledContent() {
  return (
    <>
      <RadioConsent
        legend="Email"
        name="email"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          console.log(e.target.value)
        }
        attributes={[
          { option: "Yes", value: "yes" },
          { option: "No", value: "no" },
        ]}
        selectedValue="yes"
      />

      <RadioConsent
        legend="Telephone"
        name="phone"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          console.log(e.target.value)
        }
        attributes={[
          { option: "Yes", value: "yes" },
          { option: "No", value: "no" },
        ]}
        selectedValue="yes"
      />
    </>
  );
}

testAccessibilityOnAllThemes({
  componentName: "RadioConsent",
  component: unControlledContent,
});
