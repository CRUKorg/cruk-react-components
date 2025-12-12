import {
  type UtilitiesType,
  type ButtonType,
  type TokenColorsType,
  type ColorsType,
  type TypographyType,
  type ThemeType,
} from "../types";

import { crukTheme as defaultTheme } from "./cruk";

export const UTILITIES: UtilitiesType = {
  ...defaultTheme.utilities,
};

export const BUTTON: ButtonType = {
  ...defaultTheme.button,
};

export const TOKEN_COLORS: TokenColorsType = {
  ...defaultTheme.tokenColors,
};

export const COLORS: ColorsType = {
  ...defaultTheme.colors,
  textHeaderDefault: TOKEN_COLORS.navy_600,
  headerTaglineText: TOKEN_COLORS.navy_600,
  progressBar: TOKEN_COLORS.magenta_700,
  progressBarSecondary: TOKEN_COLORS.navy_600,
};

export const TYPOGRAPHY: TypographyType = {
  ...defaultTheme.typography,
  fontWeightHeadings: 600,
};

export const rflTheme: ThemeType = {
  name: "rfl",
  button: { ...BUTTON },
  tokenColors: { ...TOKEN_COLORS },
  colors: { ...COLORS },
  typography: { ...TYPOGRAPHY },
  utilities: { ...UTILITIES },
};

export default rflTheme;
