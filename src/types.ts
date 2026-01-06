export const fontSizes = [
  "xs",
  "s",
  "m",
  "ml",
  "l",
  "xl",
  "xxl",
  "xxxl",
  "xxxxl",
] as const;

export type FontSizeType = (typeof fontSizes)[number];

export const themeNames = ["cruk", "su2c", "bowelbabe", "rfl"] as const;
export type ThemeNameType = (typeof themeNames)[number];

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

export const spaces = [
  "auto",
  "xxxs",
  "xxs",
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "xxl",
  "none",
] as const;

export type SpaceType = (typeof spaces)[number];

export type SpacingProps = {
  margin?: SpaceType;
  marginTop?: SpaceType;
  marginRight?: SpaceType;
  marginBottom?: SpaceType;
  marginLeft?: SpaceType;
  marginVertical?: SpaceType;
  marginHorizontal?: SpaceType;
  padding?: SpaceType;
  paddingTop?: SpaceType;
  paddingRight?: SpaceType;
  paddingBottom?: SpaceType;
  paddingLeft?: SpaceType;
  paddingVertical?: SpaceType;
  paddingHorizontal?: SpaceType;
};

export type TextProps = {
  textSize?: FontSizeType;
  textAlign?: FontAlignType;
  textWeight?: FontWeightType;
  textFontFamily?: FontFamilyStylesType;
  wordBreak?: WordBreakType;
  overflowWrap?: OverflowWrapType;
};

export type ShadowsType = {
  s: string;
  m: string;
  l: string;
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

export const colours = [
  // Generic colours

  "currentColor",
  "primary",
  "secondary",
  "tertiary",

  "text-on-primary",
  "text-on-secondary",
  "text-on-tertiary",

  "disabled",
  "danger",
  "warning",
  "success",
  "info",
  "sports-activity",

  "text-dark",
  "text-light",
  "text-mid",

  "background-light",
  "background-light-color",
  "background-mid",
  "background-mid-light",
] as const;

export type ColourVariableType = (typeof colours)[number];

export type ColourProps = {
  textColor?: ColourVariableType;
  backgroundColor?: ColourVariableType;
  borderColor?: ColourVariableType;
};

export const fontFamilyStyles = [
  "base",
  "headings",
  "links",
  "buttons",
  "label",
] as const;

export type FontFamilyStylesType = (typeof fontFamilyStyles)[number];

export const fontWeights = [
  "base",
  "headings",

  "links",
  "buttons",
  "labels",

  "heavy",
  "medium",
  "normal",
  "light",
  "vlight",
] as const;

export type FontWeightType = (typeof fontWeights)[number];

export type AddressOptionsType = {
  Description: string;
  Type: string;
  Id: string;
  Text: string;
  Error?: Error;
};

export const wordBreaks = [
  "normal",
  "break-all",
  "keep-all",
  "break-word",
  "inherit",
  "initial",
  "unset",
] as const;

export type WordBreakType = (typeof wordBreaks)[number];

export const overflowWraps = [
  "normal",
  "anywhere",
  "revert",
  "revert-layer",
  "break-word",
  "inherit",
  "initial",
  "unset",
] as const;

export type OverflowWrapType = (typeof overflowWraps)[number];

export const fontAligns = ["left", "right", "center", "justify"] as const;

export type FontAlignType = (typeof fontAligns)[number];
