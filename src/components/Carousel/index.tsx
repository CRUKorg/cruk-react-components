import React, { useState, useRef, useEffect, memo, ReactNode } from "react";
import { InView } from "react-intersection-observer";

import Box from "../Box";
import { Dots } from "./Dots";

import {
  CarouselWrapper,
  CarouselCardInner,
  CarouselCard,
  CarouselScrollArea,
} from "./styles";

export type CarouselProps = {
  /** Index in which the carousel is scrolled to on mount */
  startPosition?: number;
  /** call back for on position changed first prop is the possition */
  onPositionChanged?: (position: number) => void;
  /** show item left and right of current smaller than current item */
  shrinkUnselectedPages?: boolean;
  /** childrent item of the carousel */
  children?: ReactNode;
};

/**
 *
 * Light weight carousel component that works with mouse and touch events, will work with divs and much anything you chuck in children
 */
export const Carousel = ({
  startPosition = 0,
  children,
  onPositionChanged,
  shrinkUnselectedPages = false,
}: CarouselProps) => {
  const [currentPosition, setCurrentPosition] = useState(startPosition);
  const [smoothScrolling, setSmoothScrolling] = useState(true);
  const scrollRef = useRef<HTMLUListElement>(null);

  // remove null children
  const childArray = React.Children.toArray(children).filter(Boolean);

  const setPosition = (to: number) => {
    if (currentPosition === to) return;

    setCurrentPosition(to);

    if (onPositionChanged) {
      onPositionChanged(to);
    }
  };

  const next = () => {
    scrollToPosition(currentPosition + 1);
  };

  const previous = () => {
    scrollToPosition(currentPosition - 1);
  };

  const scrollToPosition = (to: number) => {
    if (scrollRef && scrollRef.current) {
      const containerWidth = scrollRef.current.scrollWidth;
      const totalItems = scrollRef.current.children.length;
      const atBegining = to === 0;
      const atEnd = to === totalItems - 1;

      const item = scrollRef.current.children[to] as HTMLElement;
      if (!item) return;
      const newScroll = item.offsetLeft;

      if (atBegining) {
        scrollRef.current.scrollTo(0, 0);
      } else if (atEnd) {
        scrollRef.current.scrollTo(containerWidth, 0);
      } else {
        scrollRef.current.scrollTo(newScroll, 0);
      }

      // Reset to normal behaviour after setting starting scroll position
      if (!smoothScrolling) {
        setSmoothScrolling(true);
      }
    }
  };

  // Funky use effects to stop smooth scrolling when
  // carousel appears and a starting position other than zero is set
  useEffect(() => {
    if (startPosition !== 0) {
      setSmoothScrolling(false);
    }
  }, [startPosition]);

  useEffect(() => {
    if (smoothScrolling === false) {
      scrollToPosition(startPosition);
    }
  }, [smoothScrolling]);

  const onlyChild = childArray.length === 1;

  return (
    <>
      <Box>
        <CarouselWrapper>
          <CarouselScrollArea
            ref={scrollRef}
            aria-live="assertive"
            smoothScrolling={smoothScrolling}
            tabIndex={0}
          >
            {childArray.map((child, index) => {
              const isSelected = index === currentPosition;
              return (
                // not ideal but we only have indexes here
                // eslint-disable-next-line react/no-array-index-key
                <CarouselCard key={`card${index}`} onlyChild={onlyChild}>
                  <InView
                    threshold={0.5}
                    as="div"
                    onChange={(inView) => {
                      if (inView) {
                        setPosition(index);
                      }
                    }}
                  >
                    <CarouselCardInner
                      onlyChild={onlyChild}
                      isSelected={isSelected}
                      shrinkUnselectedPages={shrinkUnselectedPages}
                    >
                      {child}
                    </CarouselCardInner>
                  </InView>
                </CarouselCard>
              );
            })}
          </CarouselScrollArea>
        </CarouselWrapper>
      </Box>
      {childArray.length > 1 ? (
        <Box>
          <Dots
            count={childArray.length}
            currentPosition={currentPosition}
            scrollToPosition={scrollToPosition}
            next={next}
            previous={previous}
          />
        </Box>
      ) : null}
    </>
  );
};

export default memo(Carousel);
