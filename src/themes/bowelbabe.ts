import { type ButtonType, type TypographyType, type ThemeType } from "../types";

import { crukTheme as defaultTheme } from "./cruk";

export const BUTTON: ButtonType = {
  ...defaultTheme.button,
  horizontalPadding: "1rem",
  borderRadius: "2em",
};

export const TYPOGRAPHY: TypographyType = {
  ...defaultTheme.typography,
  fontFamilyHeadings: "juana,Arial,sans-serif",
  fontFamilyLinks: "juana,Arial,sans-serif",
  fontFamilyButtons: "juana,Arial,sans-serif",
  fontFamilyBase:
    "Arial, Calibri, nimbussansl, liberationsans, freesans, clean, sans-serif",
  fontFamilyLabel:
    "Arial, Calibri, nimbussansl, liberationsans, freesans, clean, sans-serif",
  // headerLineHeight: "1.5em",
  fontWeightBase: 400,
  fontWeightLinks: 600,
  fontWeightHeadings: 600,
  fontWeightButtons: 600,
  fontWeightLabels: 600,
  LinkPrimaryTextDecoration: "none",
  LinkLetterSpacing: "0px",
};

export const bowelbabeTheme: ThemeType = {
  name: "bowelbabe",
  button: { ...BUTTON },
  typography: { ...TYPOGRAPHY },
};

export default bowelbabeTheme;
