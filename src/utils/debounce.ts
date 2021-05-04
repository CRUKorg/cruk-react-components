export default (delay: number, callback: Function) => {
  let timerId: number | null;
  return (...args: any[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    // @ts-ignore
    timerId = setTimeout(() => {
      callback(...args);
      timerId = null;
    }, delay);
  };
};
