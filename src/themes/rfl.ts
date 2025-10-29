import {
  type UtilitiesType,
  type SiteConfigType,
  type AvatarType,
  type ButtonType,
  type BreakPointType,
  type TokenColorsType,
  type ColorsType,
  type SpacingType,
  type FontSizesType,
  type TypographyType,
  type ThemeType,
  type ShadowsType,
} from "../types";

import { crukTheme as defaultTheme } from "./cruk";

export const UTILITIES: UtilitiesType = {
  ...defaultTheme.utilities,
};

export const SITE_CONFIG: SiteConfigType = {
  ...defaultTheme.siteConfig,
  logoSrc: "https://rcl.assets.cancerresearchuk.org/images/logos/rfl.svg",
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
  headerTaglineText: TOKEN_COLORS.navy_600,
  progressBar: TOKEN_COLORS.magenta_700,
  progressBarSecondary: TOKEN_COLORS.navy_600,
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
  fontWeightHeadings: 600,
};

export const rflTheme: ThemeType = {
  name: "rfl",
  avatar: { ...AVATAR },
  breakpoint: { ...BREAKPOINT },
  button: { ...BUTTON },
  tokenColors: { ...TOKEN_COLORS },
  colors: { ...COLORS },
  spacing: { ...SPACING },
  fontSizes: { ...FONT_SIZES },
  siteConfig: { ...SITE_CONFIG },
  typography: { ...TYPOGRAPHY },
  shadows: { ...SHADOWS },
  utilities: { ...UTILITIES },
};

export default rflTheme;
