import React, {
  useState,
  useRef,
  useEffect,
  memo,
  type ReactNode,
  useCallback,
} from "react";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import { Box } from "../Box";
import { IconFa } from "../IconFa";

/**
 *
 * Lightweight carousel component that works with mouse and touch events,
 * Accepts react node array as children so will work with any html element as a child.
 *
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
}: {
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
}) => {
  const timer = React.useRef<NodeJS.Timeout | string | number | undefined>(
    undefined,
  );
  const isStartPositionSet = typeof startPosition !== "undefined";
  const [currentPosition, setCurrentPosition] = useState(startPosition || 0);
  const [smoothScrolling, setSmoothScrolling] = useState(!isStartPositionSet);
  const scrollRef = useRef<HTMLUListElement>(null);

  const childArray = React.Children.toArray(children).filter(Boolean); // remove null children
  const onlyChild = childArray.length === 1;
  const count = childArray.length;
  const moreOnRight = currentPosition !== count - 1;
  const moreOnLeft = currentPosition !== 0;

  // setPosition is used instead of setCurrentPosition on scroll observers
  // because both startPosition and setCurrentPosition might be used
  // as the getter and setter of an external state,
  // if we have intersection observers also updating external state
  // calling onPositionChanged they will conflict with each other.
  // To avoid this we debounce and delay the calls to onPositionChanged.
  const setPosition = useCallback(
    (to: number) => {
      if (currentPosition === to) return;
      setCurrentPosition(to);

      if (timer) {
        clearTimeout(timer?.current);
      }
      timer.current = setTimeout(() => {
        if (onPositionChanged && smoothScrolling) {
          // Timer to debounce and only send the new position at the end of the scroll.
          // When using external state which also sets start position,
          // if scrolling to a new position past multiple cards,
          // it would effectively scroll to the past the first adjacent card,
          // receive the postion of the first card and stop there before it scrolls any further.
          onPositionChanged(to);
        }
      }, 500);
    },
    [currentPosition, onPositionChanged, smoothScrolling],
  );

  const next = () => {
    scrollToPosition(currentPosition + 1);
  };

  const previous = () => {
    scrollToPosition(currentPosition - 1);
  };

  const scrollToPosition = useCallback(
    (to: number) => {
      if (scrollRef?.current) {
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
    },
    [smoothScrolling],
  );

  // Stop smooth scrolling when moving to a starting position
  useEffect(() => {
    if (isStartPositionSet) {
      setSmoothScrolling(false);
    }
  }, [isStartPositionSet, startPosition]);

  // if smooth scrolling is disabled then we must be setting a start position scroll to start position
  // scrollToPosition will scroll to start position and re-enable smooth scrolling
  useEffect(() => {
    if (!smoothScrolling) {
      scrollToPosition(startPosition || 0);
    }
  }, [scrollToPosition, smoothScrolling, startPosition]);

  // set up intersection observer to update current position on scroll
  useEffect(() => {
    if (!scrollRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slideIndex = parseInt(
              entry.target.getAttribute("data-carousel-item-index") || "0",
              10,
            );
            setPosition(slideIndex);
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.5,
      },
    );

    const slideElements = scrollRef.current.querySelectorAll("li");
    slideElements.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, [children, setCurrentPosition, setPosition]);

  return (
    <div className="component-carousel" data-only-child={onlyChild}>
      <Box>
        <ul
          className="carousel-scroll-area"
          ref={scrollRef}
          aria-live="assertive"
          data-smooth-scrolling={smoothScrolling}
          tabIndex={0}
        >
          {childArray.map((child, index) => {
            const isSelected = index === currentPosition;
            const keyString = `card-${index}`;
            return (
              <li
                key={keyString}
                data-only-child={onlyChild}
                data-full-width-child={fullWidthChild}
                data-carousel-item-index={index}
              >
                <div
                  className="carousel-card-inner"
                  data-only-child={onlyChild}
                  data-selected={isSelected}
                  data-shrink-unselected-pages={shrinkUnselectedPages}
                  data-full-width-child={fullWidthChild}
                >
                  {child}
                </div>
              </li>
            );
          })}
        </ul>
      </Box>
      {childArray.length > 1 ? (
        <Box>
          <div className="button-wrapper">
            <button
              className="carousel-button"
              disabled={!moreOnLeft}
              aria-label="previous"
              onClick={() => {
                previous();
              }}
            >
              <span className="vertical-align">
                <IconFa faIcon={faCaretLeft} size="1.25em" />
                <span className="screen-reader-only">
                  Scroll carousel to previous index
                </span>
              </span>
            </button>

            <div className="dot-container" data-count={count}>
              {childArray.map((item, index) => {
                const scrollTo = () => {
                  scrollToPosition(index);
                };
                return (
                  <button
                    className="dot"
                    key={`arrayIndex${index}`}
                    role="switch"
                    aria-checked={index === currentPosition}
                    data-index={index}
                    onClick={scrollTo}
                  >
                    <span className="screen-reader-only">{`Scroll carousel to index ${index}`}</span>
                  </button>
                );
              })}
            </div>

            <button
              className="carousel-button"
              disabled={!moreOnRight}
              aria-label="next"
              onClick={() => {
                next();
              }}
            >
              <span className="vertical-align">
                <IconFa faIcon={faCaretRight} size="1.25em" />
                <span className="screen-reader-only">
                  Scroll carousel to next index
                </span>
              </span>
            </button>
          </div>
        </Box>
      ) : null}
    </div>
  );
};

export default memo(Carousel);
