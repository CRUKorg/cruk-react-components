import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Heading } from ".";
import "./styles.css";

function component() {
  return (
    <>
      <Heading h1>This is H1 heading</Heading>
      <Heading>H2 is the default</Heading>
      <Heading h2 textSize="xxxxl">
        This is H2 with H1 size
      </Heading>
      <Heading textAlign="center">This is center aligned</Heading>
      <Heading textAlign="right">This is right aligned</Heading>
      <Heading h3>This is H3 heading</Heading>
      <Heading h4>This is H4 heading</Heading>
      <Heading h5>This is H5 heading</Heading>
      <Heading h6>This is H6 heading</Heading>
    </>
  );
}

testAccessibilityOnAllThemes({ componentName: "Heading", component });
