import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Radio } from ".";
import "./styles.css";

function unControlledContent() {
  return (
    <>
      <Radio
        name="example1"
        value="one"
        defaultChecked
        // checked={selected === "one"}
        onClick={() => {
          console.log("Option one selected");
        }}
      >
        Option one
      </Radio>

      <Radio
        name="example1"
        value="two"
        // checked={selected === "two"}
        onClick={() => {
          console.log("Option two selected");
        }}
      >
        Option two
      </Radio>
    </>
  );
}

testAccessibilityOnAllThemes({
  componentName: "Radio",
  component: unControlledContent,
});
