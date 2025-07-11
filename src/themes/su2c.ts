import {
  type UtilitiesType,
  type SiteConfigType,
  type AvatarType,
  type ButtonType,
  type BreakPointType,
  type TokenColorsType,
  type ColorsType,
  type SpacingType,
  type FontSizesType,
  type TypographyType,
  type ThemeType,
  type ShadowsType,
} from "../types";

import { crukTheme as defaultTheme } from "./cruk";

export const UTILITIES: UtilitiesType = {
  ...defaultTheme.utilities,
  useBackgroundStyleLinks: true,
};

export const SITE_CONFIG: SiteConfigType = {
  ...defaultTheme.siteConfig,
  logoSrc: "https://rcl.assets.cancerresearchuk.org/images/logos/su2c-160.png",
  footerCopyText:
    "Stand Up To Cancer and Stand Up To Cancer Brand Marks are registered trademarks of the Entertainment Industry Foundation. Cancer Research UK is a registered charity in England and Wales (1089464), Scotland(SC041666), the Isle of Man (1103) and Jersey (247). A company limited by guarantee. Registered company in England and Wales (4325234) and the Isle of Man (5713F). Registered address: 2 Redman Place, London, E20 1JQ. Donations will be made to Cancer Research UK in support of the Stand Up To Cancer campaign.",
};

export const AVATAR: AvatarType = {
  ...defaultTheme.avatar,
  path: `${SITE_CONFIG.assetPath}images/avatar/su2c/`,
};

export const BUTTON: ButtonType = {
  ...defaultTheme.button,
  borderRadius: "1.5rem",
  borderRadiusLarge: "2rem",
  textTransform: "uppercase",
};

export const BREAKPOINT: BreakPointType = {
  ...defaultTheme.breakpoint,
};

export const TOKEN_COLORS: TokenColorsType = {
  ...defaultTheme.tokenColors,
  su2cOrange5: "#FF8E00",
  su2cOrange3: "#FFB04D",
  su2cOrange2: "#FFDAAD",
  su2cOrange1: "#FFF6EB",
  su2cBlack: "#231F20",
  su2cGrey1: "#555759",
  su2cGrey2: "#A5A5A9",
  su2cRed: "#EF4135",
  su2cYellow: "#FFC325",
};

export const COLORS: ColorsType = {
  ...defaultTheme.colors,
  primary: TOKEN_COLORS.su2cOrange5,
  secondary: TOKEN_COLORS.su2cOrange5,
  tertiary: TOKEN_COLORS.su2cBlack,
  textHeaderDefault: TOKEN_COLORS.su2cBlack,

  textOnPrimary: TOKEN_COLORS.su2cBlack,
  textOnSecondary: TOKEN_COLORS.su2cBlack,

  avatarBorder: TOKEN_COLORS.su2cBlack,
  progressBar: TOKEN_COLORS.su2cOrange5,
  progressBarSecondary: TOKEN_COLORS.su2cRed,
  circularProgress: TOKEN_COLORS.su2cOrange3,
  circularProgressSecondary: TOKEN_COLORS.su2cRed,
  linkColor: TOKEN_COLORS.su2cOrange5,
  linkColorHover: TOKEN_COLORS.su2cRed,
  linkColorSecondary: TOKEN_COLORS.su2cOrange5,
  linkColorSecondaryHover: TOKEN_COLORS.su2cRed,

  backgroundLightColor: TOKEN_COLORS.su2cOrange2,

  loaderColor1: TOKEN_COLORS.su2cOrange5,
  loaderColor2: TOKEN_COLORS.su2cRed,
  loaderColor3: TOKEN_COLORS.su2cBlack,

  paginationText: TOKEN_COLORS.su2cBlack,
  paginationBackground: TOKEN_COLORS.su2cBlack,

  totaliserBubbleColor: TOKEN_COLORS.su2cBlack,
  totaliserBubbleTextColor: TOKEN_COLORS.white,
  totaliserBubbleTotalColor: TOKEN_COLORS.white,

  collapseHeaderColor: TOKEN_COLORS.su2cOrange5,
  check: TOKEN_COLORS.su2cBlack,

  headerTaglineText: TOKEN_COLORS.su2cBlack,

  buttonPrimaryBackground: TOKEN_COLORS.su2cOrange5,
  buttonPrimaryText: TOKEN_COLORS.su2cBlack,
  buttonPrimaryBorder: TOKEN_COLORS.su2cOrange5,
  buttonPrimaryBackgroundHover: TOKEN_COLORS.su2cOrange3,
  buttonPrimaryTextHover: TOKEN_COLORS.su2cBlack,
  buttonPrimaryBorderHover: TOKEN_COLORS.su2cOrange3,
  buttonPrimaryDisabledBackground: TOKEN_COLORS.grey_200,
  buttonPrimaryDisabledText: TOKEN_COLORS.grey_600,
  buttonPrimaryDisabledBorder: TOKEN_COLORS.grey_200,

  buttonSecondaryBackground: TOKEN_COLORS.white,
  buttonSecondaryText: TOKEN_COLORS.su2cOrange5,
  buttonSecondaryBorder: TOKEN_COLORS.su2cOrange5,
  buttonSecondaryBackgroundHover: TOKEN_COLORS.su2cOrange1,
  buttonSecondaryTextHover: TOKEN_COLORS.su2cOrange5,
  buttonSecondaryBorderHover: TOKEN_COLORS.su2cOrange5,
  buttonSecondaryDisabledBackground: TOKEN_COLORS.white,
  buttonSecondaryDisabledText: TOKEN_COLORS.grey_200,
  buttonSecondaryDisabledBorder: TOKEN_COLORS.grey_200,

  buttonTertiaryText: TOKEN_COLORS.su2cOrange5,
  buttonTertiaryTextHover: TOKEN_COLORS.su2cOrange5,
  buttonTertiaryDisabledText: TOKEN_COLORS.grey_200,
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
      family: "ITCAvantGarde",
      urlWoff: `${SITE_CONFIG.assetPath}fonts/itc_-_itcavantgardepro-bold-webfont.woff`,
      fontWeight: 700,
    },
    {
      family: "ITCAvantGarde",
      urlWoff: `${SITE_CONFIG.assetPath}fonts/ITCAvantGardeStd-Bk.woff`,
      fontWeight: 400,
    },
  ],
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
  fontWeightLabels: 700,
  fontWeightHeadings: 700,
  LinkPrimaryTextDecoration: "none",
  LinkLetterSpacing: "0px",
};

export const su2cTheme: ThemeType = {
  name: "su2c",
  avatar: { ...AVATAR },
  breakpoint: { ...BREAKPOINT },
  button: { ...BUTTON },
  tokenColors: { ...TOKEN_COLORS },
  colors: { ...COLORS },
  spacing: { ...SPACING },
  fontSizes: { ...FONT_SIZES },
  siteConfig: { ...SITE_CONFIG },
  typography: { ...TYPOGRAPHY },
  shadows: { ...SHADOWS },
  utilities: { ...UTILITIES },
};

export default su2cTheme;
