// eslint-disable-next-line @typescript-eslint/ban-types
export const debounce = (delay: number, callback: Function) => {
  let timerId: ReturnType<typeof setTimeout> | null;
  return (...args: unknown[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      callback(...args);
      timerId = null;
    }, delay);
  };
};

export default debounce;
