export type FontSizeType =
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "xxl"
  | "xxxl"
  | "xxxxl";

export type FontSizesType = { [key in FontSizeType]: string };

export type UtilitiesType = {
  contentMaxWidth: string;
  useDefaultFocusRect: boolean;
  useDefaultFromControls: boolean;
  useBackgroundStyleLinks: boolean;
  inputBorderWidth: string;
};

export type SiteConfigType = {
  assetPath: string;
  logoUrl: string;
  logoAlt: string;
  logoSrc: string;
  footerCopyText: string;
  footerLogoSrc: string;
  footerLogoAlt: string;
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

export type ButtonAppearanceType = "primary" | "secondary" | "tertiary";

export type PopOverPositionType =
  | "top"
  | "topLeft"
  | "left"
  | "right"
  | "bottom"
  | "bottomLeft";

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
  textOnPrimary: string;
  textOnSecondary: string;
  textOnTertiary: string;

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
  progressBarSecondary: string;
  progressBarBackground: string;
  circularProgress: string;
  circularProgressSecondary: string;
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

  buttonTertiaryText: string;
  buttonTertiaryTextHover: string;
  buttonTertiaryDisabledText: string;

  selectionBorder: string;
  inputBorder: string;

  headerBackground: string;
  backgroundLight: string;
  backgroundLightColor: string;
  backgroundMid: string;

  loaderColor1: string;
  loaderColor2: string;
  loaderColor3: string;

  paginationText: string;
  paginationBackground: string;
  paginationActive: string;

  footerBackground: string;

  headerBorder: string;

  stepBorder: string;
  stepBackground: string;

  popoverBackground: string;

  textInputExtraInfo: string;

  totaliserBubbleColor: string;
  totaliserBubbleTextColor: string;
  totaliserBubbleTotalColor: string;

  textInputBorder: string;

  selectBackground: string;

  modalBackdrop: string;

  userBlockExtraText: string;
};

export type ColorKeyType = keyof ColorsType;

export type SpaceType =
  | "auto"
  | "xxs"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "xxl"
  | "none";

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

export type CustomFontType = {
  family: string;
  url: string;
};

export type TypographyType = {
  customFonts: [CustomFontType];
  fontFamilyBase: string;
  fontFamilyHeadings: string;
  fontSizeBase: string;
  fontWeightHeavy: string;
  fontWeightNormal: string;
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
  AdminAreaCode: string;
  AdminAreaName: string;
  Barcode: string;
  Block: string;
  BuildingName: string;
  BuildingNumber: string;
  City: string;
  Company: string;
  CountryIso2: string;
  CountryIso3: string;
  CountryIsoNumber: string;
  CountryName: string;
  DataLevel: string;
  Department: string;
  DomesticId: string;
  Field1: string;
  Field10: string;
  Field11: string;
  Field12: string;
  Field13: string;
  Field14: string;
  Field15: string;
  Field16: string;
  Field17: string;
  Field18: string;
  Field19: string;
  Field2: string;
  Field20: string;
  Field3: string;
  Field4: string;
  Field5: string;
  Field6: string;
  Field7: string;
  Field8: string;
  Field9: string;
  Id: string;
  Label: string;
  Language: string;
  LanguageAlternatives: string;
  Line1: string;
  Line2: string;
  Line3: string;
  Line4: string;
  Line5: string;
  Neighbourhood: string;
  POBoxNumber: string;
  PostalCode: string;
  Province: string;
  ProvinceCode: string;
  ProvinceName: string;
  SecondaryStreet: string;
  SortingNumber1: string;
  SortingNumber2: string;
  Street: string;
  SubBuilding: string;
  Type: string;
};

export type AddressOptionsType = {
  Description: string;
  Type: string;
  Id: string;
  Text: string;
  Error?: Error;
};

export type WordBreakType =
  | "normal"
  | "break-all"
  | "keep-all"
  | "break-word"
  | "inherit"
  | "initial"
  | "unset";

export type OverflowWrapType =
  | "normal"
  | "anywhere"
  | "revert"
  | "revert-layer"
  | "break-word"
  | "inherit"
  | "initial"
  | "unset";
