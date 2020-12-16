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
} from '../types';

import defaultTheme from './cruk';

export const UTILITIES: UtilitiesType = {
  ...defaultTheme.utilities,
  borderRadius: 'unset',
};

export const SITE_CONFIG: SiteConfigType = {
  ...defaultTheme.siteConfig,
  logoSrc:
    'https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/images/su2c-logo.png',
};

export const AVATAR: AvatarType = {
  ...defaultTheme.avatar,
  path:
    'https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/images/icon-avatars/su2c/',
};

export const BUTTON: ButtonType = {
  ...defaultTheme.button,
  borderRadius: '1.5rem',
  textDecoration: 'underline',
  textTransform: 'uppercase',
};

export const BREAKPOINT: BreakPointType = {
  ...defaultTheme.breakpoint,
};

export const TOKEN_COLORS: TokenColorsType = {
  ...defaultTheme.tokenColors,
  su2cOrange: '#ee5a04',
  su2cOrangeLight: '#f67d12',
  su2cBlack: '#000',
  su2cRed: '#eb2f24',
};

export const COLORS: ColorsType = {
  ...defaultTheme.colors,
  primary: TOKEN_COLORS.su2cOrange,
  secondary: TOKEN_COLORS.su2cOrange,
  tertiary: TOKEN_COLORS.su2cBlack,

  progressBar: TOKEN_COLORS.su2cOrange,
  circularProgress: TOKEN_COLORS.su2cOrangeLight,
  linkColor: TOKEN_COLORS.su2cOrange,
  linkColorHover: TOKEN_COLORS.su2cOrange,

  buttonPrimaryBackground: TOKEN_COLORS.white,
  buttonPrimaryText: TOKEN_COLORS.su2cOrange,
  buttonPrimaryBorder: TOKEN_COLORS.grey_500,
  buttonPrimaryBackgroundHover: TOKEN_COLORS.white,
  buttonPrimaryTextHover: TOKEN_COLORS.su2cOrange,
  buttonPrimaryBorderHover: TOKEN_COLORS.grey_500,
  buttonPrimaryDisabledBackground: TOKEN_COLORS.white,
  buttonPrimaryDisabledText: TOKEN_COLORS.grey_300,
  buttonPrimaryDisabledBorder: TOKEN_COLORS.grey_300,

  buttonSecondaryBackground: TOKEN_COLORS.su2cOrange,
  buttonSecondaryText: TOKEN_COLORS.white,
  buttonSecondaryBorder: TOKEN_COLORS.su2cOrange,
  buttonSecondaryBackgroundHover: TOKEN_COLORS.su2cOrangeLight,
  buttonSecondaryTextHover: TOKEN_COLORS.white,
  buttonSecondaryBorderHover: TOKEN_COLORS.su2cOrangeLight,
  buttonSecondaryDisabledBackground: TOKEN_COLORS.grey_300,
  buttonSecondaryDisabledText: TOKEN_COLORS.white,
  buttonSecondaryDisabledBorder: TOKEN_COLORS.grey_300,

  buttonTertiaryBackground: TOKEN_COLORS.su2cBlack,
  buttonTertiaryText: TOKEN_COLORS.white,
  buttonTertiaryBorder: TOKEN_COLORS.grey_500,
  buttonTertiaryBackgroundHover: TOKEN_COLORS.su2cRed,
  buttonTertiaryTextHover: TOKEN_COLORS.white,
  buttonTertiaryBorderHover: TOKEN_COLORS.su2cRed,
  buttonTertiaryDisabledBackground: TOKEN_COLORS.grey_300,
  buttonTertiaryDisabledText: TOKEN_COLORS.white,
  buttonTertiaryDisabledBorder: TOKEN_COLORS.grey_300,
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
      family: 'itc_avant_garde_pro_mdbold',
      // TODO push this to cdn.
      url: 'http://crukorg.github.io/SU2C-drupal/assets/fonts/su2c/itc_-_itcavantgardepro-bold-webfont',
    },
  ],
  fontFamilyHeadings: 'itc_avant_garde_pro_mdbold,Arial,sans-serif',
  linkTextDecoration: 'underline',
  headerLineHeight: '1.5em',
};

const theme: ThemeType = {
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
