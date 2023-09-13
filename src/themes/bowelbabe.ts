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
  ShadowsType,
} from "../types";

import defaultTheme from "./cruk";

export const UTILITIES: UtilitiesType = {
  ...defaultTheme.utilities,
};

export const SITE_CONFIG: SiteConfigType = {
  ...defaultTheme.siteConfig,
  logoSrc:
    "https://rcl.assets.cancerresearchuk.org/images/logos/bowelbabe-logo-160.png",
  footerCopyText:
    "The Bowelbabe Fund for Cancer Research UK, raises money to fund clinical trials, research and cancer information and awareness, as well as other initiatives to combat cancer and support those affected by cancer. The Bowelbabe Fund is a restricted fund within Cancer Research UK. Cancer Research UK is a registered charity in England and Wales (1089464), Scotland (SC041666), the Isle of Man (1103) and Jersey (247) and is registered with the Fundraising Regulator.",
};

export const AVATAR: AvatarType = {
  ...defaultTheme.avatar,
  path: `${SITE_CONFIG.assetPath}images/avatar/bowelbabe/`,
};

export const BUTTON: ButtonType = {
  ...defaultTheme.button,
  horizontalPadding: "1rem",
  borderRadius: "2em",
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

  buttonPrimaryBackground: TOKEN_COLORS.bbPastelYellow,
  buttonPrimaryText: TOKEN_COLORS.bbPurple,
  buttonPrimaryBorder: TOKEN_COLORS.bbPastelYellow,
  buttonPrimaryBackgroundHover: TOKEN_COLORS.bbPastelPink,
  buttonPrimaryTextHover: TOKEN_COLORS.bbPurple,
  buttonPrimaryBorderHover: TOKEN_COLORS.bbPastelPink,
  buttonPrimaryDisabledBackground: TOKEN_COLORS.grey_300,
  buttonPrimaryDisabledText: TOKEN_COLORS.grey_800,
  buttonPrimaryDisabledBorder: TOKEN_COLORS.grey_300,

  buttonSecondaryBackground: TOKEN_COLORS.white,
  buttonSecondaryText: TOKEN_COLORS.bbPurple,
  buttonSecondaryBorder: TOKEN_COLORS.bbPastelYellow,
  buttonSecondaryBackgroundHover: TOKEN_COLORS.bbPastelPink,
  buttonSecondaryTextHover: TOKEN_COLORS.bbPurple,
  buttonSecondaryBorderHover: TOKEN_COLORS.bbPastelYellow,
  buttonSecondaryDisabledBackground: TOKEN_COLORS.grey_300,
  buttonSecondaryDisabledText: TOKEN_COLORS.grey_800,
  buttonSecondaryDisabledBorder: TOKEN_COLORS.grey_300,

  buttonTertiaryText: TOKEN_COLORS.bbPurple,
  buttonTertiaryTextHover: TOKEN_COLORS.bbPink,
  buttonTertiaryDisabledText: TOKEN_COLORS.grey_300,
};

export const SPACING: SpacingType = {
  ...defaultTheme.spacing,
};

export const SHADOWS: ShadowsType = {
  ...defaultTheme.shadows,
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
  fontFamilyBase:
    "Arial, Calibri, nimbussansl, liberationsans, freesans, clean, sans-serif",
  fontFamilyLabel:
    "Arial, Calibri, nimbussansl, liberationsans, freesans, clean, sans-serif",
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
  shadows: SHADOWS,
  utilities: UTILITIES,
};

export default theme;
