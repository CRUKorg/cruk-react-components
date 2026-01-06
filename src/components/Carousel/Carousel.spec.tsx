import React from "react";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Carousel } from ".";
import { Text } from "..";
import "./styles.css";

function component() {
  return (
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
}

testAccessibilityOnAllThemes({ componentName: "Carousel", component });
