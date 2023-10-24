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
  ShadowsType,
} from "../types";

import defaultTheme from "./cruk";

export const UTILITIES: UtilitiesType = {
  ...defaultTheme.utilities,
};

export const SITE_CONFIG: SiteConfigType = {
  ...defaultTheme.siteConfig,
  logoSrc: "https://rcl.assets.cancerresearchuk.org/images/logos/rfl-sl.svg",
};

export const AVATAR: AvatarType = {
  ...defaultTheme.avatar,
  path: `${SITE_CONFIG.assetPath}images/avatar/rfl/`,
};

export const BUTTON: ButtonType = {
  ...defaultTheme.button,
};

export const BREAKPOINT: BreakPointType = {
  ...defaultTheme.breakpoint,
};

export const TOKEN_COLORS: TokenColorsType = {
  ...defaultTheme.tokenColors,
};

export const COLORS: ColorsType = {
  ...defaultTheme.colors,
  textHeaderDefault: TOKEN_COLORS.navy_600,
};

export const SPACING: SpacingType = {
  ...defaultTheme.spacing,
};

export const SHADOWS: ShadowsType = {
  ...defaultTheme.shadows,
};

export const FONT_SIZES: FontSizesType = {
  ...defaultTheme.fontSizes,
};

export const TYPOGRAPHY: TypographyType = {
  ...defaultTheme.typography,
};

const theme: ThemeType = {
  name: "rfl",
  avatar: AVATAR,
  breakpoint: BREAKPOINT,
  button: BUTTON,
  tokenColors: TOKEN_COLORS,
  colors: COLORS,
  spacing: SPACING,
  fontSizes: FONT_SIZES,
  siteConfig: SITE_CONFIG,
  typography: TYPOGRAPHY,
  shadows: SHADOWS,
  utilities: UTILITIES,
};

export default theme;
