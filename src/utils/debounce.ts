// eslint-disable-next-line @typescript-eslint/ban-types
export default (delay: number, callback: Function) => {
  let timerId: ReturnType<typeof setTimeout> | null;
  return (...args: any[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      callback(...args);
      timerId = null;
    }, delay);
  };
};
