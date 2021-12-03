import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Story, Meta } from "@storybook/react";

import { su2cTheme, Text } from "..";
import Carousel, { CarouselProps } from ".";

export default {
  title: "Carousel (experimental)",
  component: Carousel,
} as Meta<CarouselProps>;

const Item = styled.div`
  height: 200px;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Template: Story = (args) => (
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

export const CarouselDefault: Story = Template.bind({});
CarouselDefault.storyName = "Carousel";
CarouselDefault.args = {};

const TemplateWithSU2C: Story = (args) => (
  <ThemeProvider theme={su2cTheme}>
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
  </ThemeProvider>
);

export const SU2CCarousel: Story = TemplateWithSU2C.bind({});
SU2CCarousel.storyName = "SU2C Carousel";
SU2CCarousel.args = {};
