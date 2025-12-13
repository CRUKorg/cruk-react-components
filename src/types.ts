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

export type ThemeNameType = "cruk" | "su2c" | "bowelbabe" | "rfl";

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

export type SpacingType = {
  auto: string;
  xxxs: string;
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  none: string;
};

export type ShadowsType = {
  s: string;
  m: string;
  l: string;
};

export type ThemeType = {
  name: string;
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
  "primary",
  "secondary",
  "tertiary",
  "text-on-primary",
  "text-on-secondary",
  "text-on-tertiary",
  "text-header-default",

  "disabled",
  "danger",
  "warning",
  "success",
  "info",
  "text-error",
  "text-dark",
  "text-light",
  "text-mid",

  "link",
  "link-hover",
  "link-secondary",
  "link-secondary-hover",

  "avatar-border",

  "progress-bar",
  "progress-bar-secondary",
  "progress-bar-background",
  "circular-progress",
  "circular-progress-secondary",
  "circular-progress-background",

  "button-primary-background",
  "button-primary-text",
  "button-primary-border",
  "button-primary-background-hover",
  "button-primary-text-hover",
  "button-primary-border-hover",
  "button-primary-disabled-background",
  "button-primary-disabled-text",
  "button-primary-disabled-border",

  "button-secondary-background",
  "button-secondary-text",
  "button-secondary-border",
  "button-secondary-background-hover",
  "button-secondary-text-hover",
  "button-secondary-border-hover",
  "button-secondary-disabled-background",
  "button-secondary-disabled-text",
  "button-secondary-disabled-border",

  "button-tertiary-text",
  "button-tertiary-text-hover",
  "button-tertiary-disabled-text",

  "collapse-header",

  "selection-border",

  "input-border",
  "check",

  "header-background",
  "background-light",
  "background-light-color",
  "background-mid",
  "background-mid-light",

  "loader-color-1",
  "loader-color-2",
  "loader-color-3",

  "pagination-text",
  "pagination-background",
  "pagination-active",

  "footer-background",

  "header-border",
  "header-tagline-text",

  "step-border",
  "step-background",

  "popover-background",

  "text-input-extra-info",

  "totaliser-bubble",
  "totaliser-bubble-text",
  "totaliser-bubble-total",

  "text-input-border",

  "select-background",

  "modal-backdrop",

  "user-block-extra-text",
] as const;
export type ColourVariableType = (typeof colours)[number];

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
