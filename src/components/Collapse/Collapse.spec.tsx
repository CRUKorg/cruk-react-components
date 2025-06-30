import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Collapse } from ".";
import { Text, Box } from "..";

function component() {
  return (
    <Box backgroundColor="bglight">
      <Collapse headerTitleText="What is Lorem Ipsum?" id="default">
        <Text>
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
         industry. Lorem Ipsum has been the industry's standard dummy text ever
         since the 1500s, when an unknown printer took a galley of type and
         scrambled it to make a type specimen book. It has survived not only five
         centuries, but also the leap into electronic typesetting, remaining
         essentially unchanged. It was popularised in the 1960s with the release
         of Letraset sheets containing Lorem Ipsum passages, and more recently
         with desktop publishing software like Aldus PageMaker including versions
         of Lorem Ipsum.`}
        </Text>
      </Collapse>

      <Collapse
        headerTitleTextColor="primary"
        headerTitleTextSize="xl"
        headerTitleText="A long title with headerTitleTextColor and headerTitleTextSize"
        id="1"
      >
        <p>
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
         industry. Lorem Ipsum has been the industry's standard dummy text ever
         since the 1500s`}
        </p>
      </Collapse>

      <Collapse
        id="custom"
        headerTitleText="Custom header components"
        headerComponent={
          <Box backgroundColor="primary">
            <Text textColor="textOnPrimary">This is box header</Text>
          </Box>
        }
      >
        <Box backgroundColor="primary">
          <Text textColor="textOnPrimary">This is box</Text>
        </Box>
      </Collapse>
    </Box>
  );
}

testAccessibilityOnAllThemes({
  componentName: "Collapse",
  component,
  ignoreRules: ["color-contrast"], // Ignore color contrast for custom header component, we know SU2C theme has issues, new designs will fix this
});
