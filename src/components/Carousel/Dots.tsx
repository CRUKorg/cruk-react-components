import React from "react";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import { IconFa } from "../IconFa";

import {
  DotContainer,
  Dot,
  CarouselButton,
  ButtonWrapper,
  VerticalAlign,
  ScreenReaderOnly,
} from "./styles";

export const Dots = ({
  count,
  currentPosition = 0,
  scrollToPosition,
  next,
  previous,
}: {
  count: number;
  currentPosition: number;
  scrollToPosition: (to: number) => void;
  next: () => void;
  previous: () => void;
}) => {
  const moreOnRight = currentPosition !== count - 1;
  const moreOnLeft = currentPosition !== 0;
  const countArray = Array.from({ length: count }, (e, i) => `arrayIndex${i}`);

  return (
    <ButtonWrapper>
      <CarouselButton
        disabled={!moreOnLeft}
        aria-label="previous"
        onClick={() => {
          previous();
        }}
      >
        <VerticalAlign>
          <IconFa faIcon={faCaretLeft} size="1.25em" />
          <ScreenReaderOnly>Scroll carousel to previous index</ScreenReaderOnly>
        </VerticalAlign>
      </CarouselButton>

      <DotContainer $count={count}>
        {countArray.map((item, index) => {
          const isSelected = index === currentPosition;
          const scrollTo = () => {
            scrollToPosition(index);
          };
          return (
            <Dot
              key={item}
              role="switch"
              aria-checked={isSelected}
              onClick={scrollTo}
              $selected={isSelected}
            >
              <ScreenReaderOnly>{`Scroll carousel to index ${index}`}</ScreenReaderOnly>
            </Dot>
          );
        })}
      </DotContainer>

      <CarouselButton
        disabled={!moreOnRight}
        aria-label="next"
        onClick={() => {
          next();
        }}
      >
        <VerticalAlign>
          <IconFa faIcon={faCaretRight} size="1.25em" />
          <ScreenReaderOnly>Scroll carousel to previous index</ScreenReaderOnly>
        </VerticalAlign>
      </CarouselButton>
    </ButtonWrapper>
  );
};

export default Dots;
