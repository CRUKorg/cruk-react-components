import { type ButtonType, type TypographyType, type ThemeType } from "../types";

import { crukTheme as defaultTheme } from "./cruk";

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
};

export default rflTheme;
