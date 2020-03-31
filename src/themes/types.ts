export type FontSizeType =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'
  | 'extraExtraLarge'
  | 'extraExtraExtraLarge'
  | 'extraExtraExtraExtraLarge';

export type FontSizesType = { [key in FontSizeType]: string };

export type UtilitiesType = {
  borderRadius: string;
  rhythmBase: string;
  rhythmVerticalBase: string;
  rhythmHorizontalBase: string;
  contentMaxWidth: string;
  spacingBase: string;
  spacingUnit: number;
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
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  path: string;
};

export type ButtonType = {
  borderRadius: string;
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

export type SpacingType = {
  extraExtraSmall: string;
  extraSmall: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  extraExtraLarge: string;
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
  lineHeightLarge: string;
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
