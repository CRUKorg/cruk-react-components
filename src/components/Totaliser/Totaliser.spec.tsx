import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Totaliser } from ".";
import { Box, Text } from "..";

function component() {
  return (
    <>
      <Box>
        <Totaliser total={22.5} giftAid={10.55} />
      </Box>
      <Box>
        <Totaliser total={0.01} target={100000} />
      </Box>
      <Box>
        <Totaliser total={99.99} target={100} giftAid={25} />
      </Box>
      <Box>
        <Totaliser total={32} target={100} giftAid={6.4} isCompact />
      </Box>
      <Box>
        <Totaliser
          total={120}
          giftAid={27.5}
          target={100}
          summaryMessage={<Text>cool</Text>}
        />
      </Box>
      <Box>
        <Totaliser
          total={120}
          giftAid={27.5}
          target={100}
          summaryMessage="cool"
        />
      </Box>
    </>
  );
}

testAccessibilityOnAllThemes({ componentName: "Totaliser", component });
