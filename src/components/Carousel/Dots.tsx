import React from "react";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import { IconFa } from "../IconFa";

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
        {countArray.map((item, index) => {
          const isChecked = index === currentPosition;
          const scrollTo = () => {
            scrollToPosition(index);
          };
          return (
            <button
              className="dot"
              key={item}
              role="switch"
              aria-checked={isChecked}
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
  );
};

export default Dots;
