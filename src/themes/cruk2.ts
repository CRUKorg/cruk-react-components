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
} from './types';

import defaultTheme from './cruk';

export const UTILITIES: UtilitiesType = {
  ...defaultTheme.utilities,
  borderRadius: 'unset',
  useDefaultFocusRect: true,
  useDefaultFromControls: false,
  inputBorderWidth: '1px',
};

export const SITE_CONFIG: SiteConfigType = {
  ...defaultTheme.siteConfig,
};

export const AVATAR: AvatarType = {
  ...defaultTheme.avatar,
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
  textInputBorder: TOKEN_COLORS.grey_900,
  inputBorder: TOKEN_COLORS.grey_900,
};

export const SPACING: SpacingType = {
  ...defaultTheme.spacing,
};

export const FONT_SIZES: FontSizesType = {
  ...defaultTheme.fontSizes,
};

export const TYPOGRAPHY: TypographyType = {
  ...defaultTheme.typography,
};

const theme: ThemeType = {
  avatar: AVATAR,
  breakpoint: BREAKPOINT,
  button: BUTTON,
  tokenColors: TOKEN_COLORS,
  colors: COLORS,
  spacing: SPACING,
  fontSizes: FONT_SIZES,
  siteConfig: SITE_CONFIG,
  typography: TYPOGRAPHY,
  utilities: UTILITIES,
};

export default theme;
