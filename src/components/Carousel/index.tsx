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
  /** set carousel image to full width of parent */
  fullWidthChild?: boolean;
};

/**
 *
 * Lightweight carousel component that works with mouse and touch events,
 * Accepts react node array as children so will work with any html element as a child.
 * Also works with external state that holds carousel postion,
 * by accepting a starting position as a prop, whilst also accepting a handler
 * with current position as a prop triggered when carousel component is interacted with.
 */
export const Carousel = ({
  startPosition,
  children,
  onPositionChanged,
  shrinkUnselectedPages = false,
  fullWidthChild = false,
}: CarouselProps) => {
  const timer = React.useRef<NodeJS.Timeout | string | number | undefined>();
  const isStartPositionSet = typeof startPosition !== "undefined";
  const [currentPosition, setCurrentPosition] = useState(startPosition || 0);
  const [smoothScrolling, setSmoothScrolling] = useState(!isStartPositionSet);
  const scrollRef = useRef<HTMLUListElement>(null);

  // remove null children
  const childArray = React.Children.toArray(children).filter(Boolean);

  const setPosition = (to: number) => {
    if (currentPosition === to) return;
    setCurrentPosition(to);

    if (timer) {
      clearTimeout(timer?.current);
    }
    timer.current = setTimeout(() => {
      if (onPositionChanged && smoothScrolling) {
        // we need to debounce here if we are using external state as we don't want to
        // fire many new positions if we are scrolling past multiple cards
        onPositionChanged(to);
      }
    }, 500);
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

      // always resume normal smooth scrolling behaviour after the first scroll
      if (!smoothScrolling) {
        setSmoothScrolling(true);
      }
    }
  };

  // Stop smooth scrolling when moving to a starting position
  useEffect(() => {
    if (isStartPositionSet) {
      setSmoothScrolling(false);
    }
  }, [startPosition]);

  useEffect(() => {
    if (!smoothScrolling) {
      scrollToPosition(startPosition || 0);
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
              const keyString = `card-${index}`;
              return (
                <CarouselCard
                  key={keyString}
                  onlyChild={onlyChild}
                  fullWidthChild={fullWidthChild}
                >
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
                      fullWidthChild={fullWidthChild}
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
