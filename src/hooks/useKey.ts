import { useEffect, DependencyList } from "react";
import { isBrowser } from "../utils/Helper";

// useKey((pressedKey, event) => {
//   console.log('Detected Key press', pressedKey);
//   console.log('Get event, if you want more details and preventDefault', event)
// }, {
//   detectKeys: ['Enter']
// });

export const useKey = (
  callback: (event: KeyboardEvent) => void,
  options: {
    detectKeys?: string[];
    keyevent?: "keydown" | "keyup" | "keypress";
  },
  dependencies?: DependencyList
): void => {
  const { detectKeys = [], keyevent } = options;

  const handleEvent = (event: KeyboardEvent) => {
    if (detectKeys.includes(event.key) || detectKeys.length === 0) {
      callback(event);
    }
  };

  useEffect(() => {
    if (!isBrowser) {
      return undefined;
    }

    window.document.addEventListener(keyevent || "keydown", handleEvent);
    return () => {
      window.document.removeEventListener(keyevent || "keydown", handleEvent);
    };
  }, dependencies || []);
};

export default useKey;
