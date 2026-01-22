import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Box } from ".";
import { Text } from "..";
import "./styles.css";

function component() {
  return (
    <>
      <Box>This is box</Box>
      <Box backgroundColor="primary">
        <Text textColor="text-on-primary">This is box</Text>
      </Box>
      <Box backgroundColor="secondary">
        <Text textColor="text-on-secondary">This is box</Text>
      </Box>
      <Box backgroundColor="secondary">
        <Text textColor="text-on-secondary">default spacing</Text>
      </Box>
      <Box backgroundColor="secondary" paddingVertical="xl" paddingBottom="xs">
        <Text textColor="text-on-secondary">{`paddingVertical="xl" paddingBottom="xs"`}</Text>
      </Box>
      <Box backgroundColor="primary" marginVertical="l" marginLeft="s">
        <Text textColor="text-on-primary">{`marginVertical="l" marginLeft="s"`}</Text>
      </Box>
    </>
  );
}

testAccessibilityOnAllThemes({ componentName: "Box", component });
