import {
  UtilitiesType,
  SiteConfigType,
  AvatarType,
  ButtonType,
  BreakPointType,
  TokenColorsType,
  ColorsType,
  SpacingType,
  FontSizesType,
  TypographyType,
  ThemeType,
} from "../types";

import defaultTheme from "./cruk";

export const UTILITIES: UtilitiesType = {
  ...defaultTheme.utilities,
};

export const SITE_CONFIG: SiteConfigType = {
  ...defaultTheme.siteConfig,
  logoSrc:
    "https://rcl.assets.cancerresearchuk.org/images/logos/bowelbabe-logo-160.png",
};

export const AVATAR: AvatarType = {
  ...defaultTheme.avatar,
};

export const BUTTON: ButtonType = {
  ...defaultTheme.button,
  horizontalPadding: "1rem",
};

export const BREAKPOINT: BreakPointType = {
  ...defaultTheme.breakpoint,
};

export const TOKEN_COLORS: TokenColorsType = {
  ...defaultTheme.tokenColors,
  bbPurple: "#501e70",
  bbLightGreen: "#92ddcb",
  bbGreen: "#26bb98",
  bbPastelGreen: "#d4f1ea",
  bbPink: "#d81272",
  bbBlue: "#009ed1",
  bbTeal: "#005e85",
  bbYellow: "#e4b50b",
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

  loaderColor1: TOKEN_COLORS.bbPurple,
  loaderColor2: TOKEN_COLORS.bbLightGreen,
  loaderColor3: TOKEN_COLORS.bbPink,

  paginationText: TOKEN_COLORS.bbPurple,
  paginationBackground: TOKEN_COLORS.bbPurple,

  totaliserBubbleColor: TOKEN_COLORS.bbPurple,
  totaliserBubbleTextColor: TOKEN_COLORS.bbLightGreen,
  totaliserBubbleTotalColor: TOKEN_COLORS.white,

  buttonPrimaryBackground: TOKEN_COLORS.bbPurple,
  buttonPrimaryText: TOKEN_COLORS.white,
  buttonPrimaryBorder: TOKEN_COLORS.bbPurple,
  buttonPrimaryBackgroundHover: TOKEN_COLORS.bbPink,
  buttonPrimaryTextHover: TOKEN_COLORS.white,
  buttonPrimaryBorderHover: TOKEN_COLORS.bbPink,
  buttonPrimaryDisabledBackground: TOKEN_COLORS.grey_300,
  buttonPrimaryDisabledText: TOKEN_COLORS.white,
  buttonPrimaryDisabledBorder: TOKEN_COLORS.grey_300,

  buttonSecondaryBackground: TOKEN_COLORS.white,
  buttonSecondaryText: TOKEN_COLORS.bbPurple,
  buttonSecondaryBorder: TOKEN_COLORS.bbPurple,
  buttonSecondaryBackgroundHover: TOKEN_COLORS.white,
  buttonSecondaryTextHover: TOKEN_COLORS.bbPink,
  buttonSecondaryBorderHover: TOKEN_COLORS.bbPink,
  buttonSecondaryDisabledBackground: TOKEN_COLORS.white,
  buttonSecondaryDisabledText: TOKEN_COLORS.grey_300,
  buttonSecondaryDisabledBorder: TOKEN_COLORS.grey_300,

  buttonTertiaryText: TOKEN_COLORS.bbPurple,
  buttonTertiaryTextHover: TOKEN_COLORS.bbPink,
  buttonTertiaryDisabledText: TOKEN_COLORS.grey_300,
};

export const SPACING: SpacingType = {
  ...defaultTheme.spacing,
};

export const FONT_SIZES: FontSizesType = {
  ...defaultTheme.fontSizes,
};

export const TYPOGRAPHY: TypographyType = {
  ...defaultTheme.typography,
  customFonts: [
    {
      family: "juana-semibold",
      urlWoff: `${SITE_CONFIG.assetPath}fonts/juana-semibold-webfont.woff`,
      urlWoff2: `${SITE_CONFIG.assetPath}fonts/juana-semibold-webfont.woff2`,
    },
  ],
  fontFamilyHeadings: "juana-semibold,Arial,sans-serif",
  // headerLineHeight: "1.5em",
};

const theme: ThemeType = {
  name: "bowelbabe",
  avatar: AVATAR,
  breakpoint: BREAKPOINT,
  button: BUTTON,
  tokenColors: TOKEN_COLORS,
  colors: COLORS,
  spacing: SPACING,
  fontSizes: FONT_SIZES,
  siteConfig: SITE_CONFIG,
  typography: TYPOGRAPHY,
  utilities: UTILITIES,
};

export default theme;