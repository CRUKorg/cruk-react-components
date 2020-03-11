export const SITECONFIG = {
  cdnPath: 'https://ccp-s3.int.cruk.org/',
  assetPath: 'https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/',
  siteSlogan: 'Together we will beat cancer',
  siteUrl: 'https://fundraise.cancerresearchuk.org/',
  logoUrl: '/',
  logoAlt: 'Cancer Research UK Giving Page',
  logoSrc: 'https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/logo.png',
};

// TODO: should this be in shared constants it feels pretty specific to avatar
export const AVATAR = {
  small: '35px',
  medium: '50px',
  large: '60px',
  xlarge: '90px',
  path: `${SITECONFIG.assetPath}images/icon-avatars/`,
};

export const BREAKPOINT = {
  mobile: '576px',
  tablet: '768px',
  desktop: '992px',
  desktopLarge: '1200px',
};

export const TOKEN_COLORS: { [key: string]: string } = {
  blue: '#2e008b',
  magenta: '#ec008c',
  magentaLight: '#ff20a4',
  cyan: '#00b6ed',
  cyanLight: '#21cbff',
  grayLightest: '#f5f5f5',
  grayVLight: '#fafafa',
  grayLight: '#e3e3e3',
  grayMedium: '#c7c7c7',
  gray: '#c8c9c7',
  grayDark: '#666',
  grayDarkMedium: '#999',
  grayDarker: '#333',
  white: '#fff',
  black: '#000',
  red: '#ef5350',
  yellow: '#fdc02f',
  green: '#8bc34a',
};

export const COLORS: { [key: string]: string } = {
  primary: TOKEN_COLORS.blue,
  primaryHover: TOKEN_COLORS.magenta,
  secondary: TOKEN_COLORS.magenta,
  secondaryHover: TOKEN_COLORS.magentaLight,
  tertiary: TOKEN_COLORS.cyan,
  tertiaryHover: TOKEN_COLORS.cyanLight,

  disabled: TOKEN_COLORS.grayDarkMedium,
  danger: TOKEN_COLORS.red,
  warning: TOKEN_COLORS.yellow,
  success: TOKEN_COLORS.green,
  info: TOKEN_COLORS.cyan,
  textError: TOKEN_COLORS.red,

  linkColor: TOKEN_COLORS.blue,
  linkColorHover: TOKEN_COLORS.magenta,

  progressBar: TOKEN_COLORS.magenta,
  progressBarBg: TOKEN_COLORS.grayLightest,
  circularProgress: TOKEN_COLORS.cyan,
  circularProgressBg: TOKEN_COLORS.gray,

  headerBg: TOKEN_COLORS.white,
  bodyBg: TOKEN_COLORS.white,
  textDark: TOKEN_COLORS.grayDarker,
  textLight: TOKEN_COLORS.white,

  boxBorder: TOKEN_COLORS.grayLight,

  paginationActive: TOKEN_COLORS.grayLight,
  paginationDisabled: TOKEN_COLORS.grayLight,

  footerBg: TOKEN_COLORS.grayLight,

  headerBorder: TOKEN_COLORS.grayLight,

  stepBorder: TOKEN_COLORS.grayLight,
  stepBg: TOKEN_COLORS.white,

  popoverBg: TOKEN_COLORS.white,

  textInputBorder: TOKEN_COLORS.grayLight,

  totaliserBorder: TOKEN_COLORS.grayMedium,

  buttonBorder: TOKEN_COLORS.gray,
  buttonDisabled: TOKEN_COLORS.gray,

  checkboxBorder: TOKEN_COLORS.gray,

  radioLabelBorder: TOKEN_COLORS.gray,

  inputBorder: TOKEN_COLORS.gray,

  selectBackground: TOKEN_COLORS.grayDarker,

  modalBackdrop: TOKEN_COLORS.grayDarker,

  userBlockExtraText: TOKEN_COLORS.grayDark,
};

// TODO: possibly convert to REMS, once a base font size has been agreed.
export const SPACING = {
  extraExtraSmall: '8px',
  extraSmall: '16px',
  small: '24px',
  medium: '32px',
  large: '40px',
  extraLarge: '48px',
  extraExtraLarge: '56px',
};

export type FontSizeType =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'
  | 'extraExtraLarge'
  | 'extraExtraExtraLarge';

export const FONT_SIZES: { [key: string]: string } = {
  extraSmall: '0.75rem', // 12px
  small: '0.857rem', // 14px
  medium: '1em', // 16px
  large: '1.125rem', // 18px
  extraLarge: '1.4375rem', // 23px
  extraExtraLarge: '2rem', // 32px
  extraExtraExtraLarge: '3.125rem', // 50px
};

export const TYPOGRAPHY = {
  customFonts: [
    {
      family: 'MuseoSans-500',
      url: 'https://ccp-s3.int.cruk.org/fonts/MuseoSansRounded-500',
    },
  ],
  fontUrl: `${SITECONFIG.cdnPath}fonts`,
  fontFamilyBase: 'Arial, Calibri, nimbussansl, liberationsans, freesans, clean, sans-serif',
  fontFamilyHeadings: 'MuseoSans-500,Calibri,Arial,sans-serif',
  fontSizeBase: '16px',
  fontWeightHeavy: '700',
  fontWeightMedium: '500', // default
  fontWeightLight: '300',
  fontWeightVLight: '100',
  linkTextDecoration: 'none',
};

export const UTILITIES = {
  borderRadius: '3px',
  lineHeight: '1.5',
  lineHeightLarge: '2',
  rhythmBase: '15px',
  rhythmVerticalBase: '15px',
  rhythmHorizontalBase: '15px',
  contentMaxWidth: '1020px',
  spacingBase: '5px',
  spacingUnit: 5,
};
