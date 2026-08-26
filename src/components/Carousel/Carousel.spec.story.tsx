import React from "react";

import { Carousel } from ".";
import { Text } from "..";
import "./styles.css";

export default {};
export const Component = () => (
  <Carousel>
    <div style={{ height: "200px", backgroundColor: "#ddd" }}>
      <Text textAlign="center" marginVertical="auto" textSize="l">
        Item 1
      </Text>
    </div>
    <div style={{ height: "200px", backgroundColor: "#ddd" }}>
      <Text textAlign="center" marginVertical="auto" textSize="l">
        Item 2
      </Text>
    </div>
    <div style={{ height: "200px", backgroundColor: "#ddd" }}>
      <Text textAlign="center" marginVertical="auto" textSize="l">
        Item 3
      </Text>
    </div>
    <div style={{ height: "200px", backgroundColor: "#ddd" }}>
      <Text textAlign="center" marginVertical="auto" textSize="l">
        Item 4
      </Text>
    </div>
    <div style={{ height: "200px", backgroundColor: "#ddd" }}>
      <Text textAlign="center" marginVertical="auto" textSize="l">
        Item 5
      </Text>
    </div>
    <div style={{ height: "200px", backgroundColor: "#ddd" }}>
      <Text textAlign="center" marginVertical="auto" textSize="l">
        Item 6
      </Text>
    </div>
  </Carousel>
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
