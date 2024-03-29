import styled, { css } from "styled-components";

import spacing, { SpacingProps } from "../Spacing";

import {
  ThemeType,
  FontSizeType,
  ColorKeyType,
  WordBreakType,
} from "../../types";

type StyledHeadingProps = SpacingProps & {
  theme: ThemeType;
  textSize?: FontSizeType;
  textAlign?: "left" | "right" | "center";
  textColor?: ColorKeyType | string;
  wordBreak?: WordBreakType;
  overflowWrap?: WordBreakType;
};

const StyledHeading = (props: StyledHeadingProps) => css`
  font-family: ${({
    theme: {
      typography: { fontFamilyHeadings },
    },
  }: StyledHeadingProps) => fontFamilyHeadings};
  font-weight: ${({
    theme: {
      typography: { fontWeightHeadings },
    },
  }: StyledHeadingProps) => fontWeightHeadings};
  word-break: ${() => props.wordBreak || "normal"};
  overflow-wrap: ${() => props.overflowWrap || "break-word"};
  font-weight: ${({
    theme: {
      typography: { fontWeightHeadings },
    },
  }: StyledHeadingProps) => fontWeightHeadings};
  color: ${({ theme: { colors }, textColor }: StyledHeadingProps) =>
    textColor && typeof colors[textColor as ColorKeyType] !== "undefined"
      ? colors[textColor as ColorKeyType]
      : textColor || colors.textHeaderDefault};
  line-height: ${({
    theme: {
      typography: { headerLineHeight },
    },
  }: StyledHeadingProps) => headerLineHeight};
  text-transform: ${({
    theme: {
      typography: { headerTextTransform },
    },
  }: StyledHeadingProps) => headerTextTransform};
  margin-top: ${({
    theme: {
      spacing: { m },
    },
  }: StyledHeadingProps) => m};
  margin-bottom: ${({
    theme: {
      spacing: { s },
    },
  }: StyledHeadingProps) => s};
  max-width: 100%;
  text-align: ${({ textAlign }: StyledHeadingProps) => textAlign || "left"};

  &:first-child {
    margin-top: 0;
  }

  ${() => {
    const { theme, ...propsWithoutTheme } = props;
    return spacing(propsWithoutTheme, props.theme);
  }}
`;

const desktopFontSize = (
  textSize: FontSizeType | null,
  defaultFontSize: string,
  theme: ThemeType
) => {
  switch (textSize) {
    case "m":
      return theme.fontSizes.m;
    case "l":
      return theme.fontSizes.l;
    case "xl":
      return theme.fontSizes.xl;
    case "xxl":
      return theme.fontSizes.xxl;
    case "xxxl":
      return theme.fontSizes.xxxl;
    case "xxxxl":
      return theme.fontSizes.xxxxl;

    default:
      return defaultFontSize;
  }
};

// everything drops down a size on the typography scale
const tabletFontSize = (
  textSize: FontSizeType | null,
  defaultFontSize: string,
  theme: ThemeType
) => {
  switch (textSize) {
    case "m":
      return theme.fontSizes.m;
    case "l":
      return theme.fontSizes.l;
    case "xl":
      return theme.fontSizes.l;
    case "xxl":
      return theme.fontSizes.xl;
    case "xxxl":
      return theme.fontSizes.xxl;
    case "xxxxl":
      return theme.fontSizes.xxxl;

    default:
      return defaultFontSize;
  }
};

// everything drops down two sizes on the typography scale
const mobileFontSize = (
  textSize: FontSizeType | null,
  defaultFontSize: string,
  theme: ThemeType
) => {
  switch (textSize) {
    case "m":
      return theme.fontSizes.m;
    case "l":
      return theme.fontSizes.l;
    case "xl":
      return theme.fontSizes.l;
    case "xxl":
      return theme.fontSizes.l;
    case "xxxl":
      return theme.fontSizes.xl;
    case "xxxxl":
      return theme.fontSizes.xxl;

    default:
      return defaultFontSize;
  }
};

export const H1 = styled.h1<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}
  font-size: ${({ theme, textSize }: StyledHeadingProps) =>
    mobileFontSize(textSize || null, theme.fontSizes.xxl, theme)};
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoint.tablet}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      tabletFontSize(textSize || null, theme.fontSizes.xxxl, theme)};
  }
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoint.desktop}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      desktopFontSize(textSize || null, theme.fontSizes.xxxxl, theme)};
  }
`;

export const H2 = styled.h2<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}
  font-size: ${({ theme, textSize }: StyledHeadingProps) =>
    mobileFontSize(textSize || null, theme.fontSizes.xl, theme)};
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoint.tablet}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      tabletFontSize(textSize || null, theme.fontSizes.xxl, theme)};
  }
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoint.desktop}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      desktopFontSize(textSize || null, theme.fontSizes.xxxl, theme)};
  }
`;

export const H3 = styled.h3<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}
  font-size: ${({ theme, textSize }: StyledHeadingProps) =>
    mobileFontSize(textSize || null, theme.fontSizes.l, theme)};
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoint.tablet}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      tabletFontSize(textSize || null, theme.fontSizes.xl, theme)};
  }
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoint.desktop}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      desktopFontSize(textSize || null, theme.fontSizes.xxl, theme)};
  }
`;

export const H4 = styled.h4<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}
  font-size: ${({ theme, textSize }: StyledHeadingProps) =>
    mobileFontSize(textSize || null, theme.fontSizes.l, theme)};
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoint.tablet}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      tabletFontSize(textSize || null, theme.fontSizes.l, theme)};
  }
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoint.desktop}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      desktopFontSize(textSize || null, theme.fontSizes.xl, theme)};
  }
`;

export const H5 = styled.h5<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}

  font-size: ${({ theme, textSize }: StyledHeadingProps) =>
    mobileFontSize(textSize || null, theme.fontSizes.l, theme)};
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoint.tablet}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      tabletFontSize(textSize || null, theme.fontSizes.l, theme)};
  }
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoint.desktop}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      desktopFontSize(textSize || null, theme.fontSizes.l, theme)};
  }
`;

export const H6 = styled.h6<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}

  font-size: ${({ theme, textSize }: StyledHeadingProps) =>
    mobileFontSize(textSize || null, theme.fontSizes.m, theme)};
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoint.tablet}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      tabletFontSize(textSize || null, theme.fontSizes.m, theme)};
  }
  @media (min-width: ${({ theme }: StyledHeadingProps) =>
      theme.breakpoint.desktop}) {
    font-size: ${({ theme, textSize }: StyledHeadingProps) =>
      desktopFontSize(textSize || null, theme.fontSizes.m, theme)};
  }
`;
