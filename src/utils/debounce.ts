// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = (delay: number, callback: (...args: any) => void) => {
  let timerId: ReturnType<typeof setTimeout> | null;
  return (...args: unknown[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      callback(...args);
      timerId = null;
    }, delay);
  };
};

export default debounce;
