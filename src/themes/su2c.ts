import {
  type UtilitiesType,
  type ButtonType,
  type TypographyType,
  type ThemeType,
} from "../types";

import { crukTheme as defaultTheme } from "./cruk";

export const UTILITIES: UtilitiesType = {
  ...defaultTheme.utilities,
  useBackgroundStyleLinks: true,
};

export const BUTTON: ButtonType = {
  ...defaultTheme.button,
  borderRadius: "1.5rem",
  borderRadiusLarge: "2rem",
  textTransform: "uppercase",
};

export const TYPOGRAPHY: TypographyType = {
  ...defaultTheme.typography,
  fontFamilyHeadings: "ITCAvantGarde,Arial,sans-serif",
  fontFamilyLinks: "ITCAvantGarde,Arial,sans-serif",
  fontFamilyButtons: "ITCAvantGarde,Arial,sans-serif",
  fontFamilyBase:
    "ITCAvantGarde, Arial, Calibri, nimbussansl, liberationsans, freesans, clean, sans-serif",
  fontFamilyLabel:
    "ITCAvantGarde, Arial, Calibri, nimbussansl, liberationsans, freesans, clean, sans-serif",
  linkTextDecoration: "none",
  headerLineHeight: "1.5em",
  headerTextTransform: "uppercase",
  fontWeightBase: 400,
  fontWeightLinks: 700,
  fontWeightButtons: 700,
  fontWeightLabels: 600,
  fontWeightHeadings: 700,
  LinkPrimaryTextDecoration: "none",
  LinkLetterSpacing: "0px",
};

export const su2cTheme: ThemeType = {
  name: "su2c",
  button: { ...BUTTON },
  typography: { ...TYPOGRAPHY },
  utilities: { ...UTILITIES },
};

export default su2cTheme;
