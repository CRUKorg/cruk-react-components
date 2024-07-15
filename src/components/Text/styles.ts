import { type ElementType } from "react";
import styled from "styled-components";

import { spacing, type SpacingPropsInternal } from "../Spacing";
import {
  type WordBreakType,
  type FontSizeType,
  type ThemeType,
  type ColorKeyType,
  type OverflowWrapType,
} from "../../types";

export type TextStyledProps = SpacingPropsInternal & {
  $textColor?: string;
  $textAlign?: "left" | "right" | "center" | "justify";
  $textSize?: FontSizeType;
  $textWeight?: number | string;
  as?: ElementType;
  $wordBreak?: WordBreakType;
  $overflowWrap?: OverflowWrapType;
  $textFontFamily?: string;
  theme: ThemeType;
};

export const TextStyled = styled.p<TextStyledProps>`
  font-family: ${({ $textFontFamily, theme }) =>
    $textFontFamily || theme.typography.fontFamilyBase};
  word-break: ${({ $wordBreak }) => $wordBreak || "normal"};
  overflow-wrap: ${({ $overflowWrap }) => $overflowWrap || "break-word"};
  color: ${({ theme: { colors }, $textColor }) =>
    $textColor && typeof colors[$textColor as ColorKeyType] !== "undefined"
      ? colors[$textColor as ColorKeyType]
      : $textColor || colors.textDark};
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  font-size: ${({
    theme: {
      fontSizes,
      fontSizes: { m },
    },
    $textSize,
  }) => ($textSize ? fontSizes[$textSize] : m)};
  line-height: ${({ theme }) => theme.typography.lineHeight};
  font-weight: ${({ $textWeight, theme }) =>
    $textWeight || theme.typography.fontWeightBase};
  padding: 0;
  margin: 0;
  margin-bottom: ${({
    as,
    theme: {
      spacing: { xs },
    },
  }) => (typeof as === "undefined" || as === "p" ? `${xs}` : 0)};

  &:last-child {
    margin-bottom: 0;
  }

  ${(props) => spacing(props, props.theme as ThemeType)}
`;
