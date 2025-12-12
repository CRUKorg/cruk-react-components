import { type TypographyType, type ThemeType } from "../types";

import { crukTheme as defaultTheme } from "./cruk";

export const TYPOGRAPHY: TypographyType = {
  ...defaultTheme.typography,
  fontWeightHeadings: 600,
};

export const rflTheme: ThemeType = {
  name: "rfl",
  typography: { ...TYPOGRAPHY },
};

export default rflTheme;
