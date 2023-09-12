import React from "react";
import styled from "styled-components";
import { StoryObj } from "@storybook/react";

import { Text } from "..";
import Carousel, { CarouselProps } from ".";
import AllThemesWrapper from "../AllThemesWrapper";

const Item = styled.div`
  height: 200px;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CarouselWithChildren = (args: CarouselProps) => (
  <Carousel {...args}>
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

export default {
  title: "Carousel",
  component: Carousel,
  args: {},
  render: CarouselWithChildren,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  name: "Default",
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <CarouselWithChildren {...args} />
    </AllThemesWrapper>
  ),
};
