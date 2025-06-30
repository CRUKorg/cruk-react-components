import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Heading } from ".";

function component() {
  return (
    <>
      <Heading>H2 is the default</Heading>
      <Heading h2 textSize="xxxxl">
        This is H2 with H1 size
      </Heading>
      <Heading h1>This is H1 heading</Heading>
      <Heading h2>This is H2 heading</Heading>
      <Heading h3 textColor="#ff00ff">
        This is H3 heading
      </Heading>
      <Heading h4>This is H4 heading</Heading>
      <Heading h5>This is H5 heading</Heading>
      <Heading h6>This is H6 heading</Heading>
      <Heading textAlign="center">This is center aligned</Heading>
      <Heading textAlign="right">This is right aligned</Heading>
    </>
  );
}

testAccessibilityOnAllThemes({ componentName: "Heading", component });
