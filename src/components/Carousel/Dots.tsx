import React, { type ButtonHTMLAttributes } from "react";
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

type DotProps = {
  count: number;
  currentPosition: number;
  scrollToPosition: (to: number) => void;
  next: () => void;
  previous: () => void;
};

export const CarouselLeftButton = (
  props: ButtonHTMLAttributes<HTMLElement>,
) => (
  <div>
    <CarouselButton {...props} aria-label="previous">
      <VerticalAlign>
        <IconFa faIcon={faCaretLeft} size="1.25em" />
        <ScreenReaderOnly>Scroll carousel to previous index</ScreenReaderOnly>
      </VerticalAlign>
    </CarouselButton>
  </div>
);

export const CarouselRightButton = (
  props: ButtonHTMLAttributes<HTMLElement>,
) => (
  <div>
    <CarouselButton {...props} aria-label="next">
      <VerticalAlign>
        <IconFa faIcon={faCaretRight} size="1.25em" />
        <ScreenReaderOnly>Scroll carousel to previous index</ScreenReaderOnly>
      </VerticalAlign>
    </CarouselButton>
  </div>
);

export const Dots = ({
  count,
  currentPosition = 0,
  scrollToPosition,
  next,
  previous,
}: DotProps) => {
  const moreOnRight = currentPosition !== count - 1;
  const moreOnLeft = currentPosition !== 0;
  const countArray = Array.from({ length: count }, (e, i) => `arrayIndex${i}`);

  return (
    <ButtonWrapper>
      <CarouselLeftButton disabled={!moreOnLeft} onClick={previous} />

      <DotContainer count={count}>
        {countArray.map((item, index) => {
          const isSelected = index === currentPosition;
          const scrollTo = () => {
            scrollToPosition(index);
          };
          return (
            <Dot
              key={item}
              selected={isSelected}
              role="switch"
              aria-checked={isSelected}
              onClick={scrollTo}
            >
              <ScreenReaderOnly>{`Scroll carousel to index ${index}`}</ScreenReaderOnly>
            </Dot>
          );
        })}
      </DotContainer>

      <CarouselRightButton disabled={!moreOnRight} onClick={next} />
    </ButtonWrapper>
  );
};

export default Dots;
