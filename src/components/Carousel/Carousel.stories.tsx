import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { StoryObj, Meta } from "@storybook/react";

import { bowelbabeTheme, su2cTheme, Text } from "..";
import Carousel, { CarouselProps } from ".";

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
} as Meta<CarouselProps>;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  name: "Default",
  args: {},
};

/// SU2C

const su2cRender = (args: CarouselProps) => (
  <ThemeProvider theme={su2cTheme}>
    <CarouselWithChildren {...args} />
  </ThemeProvider>
);

export const CarouselSU2C: Story = {
  name: "CarouselSU2C",
  args: {},
  render: su2cRender,
};

/// Bowelbabe

const bowelbabeRender = (args: CarouselProps) => (
  <ThemeProvider theme={bowelbabeTheme}>
    <CarouselWithChildren {...args} />
  </ThemeProvider>
);

export const CarouselBowelbabe: Story = {
  name: "CarouselBowelbabe",
  args: {},
  render: bowelbabeRender,
};
