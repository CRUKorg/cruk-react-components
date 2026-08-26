import React from "react";

import { Box } from ".";
import { Text } from "..";
import "./styles.css";

export default {};
export const Component = () => (
  <>
    <Box>This is box</Box>
    <Box backgroundColor="primary" padding="s">
      <Text textColor="text-on-primary">This is box</Text>
    </Box>
    <Box backgroundColor="secondary" padding="s">
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

export const CrukTheme = () => (
  <main data-theme="cruk">
    <Component />
  </main>
);

export const RflTheme = () => (
  <main data-theme="rfl">
    <Component />
  </main>
);

export const Su2cTheme = () => (
  <main data-theme="su2c">
    <Component />
  </main>
);

export const BowelbabeTheme = () => (
  <main data-theme="bowelbabe">
    <Component />
  </main>
);
