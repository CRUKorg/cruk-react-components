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
  ShadowsType,
  TypographyType,
  ThemeType,
} from "../types";

export const UTILITIES: UtilitiesType = {
  contentMaxWidth: "1020px",
  useDefaultFocusRect: true,
  useDefaultFromControls: false,
  useBackgroundStyleLinks: false,
  inputBorderWidth: "1px",
};

export const SITE_CONFIG: SiteConfigType = {
  assetPath: "https://rcl.assets.cancerresearchuk.org/",
  logoUrl: "/",
  logoAlt: "Cancer Research UK Giving Page",
  logoSrc: "https://rcl.assets.cancerresearchuk.org/images/logos/cruk.svg",
  footerCopyText:
    "Cancer Research UK is a registered charity in England and Wales (1089464), Scotland (SC041666), the Isle of Man (1103) and Jersey (247). A company limited by guarantee. Registered company in England and Wales(4325234) and the Isle of Man (5713F).",
  footerLogoAlt: "Registered with Fundraising Regulator",
  footerLogoSrc:
    "https://rcl.assets.cancerresearchuk.org/images/logos/fundreg.png",
};

export const AVATAR: AvatarType = {
  s: "32px",
  m: "48px",
  l: "64px",
  xl: "128px",
  path: `${SITE_CONFIG.assetPath}images/avatar/cruk2/`,
};

export const BUTTON: ButtonType = {
  borderRadius: "0px",
  borderRadiusLarge: "0px",
  buttonBorderThickness: "2px",
  textDecoration: "none",
  textTransform: "none",
  horizontalPadding: "2em",
};

export const BREAKPOINT: BreakPointType = {
  mobile: "576px",
  tablet: "768px",
  desktop: "992px",
  desktopLarge: "1200px",
};

export const TOKEN_COLORS: TokenColorsType = {
  navy_100: "#E5E5FF",
  navy_600: "#00007E",
  navy_700: "#000066",
  navy_800: "#00004D",

  magenta_100: "#FFE6F3",
  magenta_600: "#FF0087",
  magenta_700: "#E60079",
  magenta_800: "#CC006C",

  cyan_600: "#009CEE",
  cyan_700: "#006DA7",

  grey_100: "#F2F2F2",
  grey_200: "#E6E6E6",
  grey_300: "#c6c6c6", // used for shadows

  grey_600: "#666666",
  grey_800: "#575757",
  grey_900: "#2e2d2c",

  white: "#fff",
  black: "#000",

  red: "#D51311",
  yellow: "#fdc02f",
  green: "#3d854d",
};

export const COLORS: ColorsType = {
  primary: TOKEN_COLORS.navy_600,
  secondary: TOKEN_COLORS.magenta_700,
  tertiary: TOKEN_COLORS.cyan_600,

  textOnPrimary: TOKEN_COLORS.white,
  textOnSecondary: TOKEN_COLORS.white,
  textOnTertiary: TOKEN_COLORS.white,
  textHeaderDefault: TOKEN_COLORS.black,

  disabled: TOKEN_COLORS.grey_200,
  danger: TOKEN_COLORS.red,
  warning: TOKEN_COLORS.yellow,
  success: TOKEN_COLORS.green,
  info: TOKEN_COLORS.cyan_600,
  textError: TOKEN_COLORS.red,

  textDark: TOKEN_COLORS.black,
  textLight: TOKEN_COLORS.white,
  linkColor: TOKEN_COLORS.magenta_700,
  linkColorHover: TOKEN_COLORS.magenta_800,
  linkColorSecondary: TOKEN_COLORS.magenta_700,
  linkColorSecondaryHover: TOKEN_COLORS.magenta_800,

  progressBar: TOKEN_COLORS.navy_600,
  progressBarSecondary: TOKEN_COLORS.magenta_700,
  progressBarBackground: TOKEN_COLORS.grey_200,
  circularProgress: TOKEN_COLORS.cyan_600,
  circularProgressSecondary: TOKEN_COLORS.magenta_700,
  circularProgressBackground: TOKEN_COLORS.grey_200,

  buttonPrimaryBackground: TOKEN_COLORS.magenta_700,
  buttonPrimaryText: TOKEN_COLORS.white,
  buttonPrimaryBorder: TOKEN_COLORS.magenta_700,
  buttonPrimaryBackgroundHover: TOKEN_COLORS.magenta_800,
  buttonPrimaryTextHover: TOKEN_COLORS.white,
  buttonPrimaryBorderHover: TOKEN_COLORS.magenta_800,
  buttonPrimaryDisabledBackground: TOKEN_COLORS.grey_200,
  buttonPrimaryDisabledText: TOKEN_COLORS.grey_600,
  buttonPrimaryDisabledBorder: TOKEN_COLORS.grey_200,

  buttonSecondaryBackground: TOKEN_COLORS.white,
  buttonSecondaryText: TOKEN_COLORS.magenta_700,
  buttonSecondaryBorder: TOKEN_COLORS.magenta_700,
  buttonSecondaryBackgroundHover: TOKEN_COLORS.magenta_100,
  buttonSecondaryTextHover: TOKEN_COLORS.magenta_700,
  buttonSecondaryBorderHover: TOKEN_COLORS.magenta_100,
  buttonSecondaryDisabledBackground: TOKEN_COLORS.grey_200,
  buttonSecondaryDisabledText: TOKEN_COLORS.grey_600,
  buttonSecondaryDisabledBorder: TOKEN_COLORS.grey_200,

  buttonTertiaryText: TOKEN_COLORS.magenta_700,
  buttonTertiaryTextHover: TOKEN_COLORS.magenta_800,
  buttonTertiaryDisabledText: TOKEN_COLORS.grey_600,

  collapseHeaderColor: TOKEN_COLORS.navy_600,

  selectionBorder: TOKEN_COLORS.grey_600,

  textInputBorder: TOKEN_COLORS.grey_900,
  inputBorder: TOKEN_COLORS.grey_900,
  check: TOKEN_COLORS.magenta_700,

  headerBackground: TOKEN_COLORS.white,
  backgroundLight: TOKEN_COLORS.white,
  backgroundLightColor: TOKEN_COLORS.navy_100,
  backgroundMid: TOKEN_COLORS.grey_200,
  backgroundMidLight: TOKEN_COLORS.grey_100,

  loaderColor1: TOKEN_COLORS.navy_600,
  loaderColor2: TOKEN_COLORS.magenta_600,
  loaderColor3: TOKEN_COLORS.cyan_600,

  paginationText: TOKEN_COLORS.navy_600,
  paginationActive: TOKEN_COLORS.grey_200,
  paginationBackground: TOKEN_COLORS.navy_600,

  footerBackground: TOKEN_COLORS.backgroundLight,

  headerBorder: TOKEN_COLORS.grey_200,
  headerTaglineText: TOKEN_COLORS.black,

  stepBorder: TOKEN_COLORS.grey_200,
  stepBackground: TOKEN_COLORS.white,

  popoverBackground: TOKEN_COLORS.white,

  textInputExtraInfo: TOKEN_COLORS.grey_200,

  totaliserBubbleColor: TOKEN_COLORS.grey_200,
  totaliserBubbleTextColor: TOKEN_COLORS.black,
  totaliserBubbleTotalColor: TOKEN_COLORS.navy_600,

  selectBackground: TOKEN_COLORS.black,

  modalBackdrop: TOKEN_COLORS.black,

  userBlockExtraText: TOKEN_COLORS.grey_800,
};

// TODO: possibly convert to REMS, once a base font size has been agreed.
export const SPACING: SpacingType = {
  none: "0",
  auto: "auto",
  xxs: "0.5rem", // 8px
  xs: "1rem", // 16px
  s: "1.5rem", // 24px
  m: "2rem", // 32px
  l: "2.5rem", // 40px
  xl: "3rem", // 48px
  xxl: "3.5rem", // 56px
};

export const FONT_SIZES: FontSizesType = {
  xs: "0.75rem", // 12px
  s: "0.875rem", // 14px
  m: "1rem", // 16px
  l: "1.25rem", // 20px
  xl: "1.5625rem", // 25px
  xxl: "2rem", // 32px
  xxxl: "2.5rem", // 40px
  xxxxl: "3.125rem", // 45px
};

export const TYPOGRAPHY: TypographyType = {
  customFonts: [
    {
      family: "Progress",
      urlWoff: `${SITE_CONFIG.assetPath}fonts/Progress-Regular.woff`,
      fontWeight: 400,
    },
    {
      family: "Poppins",
      urlWoff: `${SITE_CONFIG.assetPath}fonts/Poppins-Light.woff`,
      fontWeight: 300,
    },
    {
      family: "Poppins",
      urlWoff: `${SITE_CONFIG.assetPath}fonts/Poppins-Regular.woff2`,
      fontWeight: 400,
    },
    {
      family: "Poppins",
      urlWoff: `${SITE_CONFIG.assetPath}fonts/Poppins-SemiBold.woff2`,
      fontWeight: 600,
    },
    {
      family: "Poppins",
      urlWoff: `${SITE_CONFIG.assetPath}fonts/Poppins-Medium.woff`,
      fontWeight: 500,
    },
  ],
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
  fontWeightLabels: 400,
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

export const SHADOWS: ShadowsType = {
  s: `0px 0px 2px 1px ${TOKEN_COLORS.grey_300}`,
  m: `0px 0px 4px 1px ${TOKEN_COLORS.grey_300}`,
  l: `0px 0px 7px 1px ${TOKEN_COLORS.grey_300}`,
};

const theme: ThemeType = {
  name: "cruk",
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
