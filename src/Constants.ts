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

export const COLORS: { [key: string]: string } = {
  primary: 'hsl(260, 100%, 27%)', // #2e008b
  primaryHover: '#ec008c',
  secondary: '#ec008c',
  secondaryHover: '#ff20a4',
  tertiary: '#00b6ed',
  tertiaryHover: '#21cbff',
  grayVLight: '#fafafa',
  grayLight: '#e3e3e3',
  grayMedium: '#c7c7c7',
  gray: '#c8c9c7',
  disabled: '#999',
  grayDark: '#666',
  grayDarker: '#333',
  white: '#fff',
  black: '#000',
  danger: '#ef5350',
  warning: '#fdc02f',
  success: '#8bc34a',
  info: '#00b6ed',
  bodyBg: 'white',
  textError: '#ef5350',
  linkColor: '#2e008b',
  linkColorHover: '#ec008c',
  progressBar: '#ec008c',
  progressBarBg: '#f5f5f5',
  circularProgress: '#00b6ed',
  circularProgressBg: '#c8c9c7',
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
  borderColor: COLORS.gray,
  lineHeight: '1.5',
  lineHeightLarge: '2',
  rhythmBase: '15px',
  rhythmVerticalBase: '15px',
  rhythmHorizontalBase: '15px',
  contentMaxWidth: '1020px',
  spacingBase: '5px',
  spacingUnit: 5,
};
