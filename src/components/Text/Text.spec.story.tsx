import React from "react";

import { Text } from ".";
import "./styles.css";

export default {};
export const Component = () => (
  <>
    <Text>This is text it defaults to a paragraph tag</Text>
    <Text marginBottom="l" paddingHorizontal="s">
      {`This is text with spacing props "marginBottom="l" paddingHorizontal="s"`}
    </Text>
    <Text as="span">This is text as a span tag</Text>
    <Text textSize="l">Text size l</Text>
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
