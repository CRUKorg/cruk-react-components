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
  margin-top: var(--spacing-m, 2rem);
  margin-bottom: var(--spacing-s, 1.5rem);
  max-width: 100%;
  text-align: ${props.$textAlign || "left"};

  &:first-child {
    margin-top: 0;
  }

  ${() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { theme, ...propsWithoutTheme } = props;

    return spacing(propsWithoutTheme);
  }}
`;

const desktopFontSize = (
  $textSize: FontSizeType | null,
  defaultFontSize: string,
) => {
  switch ($textSize) {
    case "m":
      return "var(--font-size-m, 1rem)";
    case "l":
      return "var(--font-size-l, 1.25rem)";
    case "xl":
      return "var(--font-size-xl, 1.5rem)";
    case "xxl":
      return "var(--font-size-xxl, 1.75rem)";
    case "xxxl":
      return "var(--font-size-xxxl, 2rem)";
    case "xxxxl":
      return "var(--font-size-xxxxl, 2.25rem)";

    default:
      return defaultFontSize;
  }
};

// everything drops down a size on the typography scale
const tabletFontSize = (
  $textSize: FontSizeType | null,
  defaultFontSize: string,
) => {
  switch ($textSize) {
    case "m":
      return "var(--font-size-m, 1rem)";
    case "l":
      return "var(--font-size-l, 1.25rem)";
    case "xl":
      return "var(--font-size-l, 1.25rem)";
    case "xxl":
      return "var(--font-size-xl, 1.5rem)";
    case "xxxl":
      return "var(--font-size-xxl, 1.75rem)";
    case "xxxxl":
      return "var(--font-size-xxxl, 2rem)";

    default:
      return defaultFontSize;
  }
};

// everything drops down two sizes on the typography scale
const mobileFontSize = (
  $textSize: FontSizeType | null,
  defaultFontSize: string,
) => {
  switch ($textSize) {
    case "m":
      return "var(--font-size-m, 1rem)";
    case "l":
      return "var(--font-size-l, 1.25rem)";
    case "xl":
      return "var(--font-size-l, 1.25rem)";
    case "xxl":
      return "var(--font-size-l, 1.25rem)";
    case "xxxl":
      return "var(--font-size-xl, 1.5rem)";
    case "xxxxl":
      return "var(--font-size-xxl, 1.75rem)";

    default:
      return defaultFontSize;
  }
};

export const H1 = styled.h1<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}
  font-size: ${({ $textSize }) =>
    mobileFontSize($textSize || null, "var(--font-size-xxl, 1.75rem)")};
  @media (min-width: var(--breakpoint-tablet, 768px)) {
    font-size: ${({ $textSize }) =>
      tabletFontSize($textSize || null, "var(--font-size-xxxl, 2rem)")};
  }
  @media (min-width: var(--breakpoint-desktop, 992px)) {
    font-size: ${({ $textSize }) =>
      desktopFontSize($textSize || null, "var(--font-size-xxxxl, 2.25rem)")};
  }
`;

export const H2 = styled.h2<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}
  font-size: ${({ $textSize }) =>
    mobileFontSize($textSize || null, "var(--font-size-xl, 1.5rem)")};

  @media (min-width: var(--breakpoint-tablet, 768px)) {
    font-size: ${({ $textSize }) =>
      tabletFontSize($textSize || null, "var(--font-size-xxl, 1.75rem)")};
  }
  @media (min-width: var(--breakpoint-desktop, 992px)) {
    font-size: ${({ $textSize }) =>
      desktopFontSize($textSize || null, "var(--font-size-xxxl, 2rem)")};
  }
`;

export const H3 = styled.h3<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}
  font-size: ${({ $textSize }) =>
    mobileFontSize($textSize || null, "var(--font-size-l, 1.25rem)")};
  @media (min-width: var(--breakpoint-tablet, 768px)) {
    font-size: ${({ $textSize }) =>
      tabletFontSize($textSize || null, "var(--font-size-xl, 1.5rem)")};
  }
  @media (min-width: var(--breakpoint-desktop, 992px)) {
    font-size: ${({ $textSize }) =>
      desktopFontSize($textSize || null, "var(--font-size-xxl, 1.75rem)")};
  }
`;

export const H4 = styled.h4<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}
  font-size: ${({ $textSize }) =>
    mobileFontSize($textSize || null, "var(--font-size-l, 1.25rem)")};
  @media (min-width: var(--breakpoint-tablet, 768px)) {
    font-size: ${({ $textSize }) =>
      tabletFontSize($textSize || null, "var(--font-size-l, 1.25rem)")};
  }
  @media (min-width: var(--breakpoint-desktop, 992px)) {
    font-size: ${({ $textSize }) =>
      desktopFontSize($textSize || null, "var(--font-size-xl, 1.5rem)")};
  }
`;

export const H5 = styled.h5<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}

  font-size: ${({ $textSize }) =>
    mobileFontSize($textSize || null, "var(--font-size-l, 1.25rem)")};
  @media (min-width: var(--breakpoint-tablet, 768px)) {
    font-size: ${({ $textSize }) =>
      tabletFontSize($textSize || null, "var(--font-size-l, 1.25rem)")};
  }
  @media (min-width: var(--breakpoint-desktop, 992px)) {
    font-size: ${({ $textSize }) =>
      desktopFontSize($textSize || null, "var(--font-size-l, 1.25rem)")};
  }
`;

export const H6 = styled.h6<StyledHeadingProps>`
  ${(props) => StyledHeading(props)}

  font-size: ${({ $textSize }) =>
    mobileFontSize($textSize || null, "var(--font-size-m, 1rem)")};
  @media (min-width: var(--breakpoint-tablet, 768px)) {
    font-size: ${({ $textSize }) =>
      tabletFontSize($textSize || null, "var(--font-size-m, 1rem)")};
  }
  @media (min-width: var(--breakpoint-desktop, 992px)) {
    font-size: ${({ $textSize }) =>
      desktopFontSize($textSize || null, "var(--font-size-m, 1rem)")};
  }
`;
