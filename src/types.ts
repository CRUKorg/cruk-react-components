export type FontSizeType = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';

export type FontSizesType = { [key in FontSizeType]: string };

export type UtilitiesType = {
  borderRadius: string;
  contentMaxWidth: string;
  useDefaultFocusRect: boolean;
  useDefaultFromControls: boolean;
  inputBorderWidth: string;
};

export type SiteConfigType = {
  cdnPath: string;
  assetPath: string;
  logoUrl: string;
  logoAlt: string;
  logoSrc: string;
};

export type AvatarType = {
  s: string;
  m: string;
  l: string;
  xl: string;
  path: string;
};

export type ButtonType = {
  borderRadius: string;
  borderRadiusLarge: string;
  buttonBorderThickness: string;
  textDecoration: string;
  textTransform: string;
};

export type BreakPointType = {
  mobile: string;
  tablet: string;
  desktop: string;
  desktopLarge: string;
};

export type TokenColorsType = { [key: string]: string };

export type ColorsType = {
  primary: string;
  secondary: string;
  tertiary: string;

  disabled: string;
  danger: string;
  warning: string;
  success: string;
  info: string;
  textError: string;

  linkColor: string;
  linkColorHover: string;
  textDark: string;
  textLight: string;

  progressBar: string;
  progressBarBackground: string;
  circularProgress: string;
  circularProgressBackground: string;

  buttonPrimaryBackground: string;
  buttonPrimaryText: string;
  buttonPrimaryBorder: string;
  buttonPrimaryBackgroundHover: string;
  buttonPrimaryTextHover: string;
  buttonPrimaryBorderHover: string;
  buttonPrimaryDisabledBackground: string;
  buttonPrimaryDisabledText: string;
  buttonPrimaryDisabledBorder: string;

  buttonSecondaryBackground: string;
  buttonSecondaryText: string;
  buttonSecondaryBorder: string;
  buttonSecondaryBackgroundHover: string;
  buttonSecondaryTextHover: string;
  buttonSecondaryBorderHover: string;
  buttonSecondaryDisabledBackground: string;
  buttonSecondaryDisabledText: string;
  buttonSecondaryDisabledBorder: string;

  buttonTertiaryBackground: string;
  buttonTertiaryText: string;
  buttonTertiaryBorder: string;
  buttonTertiaryBackgroundHover: string;
  buttonTertiaryTextHover: string;
  buttonTertiaryBorderHover: string;
  buttonTertiaryDisabledBackground: string;
  buttonTertiaryDisabledText: string;
  buttonTertiaryDisabledBorder: string;

  selectionBorder: string;
  inputBorder: string;

  headerBackground: string;
  backgroundLight: string;
  backgroundMid: string;

  paginationActive: string;

  footerBackground: string;

  headerBorder: string;

  stepBorder: string;
  stepBackground: string;

  popoverBackground: string;

  textInputExtraInfo: string;

  totaliserBorder: string;

  textInputBorder: string;

  selectBackground: string;

  modalBackdrop: string;

  userBlockExtraText: string;
};

export type ColorKeyType = keyof ColorsType;

export type SpaceType = 'auto' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'none';

export type SpacingType = {
  auto: string;
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  none: string;
};

export type customFontType = {
  family: string;
  url: string;
};

export type TypographyType = {
  customFonts: [customFontType];
  fontUrl: string;
  fontFamilyBase: string;
  fontFamilyHeadings: string;
  fontSizeBase: string;
  fontWeightHeavy: string;
  fontWeightMedium: string;
  fontWeightLight: string;
  fontWeightVLight: string;
  linkTextDecoration: string;
  lineHeight: string;
  headerLineHeight: string;
  headerTextTransform: string;
};

export type ThemeType = {
  name: string;
  avatar: AvatarType;
  breakpoint: BreakPointType;
  button: ButtonType;
  tokenColors: TokenColorsType;
  colors: ColorsType;
  spacing: SpacingType;
  fontSizes: FontSizesType;
  siteConfig: SiteConfigType;
  typography: TypographyType;
  utilities: UtilitiesType;
};

export type AddressDataType = {
  Line1: string;
  Line2: string;
  Line3: string;
  City: string;
  PostalCode: string;
};

export type AddressOptionsType = {
  Description: string;
  Type: string;
  Id: string;
  Text: string;
};
