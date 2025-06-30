import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Box } from ".";
import { Text } from "..";

function component() {
  return (
    <>
      <Box>This is box</Box>
      <Box backgroundColor="primary">
        <Text textColor="textOnPrimary">This is box</Text>
      </Box>
      <Box backgroundColor="secondary">
        <Text textColor="textOnSecondary">This is box</Text>
      </Box>
      <Box backgroundColor="secondary">
        <Text textColor="textOnSecondary">default spacing</Text>
      </Box>
      <Box backgroundColor="secondary" paddingVertical="xl" paddingBottom="xs">
        <Text textColor="textOnSecondary">{`paddingVertical="xl" paddingBottom="xs"`}</Text>
      </Box>
      <Box backgroundColor="primary" marginVertical="l" marginLeft="s">
        <Text textColor="textOnPrimary">{`marginVertical="l" marginLeft="s"`}</Text>
      </Box>
    </>
  );
}

testAccessibilityOnAllThemes({ componentName: "Box", component });
