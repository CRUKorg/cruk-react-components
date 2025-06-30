import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Text } from ".";

function component() {
  return (
    <>
      <Text>This is text it defaults to a paragraph tag</Text>
      <Text marginBottom="l" paddingHorizontal="s">
        {`This is text with spacing props "marginBottom="l" paddingHorizontal="s"`}
      </Text>
      <Text as="span">This is text as a span tag</Text>
      <Text textColor="#880000">Color is custom colour</Text>
      <Text textSize="l">Text size l</Text>
    </>
  );
}

testAccessibilityOnAllThemes({ componentName: "Text", component });
