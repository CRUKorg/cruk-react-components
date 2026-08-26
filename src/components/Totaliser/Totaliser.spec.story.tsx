import React from "react";

import { Box, Text } from "..";
import { Totaliser } from ".";
import "./styles.css";

export default {};
export const Component = () => (
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
