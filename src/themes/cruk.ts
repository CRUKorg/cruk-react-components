import {
  type UtilitiesType,
  type ButtonType,
  type TypographyType,
  type ThemeType,
} from "../types";

export const UTILITIES: UtilitiesType = {
  inputBorderWidth: "1px",
};

export const BUTTON: ButtonType = {
  borderRadius: "0px",
  borderRadiusLarge: "0px",
  buttonBorderThickness: "2px",
  textDecoration: "none",
  textTransform: "none",
  horizontalPadding: "2em",
};

export const TYPOGRAPHY: TypographyType = {
  fontFamilyBase: "Poppins,sans-serif",
  fontFamilyButtons: "Poppins,sans-serif",
  fontFamilyLinks: "Poppins,sans-serif",
  fontFamilyHeadings: "Progress,Arial,Helvetica,sans-serif",
  fontFamilyLabel: "Poppins,sans-serif",
  fontSizeBase: "16px",
  fontWeightBase: 300,
  fontWeightHeadings: 400,
  fontWeightLinks: 700,
  fontWeightButtons: 400,
  fontWeightLabels: 500,
  fontWeightHeavy: 700,
  fontWeightMedium: 500,
  fontWeightNormal: 400,
  fontWeightLight: 300,
  fontWeightVLight: 100,
  linkTextDecoration: "underline",
  LinkLetterSpacing: "0px",
  LinkPrimaryTextDecoration: "underline",
  lineHeight: "1.5em",
  headerLineHeight: "1.25em",
  headerTextTransform: "none",
};

export const crukTheme: ThemeType = {
  name: "cruk",
  button: { ...BUTTON },
  typography: { ...TYPOGRAPHY },
  utilities: { ...UTILITIES },
};

export default crukTheme;
