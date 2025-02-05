import { type ThemeType, type SpacingType, type ColorsType } from "../types";

export const themeSizeOrString = (
  spaceString: string,
  theme: ThemeType,
): string =>
  typeof theme.spacing[spaceString as keyof SpacingType] === "undefined"
    ? spaceString
    : theme.spacing[spaceString as keyof SpacingType];

export const themeColorOrString = (
  colorString: string | undefined,
  theme: ThemeType,
): string =>
  typeof theme.colors[colorString as keyof ColorsType] === "undefined"
    ? colorString || "currentColor"
    : theme.colors[colorString as keyof ColorsType];
