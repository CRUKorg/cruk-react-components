export const calculatePercentRounded = (value: number, target: number): number => {
  const percent = (value / target) * 100;
  if (percent === Number.POSITIVE_INFINITY || Number.isNaN(percent)) {
    return 0;
  }
  return Math.floor(percent < 1 ? Math.ceil(percent) : Math.floor(percent));
};

export const formatMoney = (value: number): string => {
  const parsed = Number.parseFloat((Math.round(value * 100) / 100).toString()).toFixed(2);
  if (Number.isNaN(parseFloat(parsed)) || isNaN(value)) {
    return '0';
  }
  return parsed;
};

export const camelize = (str: string): string =>
  str
    .toString()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word: string, index: number) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase(),
    )
    .replace(/\s+/g, '');

export const camelCaseToCaptilalisedCase = (text: string): string => {
  const underScoreToSpace = text.replace('_', ' ');
  const result = underScoreToSpace.replace(/([A-Z])/g, ' $1').trim();
  return result.charAt(0).toUpperCase() + result.slice(1);
};
