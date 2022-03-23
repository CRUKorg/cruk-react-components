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
  useBackgroundStyleLinks: true,
};

export const SITE_CONFIG: SiteConfigType = {
  ...defaultTheme.siteConfig,
  logoSrc:
    "https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/images/su2c-logo.png",
  footerCopyText:
    "Stand Up To Cancer and Stand Up To Cancer Brand Marks are registered trademarks of the Entertainment Industry Foundation. Cancer Research UK is a registered charity in England and Wales (1089464), Scotland(SC041666), the Isle of Man (1103) and Jersey (247). A company limited by guarantee. Registered company in England and Wales (4325234) and the Isle of Man (5713F). Registered address: 2 Redman Place, London, E20 1JQ. Donations will be made to Cancer Research UK in support of the Stand Up To Cancer campaign.",
};

export const AVATAR: AvatarType = {
  ...defaultTheme.avatar,
  path: "https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/images/icon-avatars/su2c/",
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

  textOnPrimary: TOKEN_COLORS.su2cBlack,

  progressBar: TOKEN_COLORS.su2cOrange5,
  progressBarSecondary: TOKEN_COLORS.su2cRed,
  circularProgress: TOKEN_COLORS.su2cOrange3,
  circularProgressSecondary: TOKEN_COLORS.su2cRed,
  linkColor: TOKEN_COLORS.su2cOrange5,
  linkColorHover: TOKEN_COLORS.su2cRed,

  backgroundLightColor: TOKEN_COLORS.su2cOrange2,

  loaderColor1: TOKEN_COLORS.su2cOrange5,
  loaderColor2: TOKEN_COLORS.su2cRed,
  loaderColor3: TOKEN_COLORS.su2cBlack,

  paginationText: TOKEN_COLORS.su2cBlack,
  paginationBackground: TOKEN_COLORS.su2cBlack,

  totaliserBubbleColor: TOKEN_COLORS.su2cBlack,
  totaliserBubbleTextColor: TOKEN_COLORS.white,
  totaliserBubbleTotalColor: TOKEN_COLORS.white,

  buttonPrimaryBackground: TOKEN_COLORS.su2cOrange5,
  buttonPrimaryText: TOKEN_COLORS.su2cBlack,
  buttonPrimaryBorder: TOKEN_COLORS.su2cOrange5,
  buttonPrimaryBackgroundHover: TOKEN_COLORS.su2cOrange3,
  buttonPrimaryTextHover: TOKEN_COLORS.su2cBlack,
  buttonPrimaryBorderHover: TOKEN_COLORS.su2cOrange3,
  buttonPrimaryDisabledBackground: TOKEN_COLORS.grey_300,
  buttonPrimaryDisabledText: TOKEN_COLORS.white,
  buttonPrimaryDisabledBorder: TOKEN_COLORS.grey_300,

  buttonSecondaryBackground: TOKEN_COLORS.white,
  buttonSecondaryText: TOKEN_COLORS.su2cOrange5,
  buttonSecondaryBorder: TOKEN_COLORS.su2cOrange5,
  buttonSecondaryBackgroundHover: TOKEN_COLORS.su2cOrange1,
  buttonSecondaryTextHover: TOKEN_COLORS.su2cOrange5,
  buttonSecondaryBorderHover: TOKEN_COLORS.su2cOrange5,
  buttonSecondaryDisabledBackground: TOKEN_COLORS.white,
  buttonSecondaryDisabledText: TOKEN_COLORS.grey_300,
  buttonSecondaryDisabledBorder: TOKEN_COLORS.grey_300,

  buttonTertiaryText: TOKEN_COLORS.su2cOrange5,
  buttonTertiaryTextHover: TOKEN_COLORS.su2cOrange5,
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
      family: "itc_avant_garde_pro_mdbold",
      // TODO push this to cdn.
      url: "https://crukorg.github.io/SU2C-drupal/assets/fonts/su2c/itc_-_itcavantgardepro-bold-webfont",
    },
  ],
  fontFamilyHeadings: "itc_avant_garde_pro_mdbold,Arial,sans-serif",
  linkTextDecoration: "none",
  headerLineHeight: "1.5em",
  headerTextTransform: "uppercase",
};

const theme: ThemeType = {
  name: "su2c",
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
