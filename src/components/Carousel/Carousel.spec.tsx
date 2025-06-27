import React from "react";
import styled from "styled-components";

import { testAccessibilityOnAllThemes } from "playwright/utils";

import { Carousel } from ".";
import { Text } from "..";

const Item = styled.div`
  height: 200px;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

function component() {
  return (
    <Carousel>
      <Item>
        <Text textAlign="center" marginVertical="auto" textSize="l">
          Item 1
        </Text>
      </Item>
      <Item>
        <Text textAlign="center" marginVertical="auto" textSize="l">
          Item 2
        </Text>
      </Item>
      <Item>
        <Text textAlign="center" marginVertical="auto" textSize="l">
          Item 3
        </Text>
      </Item>
      <Item>
        <Text textAlign="center" marginVertical="auto" textSize="l">
          Item 4
        </Text>
      </Item>
      <Item>
        <Text textAlign="center" marginVertical="auto" textSize="l">
          Item 5
        </Text>
      </Item>
      <Item>
        <Text textAlign="center" marginVertical="auto" textSize="l">
          Item 6
        </Text>
      </Item>
    </Carousel>
  );
}

testAccessibilityOnAllThemes({ componentName: "Carousel", component });
