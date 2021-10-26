import { useRef, DependencyList, RefObject, MutableRefObject } from "react";

import useLayoutEffectBrowser from "./useLayoutEffectBrowser";

const isBrowser = typeof window !== `undefined`;

function getScrollPosition({
  element,
  useWindow,
}: {
  element?: RefObject<HTMLElement> | MutableRefObject<undefined> | null;
  useWindow: boolean;
}) {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body;
  const position = target
    ? target.getBoundingClientRect()
    : { top: 0, left: 0 };

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
}

function useScrollPosition(
  effect: ({
    currPos,
  }: {
    prevPos: { x: number; y: number };
    currPos: { x: number; y: number };
  }) => void,
  deps: DependencyList,
  element: RefObject<HTMLElement> | MutableRefObject<undefined> | null,
  useWindow: boolean,
  wait: number
) {
  const position = useRef(getScrollPosition({ useWindow, element }));

  let throttleTimeout: number | null = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useLayoutEffectBrowser(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          // @ts-ignore: Unreachable code error
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };
    if (isBrowser) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (isBrowser) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, deps);
}

export default useScrollPosition;
export { useScrollPosition };
