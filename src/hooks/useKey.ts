import { useEffect, DependencyList, KeyboardEvent } from 'react';
import { isBrowser } from '../utils/Helper';

const codeLowerCaseA = 65;
const codeUpperCaseZ = 122;

// useKey((pressedKey, event) => {
//   console.log('Detected Key press', pressedKey);
//   console.log('Get event, if you want more details and preventDefault', event)
// }, {
//   detectKeys: ['A', '+', 122]
// });

export const useKey = (
  callback: (keyCode: number, event: KeyboardEvent<{}>) => void,
  options: {
    detectKeys?: (string | number)[];
    keyevent?: 'keydown' | 'keyup' | 'keypress';
  },
  dependencies?: DependencyList,
) => {
  const { detectKeys, keyevent } = options;
  const allowedKeys =
    typeof detectKeys !== 'undefined'
      ? detectKeys.map(item => (typeof item == 'string' ? item.charCodeAt(0) : item))
      : [];

  const handleEvent = (event: KeyboardEvent<{}>) => {
    const keyCode: number =
      event.which >= codeLowerCaseA && event.which <= codeUpperCaseZ ? event.key.charCodeAt(0) : event.which;

    if (allowedKeys.includes(keyCode) || allowedKeys.length === 0) {
      callback(keyCode, event);
    }
  };

  useEffect(() => {
    if (!isBrowser) {
      return;
    }
    // @ts-ignore expected function signature for listerns on window is slightly weird but this still works so ignore
    window.document.addEventListener(keyevent || 'keydown', handleEvent);
    return () => {
      // @ts-ignore expected function signature for listerns on window is slightly weird but this still works so ignore
      window.document.removeEventListener(keyevent || 'keydown', handleEvent);
    };
  }, dependencies || []);
};

export default useKey;
