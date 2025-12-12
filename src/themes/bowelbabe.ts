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
  horizontalPadding: "1rem",
  borderRadius: "2em",
};

export const TOKEN_COLORS: TokenColorsType = {
  ...defaultTheme.tokenColors,
  bbPurple: "#501e70",
  bbLightGreen: "#92ddcb",
  bbGreen: "#26bb98",
  bbPastelGreen: "#d4f1ea",
  bbPink: "#d81272",
  bbPastelPink: "#EB88B8",
  bbBlue: "#009ed1",
  bbTeal: "#005e85",
  bbYellow: "#e4b50b",
  bbPastelYellow: "#F1DA85",
};

export const COLORS: ColorsType = {
  ...defaultTheme.colors,
  primary: TOKEN_COLORS.bbPurple,
  secondary: TOKEN_COLORS.bbGreen,
  tertiary: TOKEN_COLORS.bbTeal,

  textOnPrimary: TOKEN_COLORS.white,
  textOnSecondary: TOKEN_COLORS.bbPurple,
  textOnTertiary: TOKEN_COLORS.white,

  warning: TOKEN_COLORS.bbYellow,
  success: TOKEN_COLORS.bbGreen,
  info: TOKEN_COLORS.bbBlue,

  avatarBorder: TOKEN_COLORS.bbPurple,
  progressBar: TOKEN_COLORS.bbLightGreen,
  progressBarSecondary: TOKEN_COLORS.bbGreen,
  circularProgress: TOKEN_COLORS.bbLightGreen,
  circularProgressSecondary: TOKEN_COLORS.bbGreen,
  linkColor: TOKEN_COLORS.bbPurple,
  linkColorHover: TOKEN_COLORS.bbPink,
  linkColorSecondary: TOKEN_COLORS.bbPurple,
  linkColorSecondaryHover: TOKEN_COLORS.bbPink,

  backgroundLightColor: TOKEN_COLORS.bbPastelGreen,

  collapseHeaderColor: TOKEN_COLORS.bbPink,
  check: TOKEN_COLORS.bbPurple,

  headerTaglineText: TOKEN_COLORS.bbPurple,

  loaderColor1: TOKEN_COLORS.bbPurple,
  loaderColor2: TOKEN_COLORS.bbLightGreen,
  loaderColor3: TOKEN_COLORS.bbPink,

  paginationText: TOKEN_COLORS.bbPurple,
  paginationBackground: TOKEN_COLORS.bbPurple,

  totaliserBubbleColor: TOKEN_COLORS.bbPurple,
  totaliserBubbleTextColor: TOKEN_COLORS.bbLightGreen,
  totaliserBubbleTotalColor: TOKEN_COLORS.white,

  buttonPrimaryBackground: TOKEN_COLORS.bbPastelYellow,
  buttonPrimaryText: TOKEN_COLORS.bbPurple,
  buttonPrimaryBorder: TOKEN_COLORS.bbPastelYellow,
  buttonPrimaryBackgroundHover: TOKEN_COLORS.bbPastelPink,
  buttonPrimaryTextHover: TOKEN_COLORS.bbPurple,
  buttonPrimaryBorderHover: TOKEN_COLORS.bbPastelPink,
  buttonPrimaryDisabledBackground: TOKEN_COLORS.grey_200,
  buttonPrimaryDisabledText: TOKEN_COLORS.grey_800,
  buttonPrimaryDisabledBorder: TOKEN_COLORS.grey_200,

  buttonSecondaryBackground: TOKEN_COLORS.white,
  buttonSecondaryText: TOKEN_COLORS.bbPurple,
  buttonSecondaryBorder: TOKEN_COLORS.bbPastelYellow,
  buttonSecondaryBackgroundHover: TOKEN_COLORS.bbPastelPink,
  buttonSecondaryTextHover: TOKEN_COLORS.bbPurple,
  buttonSecondaryBorderHover: TOKEN_COLORS.bbPastelYellow,
  buttonSecondaryDisabledBackground: TOKEN_COLORS.grey_200,
  buttonSecondaryDisabledText: TOKEN_COLORS.grey_800,
  buttonSecondaryDisabledBorder: TOKEN_COLORS.grey_200,

  buttonTertiaryText: TOKEN_COLORS.bbPurple,
  buttonTertiaryTextHover: TOKEN_COLORS.bbPink,
  buttonTertiaryDisabledText: TOKEN_COLORS.grey_200,
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
  tokenColors: { ...TOKEN_COLORS },
  colors: { ...COLORS },
  typography: { ...TYPOGRAPHY },
  utilities: { ...UTILITIES },
};

export default bowelbabeTheme;
