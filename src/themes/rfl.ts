import {
  type UtilitiesType,
  type ButtonType,
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

export const TYPOGRAPHY: TypographyType = {
  ...defaultTheme.typography,
  fontWeightHeadings: 600,
};

export const rflTheme: ThemeType = {
  name: "rfl",
  button: { ...BUTTON },
  typography: { ...TYPOGRAPHY },
  utilities: { ...UTILITIES },
};

export default rflTheme;
