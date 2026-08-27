import React from "react";

import { Text, Box } from "..";
import { Collapse } from ".";
import "./styles.css";
import "../Box/styles.css";

export default {};
export const Component = () => (
  <Box backgroundColor="background-light" padding="s">
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
      headerTitleTextColor="text-dark"
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
        <Box backgroundColor="background-light" padding="s">
          <Text textColor="text-dark">This is box header</Text>
        </Box>
      }
    >
      <Box backgroundColor="background-light" padding="s">
        <Text textColor="text-dark">This is box</Text>
      </Box>
    </Collapse>
  </Box>
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
