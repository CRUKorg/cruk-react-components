import { type ElementType } from "react";
import styled from "styled-components";

import { spacing, type SpacingPropsInternal } from "../Spacing";
import {
  type WordBreakType,
  type FontSizeType,
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
};

export const TextStyled = styled.p<TextStyledProps>`
  font-family: ${({ $textFontFamily }) =>
    $textFontFamily ||
    "var(--typ-font-family-base, 'Poppins', Arial, sans-serif)"};
  word-break: ${({ $wordBreak }) => $wordBreak || "normal"};
  overflow-wrap: ${({ $overflowWrap }) => $overflowWrap || "break-word"};
  color: ${({ $textColor }) => $textColor};
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  font-size: ${({ $textSize }) =>
    $textSize
      ? `var(--font-size-${$textSize}, 1rem)`
      : `var(--font-size-m, 1rem)`};
  line-height: var(--typ-line-height, 1.5em);
  font-weight: ${({ $textWeight }) =>
    $textWeight || "var(--typ-font-weight-base, 300)"};
  padding: 0;
  margin: 0;
  margin-bottom: ${({ as }) =>
    typeof as === "undefined" || as === "p" ? `var(--spacing-xs, 1rem)` : 0};

  &:last-child {
    margin-bottom: 0;
  }

  ${(props) => spacing(props)}
`;
