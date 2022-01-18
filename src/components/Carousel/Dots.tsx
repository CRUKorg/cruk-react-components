import React, { FC, ButtonHTMLAttributes } from "react";

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

export const CarouselLeftButton: FC<ButtonHTMLAttributes<HTMLElement>> = (
  props
) => (
  <div>
    <CarouselButton {...props} aria-label="previous">
      <VerticalAlign>
        ◄<ScreenReaderOnly>Scroll carousel to previous index</ScreenReaderOnly>
      </VerticalAlign>
    </CarouselButton>
  </div>
);

export const CarouselRightButton: FC<ButtonHTMLAttributes<HTMLElement>> = (
  props
) => (
  <div>
    <CarouselButton {...props} aria-label="next">
      <VerticalAlign>
        ►<ScreenReaderOnly>Scroll carousel to previous index</ScreenReaderOnly>
      </VerticalAlign>
    </CarouselButton>
  </div>
);

export const Dots: FC<DotProps> = ({
  count,
  currentPosition = 0,
  scrollToPosition,
  next,
  previous,
}) => {
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
