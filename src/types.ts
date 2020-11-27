export type FontSizeType =
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl';

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
  siteUrl: string;
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

// TODO make this much more explicit once we know what they should be
export type ColorsType = { [key: string]: string };

export type SpaceType =
  | 'auto'
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'none';

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
};

export type ThemeType = {
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
