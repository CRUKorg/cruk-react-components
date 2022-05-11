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

export const UTILITIES: UtilitiesType = {
  contentMaxWidth: "1020px",
  useDefaultFocusRect: true,
  useDefaultFromControls: false,
  useBackgroundStyleLinks: false,
  inputBorderWidth: "1px",
};

export const SITE_CONFIG: SiteConfigType = {
  assetPath:
    "https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/",
  logoUrl: "/",
  logoAlt: "Cancer Research UK Giving Page",
  logoSrc:
    "https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/logo.png",
  footerCopyText:
    "Cancer Research UK is a registered charity in England and Wales (1089464), Scotland (SC041666), the Isle of Man (1103) and Jersey (247). A company limited by guarantee. Registered company in England and Wales(4325234) and the Isle of Man (5713F).",
  footerLogoAlt: "Registered with Fundraising Regulator",
  footerLogoSrc:
    "https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/images/fundreg.png",
};

export const AVATAR: AvatarType = {
  s: "35px",
  m: "50px",
  l: "60px",
  xl: "90px",
  path: `${SITE_CONFIG.assetPath}images/icon-avatars/`,
};

export const BUTTON: ButtonType = {
  borderRadius: "4px",
  borderRadiusLarge: "4px",
  buttonBorderThickness: "2px",
  textDecoration: "none",
  textTransform: "none",
};

export const BREAKPOINT: BreakPointType = {
  mobile: "576px",
  tablet: "768px",
  desktop: "992px",
  desktopLarge: "1200px",
};

export const TOKEN_COLORS: TokenColorsType = {
  darkBlue_100: "#edeaf5",
  darkBlue_200: "#dad2ea",
  darkBlue_300: "#a896cf",
  darkBlue_500: "#2e008b",
  magenta_100: "#fdeaf5",
  magenta_500: "#e40087",
  magenta_800: "#BB0071",
  magenta_900: "#710044",
  cyan_500: "#00b6ed",
  cyan_900: "#005870",

  grey_100: "#f5f5f5",
  grey_200: "#ededed",
  grey_300: "#c6c6c6",
  grey_500: "#9A9A9A",
  grey_800: "#575757",
  grey_900: "#2e2d2c",

  white: "#fff",
  black: "#000",

  red: "#D51311",
  yellow: "#fdc02f",
  green: "#3d854d",
};

export const COLORS: ColorsType = {
  primary: TOKEN_COLORS.darkBlue_500,
  secondary: TOKEN_COLORS.magenta_500,
  tertiary: TOKEN_COLORS.cyan_500,

  textOnPrimary: TOKEN_COLORS.white,
  textOnSecondary: TOKEN_COLORS.white,
  textOnTertiary: TOKEN_COLORS.white,

  disabled: TOKEN_COLORS.grey_300,
  danger: TOKEN_COLORS.red,
  warning: TOKEN_COLORS.yellow,
  success: TOKEN_COLORS.green,
  info: TOKEN_COLORS.cyan_500,
  textError: TOKEN_COLORS.red,

  linkColor: TOKEN_COLORS.darkBlue_500,
  linkColorHover: TOKEN_COLORS.magenta_800,
  textDark: TOKEN_COLORS.grey_900,
  textLight: TOKEN_COLORS.white,

  progressBar: TOKEN_COLORS.darkBlue_500,
  progressBarSecondary: TOKEN_COLORS.magenta_500,
  progressBarBackground: TOKEN_COLORS.grey_200,
  circularProgress: TOKEN_COLORS.cyan_500,
  circularProgressSecondary: TOKEN_COLORS.magenta_500,
  circularProgressBackground: TOKEN_COLORS.grey_300,

  buttonPrimaryBackground: TOKEN_COLORS.magenta_500,
  buttonPrimaryText: TOKEN_COLORS.white,
  buttonPrimaryBorder: TOKEN_COLORS.magenta_500,
  buttonPrimaryBackgroundHover: TOKEN_COLORS.magenta_800,
  buttonPrimaryTextHover: TOKEN_COLORS.white,
  buttonPrimaryBorderHover: TOKEN_COLORS.magenta_800,
  buttonPrimaryDisabledBackground: TOKEN_COLORS.grey_100,
  buttonPrimaryDisabledText: TOKEN_COLORS.grey_500,
  buttonPrimaryDisabledBorder: TOKEN_COLORS.grey_100,

  buttonSecondaryBackground: TOKEN_COLORS.white,
  buttonSecondaryText: TOKEN_COLORS.magenta_500,
  buttonSecondaryBorder: TOKEN_COLORS.magenta_500,
  buttonSecondaryBackgroundHover: TOKEN_COLORS.magenta_100,
  buttonSecondaryTextHover: TOKEN_COLORS.magenta_800,
  buttonSecondaryBorderHover: TOKEN_COLORS.magenta_800,
  buttonSecondaryDisabledBackground: TOKEN_COLORS.grey_100,
  buttonSecondaryDisabledText: TOKEN_COLORS.grey_500,
  buttonSecondaryDisabledBorder: TOKEN_COLORS.grey_100,

  buttonTertiaryText: TOKEN_COLORS.magenta_500,
  buttonTertiaryTextHover: TOKEN_COLORS.magenta_800,
  buttonTertiaryDisabledText: TOKEN_COLORS.grey_500,

  selectionBorder: TOKEN_COLORS.grey_500,

  textInputBorder: TOKEN_COLORS.grey_900,
  inputBorder: TOKEN_COLORS.grey_900,

  headerBackground: TOKEN_COLORS.white,
  backgroundLight: TOKEN_COLORS.white,
  backgroundLightColor: TOKEN_COLORS.darkBlue_200,
  backgroundMid: TOKEN_COLORS.grey_100,

  loaderColor1: TOKEN_COLORS.darkBlue_500,
  loaderColor2: TOKEN_COLORS.magenta_500,
  loaderColor3: TOKEN_COLORS.cyan_500,

  paginationText: TOKEN_COLORS.darkBlue_500,
  paginationActive: TOKEN_COLORS.grey_300,
  paginationBackground: TOKEN_COLORS.darkBlue_500,

  footerBackground: TOKEN_COLORS.grey_200,

  headerBorder: TOKEN_COLORS.grey_300,

  stepBorder: TOKEN_COLORS.grey_300,
  stepBackground: TOKEN_COLORS.white,

  popoverBackground: TOKEN_COLORS.white,

  textInputExtraInfo: TOKEN_COLORS.grey_200,

  totaliserBubbleColor: TOKEN_COLORS.grey_200,
  totaliserBubbleTextColor: TOKEN_COLORS.grey_900,
  totaliserBubbleTotalColor: TOKEN_COLORS.darkBlue_500,

  selectBackground: TOKEN_COLORS.grey_900,

  modalBackdrop: TOKEN_COLORS.grey_900,

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
      family: "MuseoSans-500",
      url: "https://ccp-s3.int.cruk.org/fonts/MuseoSansRounded-500",
    },
  ],
  fontFamilyBase:
    "Arial, Calibri, nimbussansl, liberationsans, freesans, clean, sans-serif",
  fontFamilyHeadings: "MuseoSans-500,Calibri,Arial,sans-serif",
  fontSizeBase: "16px",
  fontWeightHeavy: "700",
  fontWeightMedium: "500", // default heading
  fontWeightNormal: "400", // default body
  fontWeightLight: "300",
  fontWeightVLight: "100",
  linkTextDecoration: "underline",
  lineHeight: "1.5em",
  headerLineHeight: "1.25em",
  headerTextTransform: "none",
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
  utilities: UTILITIES,
};

export default theme;
