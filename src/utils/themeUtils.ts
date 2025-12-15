import { spaces, colours, fontSizes } from "../types";

export const themeSpacingSizeOrString = (spaceString: string): string =>
  spaces.includes(spaceString as (typeof spaces)[number])
    ? `var(--spacing-${spaceString as (typeof spaces)[number]})`
    : spaceString;

export const themeFontSizeOrString = (fontSizeString: string): string =>
  fontSizes.includes(fontSizeString as (typeof fontSizes)[number])
    ? `var(--font-size-${fontSizeString as (typeof fontSizes)[number]})`
    : fontSizeString;

export const themeColorOrString = (
  colorString: string | (typeof colours)[number] | undefined,
): string =>
  colours.includes(colorString as (typeof colours)[number])
    ? `var(--clr-${colorString as (typeof colours)[number]})`
    : colorString || "currentColor";
