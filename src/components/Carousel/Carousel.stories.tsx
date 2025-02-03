import React, { useState } from "react";
import styled from "styled-components";
import { type StoryObj } from "@storybook/react";

import { Button, Text } from "..";
import Carousel, { type CarouselProps } from ".";
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

const CarouselWithExternalPositionState = (args: CarouselProps) => {
  const [position, setPosition] = useState<number | undefined>(undefined);
  console.log({ position });
  return (
    <>
      <Button
        onClick={() => {
          setPosition(undefined);
        }}
      >
        clear
      </Button>
      <Button
        onClick={() => {
          setPosition(0);
        }}
      >
        Item 1
      </Button>
      <Button
        onClick={() => {
          setPosition(1);
        }}
      >
        Item 2
      </Button>
      <Button
        onClick={() => {
          setPosition(2);
        }}
      >
        Item 3
      </Button>
      <Button
        onClick={() => {
          setPosition(3);
        }}
      >
        Item 4
      </Button>
      {typeof position !== "undefined" ? (
        <Carousel
          {...args}
          startPosition={position}
          onPositionChanged={(pos) => {
            setPosition(pos);
          }}
        >
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
      ) : null}
    </>
  );
};

export default {
  title: "Carousel",
  component: Carousel,
  args: {},
  render: CarouselWithChildren,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <CarouselWithChildren {...args} />
    </AllThemesWrapper>
  ),
};
export const WithExternalPositionState: Story = {
  name: "WithExternalPositionState",
  args: {},
  render: (args) => (
    <AllThemesWrapper>
      <CarouselWithExternalPositionState {...args} />
    </AllThemesWrapper>
  ),
};
