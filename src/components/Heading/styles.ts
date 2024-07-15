import styled, { css } from "styled-components";

import { spacing, type SpacingPropsInternal } from "../Spacing";

import {
  type ThemeType,
  type FontSizeType,
  type ColorKeyType,
  type WordBreakType,
  type OverflowWrapType,
} from "../../types";

type StyledHeadingProps = SpacingPropsInternal & {
  theme: ThemeType;
  $textSize?: FontSizeType;
  $textAlign?: "left" | "right" | "center";
  $textColor?: string;
  $wordBreak?: WordBreakType;
  $overflowWrap?: OverflowWrapType;
};

const StyledHeading = (props: StyledHeadingProps) => css`
  font-family: ${props.theme.typography.fontFamilyHeadings};
  font-weight: ${props.theme.typography.fontWeightHeadings};
  word-break: ${props.$wordBreak || "normal"};
  overflow-wrap: ${props.$overflowWrap || "break-word"};
  color: ${props.$textColor &&
  typeof props.theme.colors[props.$textColor as ColorKeyType] !== "undefined"
    ? props.theme.colors[props.$textColor as ColorKeyType]
    : props.$textColor || props.theme.colors.textHeaderDefault};
  line-height: ${props.theme.typography.headerLineHeight};
  text-transform: ${props.theme.typography.headerTextTransform};
  margin-top: ${props.theme.spacing.m};
  margin-bottom: ${props.theme.spacing.s};
  max-width: 100%;
  text-align: ${props.$textAlign || "left"};

  &:first-child {
    margin-top: 0;
  }

  ${() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { theme, ...propsWithoutTheme } = props;

    return spacing(propsWithoutTheme, props.theme);
  }}
`;

const desktopFontSize = (
  $textSize: FontSizeType | null,
  defaultFontSize: string,
  theme: ThemeType,
) => {
  switch ($textSize) {
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
  $textSize: FontSizeType | null,
  defaultFontSize: string,
  theme: ThemeType,
) => {
  switch ($textSize) {
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
  $textSize: FontSizeType | null,
  defaultFontSize: string,
  theme: ThemeType,
) => {
  switch ($textSize) {
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
  font-size: ${({ theme, $textSize }) =>
    mobileFontSize($textSize || null, theme.fontSizes.xxl, theme)};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme, $textSize }) =>
      tabletFontSize($textSize || null, theme.fontSizes.xxxl, theme)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme, $textSize }) =>
      desktopFontSize($textSize || null, theme.fontSizes.xxxxl, theme)};
  }
`;

export const H2 = styled.h2<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}
  font-size: ${({ theme, $textSize }) =>
    mobileFontSize($textSize || null, theme.fontSizes.xl, theme)};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme, $textSize }) =>
      tabletFontSize($textSize || null, theme.fontSizes.xxl, theme)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme, $textSize }) =>
      desktopFontSize($textSize || null, theme.fontSizes.xxxl, theme)};
  }
`;

export const H3 = styled.h3<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}
  font-size: ${({ theme, $textSize }) =>
    mobileFontSize($textSize || null, theme.fontSizes.l, theme)};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme, $textSize }) =>
      tabletFontSize($textSize || null, theme.fontSizes.xl, theme)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme, $textSize }) =>
      desktopFontSize($textSize || null, theme.fontSizes.xxl, theme)};
  }
`;

export const H4 = styled.h4<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}
  font-size: ${({ theme, $textSize }) =>
    mobileFontSize($textSize || null, theme.fontSizes.l, theme)};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme, $textSize }) =>
      tabletFontSize($textSize || null, theme.fontSizes.l, theme)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme, $textSize }) =>
      desktopFontSize($textSize || null, theme.fontSizes.xl, theme)};
  }
`;

export const H5 = styled.h5<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}

  font-size: ${({ theme, $textSize }) =>
    mobileFontSize($textSize || null, theme.fontSizes.l, theme)};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme, $textSize }) =>
      tabletFontSize($textSize || null, theme.fontSizes.l, theme)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme, $textSize }) =>
      desktopFontSize($textSize || null, theme.fontSizes.l, theme)};
  }
`;

export const H6 = styled.h6<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}

  font-size: ${({ theme, $textSize }) =>
    mobileFontSize($textSize || null, theme.fontSizes.m, theme)};
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme, $textSize }) =>
      tabletFontSize($textSize || null, theme.fontSizes.m, theme)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme, $textSize }) =>
      desktopFontSize($textSize || null, theme.fontSizes.m, theme)};
  }
`;
