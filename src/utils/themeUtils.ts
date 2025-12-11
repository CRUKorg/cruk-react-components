import {
  type ThemeType,
  type SpacingType,
  type ColorsType,
  spaces,
} from "../types";

export const themeSizeOrString = (spaceString: string): string =>
  spaces.includes(spaceString as (typeof spaces)[number])
    ? `var(--spacing-${spaceString as keyof SpacingType})`
    : spaceString;

export const themeColorOrString = (
  colorString: string | undefined,
  theme: ThemeType,
): string =>
  typeof theme.colors[colorString as keyof ColorsType] === "undefined"
    ? colorString || "currentColor"
    : theme.colors[colorString as keyof ColorsType];
