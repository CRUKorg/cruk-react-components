export const isBrowser = typeof window !== "undefined";

export const calculatePercentRounded = (
  value: number,
  target: number
): number => {
  const percent = (value / target) * 100;
  if (percent === Number.POSITIVE_INFINITY || Number.isNaN(percent)) {
    return 0;
  }
  return Math.floor(percent < 1 ? Math.ceil(percent) : Math.floor(percent));
};

export const formatMoney = (value: number): string => {
  const parsed = Number.parseFloat((Math.round(value * 100) / 100).toString()).toFixed(2);
  if (Number.isNaN(parseFloat(parsed)) || Number.isNaN(value)) {
    return '0';
  }
  return parsed;
};

export const numberWithCommas = (n?: number | string): string => {
  if (!n) {
    return "";
  }
  const parts = n.toString().split(".");

  return `${parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${
    parts[1] ? `.${  parts[1]}` : ""
  }`;
};

export const formatMoneyWithCommas = (value: number): string => {
  const parsed = Number.parseFloat((Math.round(value * 100) / 100).toString()).toFixed(2);
  if (Number.isNaN(parseFloat(parsed)) || Number.isNaN(value)) {
    return '0';
  }
  return numberWithCommas(parsed);
};

export const camelize = (str: string): string =>
  str
    .toString()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word: string, index: number) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "");
