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
} from './types';

import defaultTheme from './cruk';

export const UTILITIES: UtilitiesType = {
  ...defaultTheme.utilities,
  borderRadius: 'unset',
};

export const SITECONFIG: SiteConfigType = {
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
  primaryHover: TOKEN_COLORS.su2cOrangeLight,
  secondary: TOKEN_COLORS.su2cOrange,
  secondaryHover: TOKEN_COLORS.su2cOrangeLight,
  tertiary: TOKEN_COLORS.su2cBlack,
  tertiaryHover: TOKEN_COLORS.su2cRed,
  progressBar: TOKEN_COLORS.su2cOrange,
  circularProgress: TOKEN_COLORS.su2cOrangeLight,
  linkColor: TOKEN_COLORS.su2cOrange,
  linkColorHover: TOKEN_COLORS.su2cOrange,
};

// TODO: possibly convert to REMS, once a base font size has been agreed.
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
};

const theme: ThemeType = {
  avatar: AVATAR,
  breakpoint: BREAKPOINT,
  button: BUTTON,
  tokenColors: TOKEN_COLORS,
  colors: COLORS,
  spacing: SPACING,
  fontSizes: FONT_SIZES,
  siteConfig: SITECONFIG,
  typography: TYPOGRAPHY,
  utilities: UTILITIES,
};

export default theme;
