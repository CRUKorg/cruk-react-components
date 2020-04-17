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

export const UTILITIES: UtilitiesType = {
  borderRadius: '3px',
  contentMaxWidth: '1020px',
  useDefaultFocusRect: false,
  useDefaultFromControls: true,
};

export const SITE_CONFIG: SiteConfigType = {
  cdnPath: 'https://ccp-s3.int.cruk.org/',
  assetPath: 'https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/',
  siteUrl: 'https://fundraise.cancerresearchuk.org/',
  logoUrl: '/',
  logoAlt: 'Cancer Research UK Giving Page',
  logoSrc: 'https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/logo.png',
};

export const AVATAR: AvatarType = {
  small: '35px',
  medium: '50px',
  large: '60px',
  extraLarge: '90px',
  path: `${SITE_CONFIG.assetPath}images/icon-avatars/`,
};

export const BUTTON: ButtonType = {
  borderRadius: UTILITIES.borderRadius,
  textDecoration: 'none',
  textTransform: 'none',
};

export const BREAKPOINT: BreakPointType = {
  mobile: '576px',
  tablet: '768px',
  desktop: '992px',
  desktopLarge: '1200px',
};

export const TOKEN_COLORS: TokenColorsType = {
  darkBlue_500: '#2e008b',
  magenta_500: '#ec008c',
  magenta_800: '#BB0071',
  magenta_900: '#710044',
  cyan_500: '#00b6ed',
  cyan_900: '#005870',

  grey_100: '#f5f5f5',
  grey_200: '#ededed',
  grey_300: '#c6c6c6',
  grey_500: '#9A9A9A',
  grey_800: '#575757',
  grey_900: '#2e2d2c',

  white: '#fff',
  black: '#000',

  red: '#e61616',
  yellow: '#fdc02f',
  green: '#3d854d',
};

export const COLORS: ColorsType = {
  primary: TOKEN_COLORS.darkBlue_500,
  primaryHover: TOKEN_COLORS.magenta_500,
  secondary: TOKEN_COLORS.magenta_500,
  secondaryHover: TOKEN_COLORS.magenta_900,
  tertiary: TOKEN_COLORS.cyan_500,
  tertiaryHover: TOKEN_COLORS.cyan_900,

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

  progressBar: TOKEN_COLORS.magenta_500,
  progressBarBackground: TOKEN_COLORS.grey_200,
  circularProgress: TOKEN_COLORS.cyan_500,
  circularProgressBackground: TOKEN_COLORS.grey_300,

  buttonBorder: TOKEN_COLORS.grey_500,
  radioBorder: TOKEN_COLORS.grey_500,
  inputBorder: TOKEN_COLORS.grey_300,

  headerBackground: TOKEN_COLORS.white,
  lightBackground: TOKEN_COLORS.white,
  midBackground: TOKEN_COLORS.grey_100,

  paginationActive: TOKEN_COLORS.grey_300,

  footerBackground: TOKEN_COLORS.grey_200,

  headerBorder: TOKEN_COLORS.grey_300,

  stepBorder: TOKEN_COLORS.grey_300,
  stepBackground: TOKEN_COLORS.white,

  popoverBackground: TOKEN_COLORS.white,

  textInputExtraInfo: TOKEN_COLORS.grey_200,

  totaliserBorder: TOKEN_COLORS.grey_300,

  textInputBorder: TOKEN_COLORS.grey_300,

  selectBackground: TOKEN_COLORS.grey_900,

  modalBackdrop: TOKEN_COLORS.grey_900,

  userBlockExtraText: TOKEN_COLORS.grey_800,
};

// TODO: possibly convert to REMS, once a base font size has been agreed.
export const SPACING: SpacingType = {
  none: '0',
  auto: 'auto',
  extraExtraSmall: '0.5rem', // 8px
  extraSmall: '1rem', // 16px
  small: '1.5rem', // 24px
  medium: '2rem', // 32px
  large: '2.5rem', // 40px
  extraLarge: '3rem', // 48px
  extraExtraLarge: '3.5rem', // 56px
};

export const FONT_SIZES: FontSizesType = {
  extraSmall: '0.75rem', // 12px
  small: '0.857rem', // 14px
  medium: '1em', // 16px
  large: '1.25rem', // 20px
  extraLarge: '1.5625rem', // 25px
  extraExtraLarge: '1.9375rem', // 31px
  extraExtraExtraLarge: '2.4375rem', // 39px
  extraExtraExtraExtraLarge: '3.0625rem', // 49px
};

export const TYPOGRAPHY: TypographyType = {
  customFonts: [
    {
      family: 'MuseoSans-500',
      url: 'https://ccp-s3.int.cruk.org/fonts/MuseoSansRounded-500',
    },
  ],
  fontUrl: `${SITE_CONFIG.cdnPath}fonts`,
  fontFamilyBase: 'Arial, Calibri, nimbussansl, liberationsans, freesans, clean, sans-serif',
  fontFamilyHeadings: 'MuseoSans-500,Calibri,Arial,sans-serif',
  fontSizeBase: '16px',
  fontWeightHeavy: '700',
  fontWeightMedium: '500', // default
  fontWeightLight: '300',
  fontWeightVLight: '100',
  linkTextDecoration: 'underline',
  lineHeight: '1.5',
  lineHeightLarge: '2',
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
