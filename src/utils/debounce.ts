// eslint-disable-next-line @typescript-eslint/ban-types
export default (delay: number, callback: Function) => {
  let timerId: number | null;
  return (...args: any[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    timerId = setTimeout(() => {
      callback(...args);
      timerId = null;
    }, delay);
  };
};
