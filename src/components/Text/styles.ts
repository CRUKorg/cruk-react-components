import styled from "styled-components";
import { ElementType } from "react";

import spacing, { SpacingProps } from "../Spacing";
import {
  WordBreakType,
  FontSizeType,
  ThemeType,
  ColorKeyType,
  OverflowWrapType,
} from "../../types";

export type TextStyledProps = SpacingProps & {
  textColor?: ColorKeyType;
  textAlign?: "left" | "right" | "center" | "justify";
  textSize?: FontSizeType;
  textWeight?: number;
  as?: ElementType;
  wordBreak?: WordBreakType;
  overflowWrap?: OverflowWrapType;
  theme: ThemeType;
};

export const TextStyled = styled.p<TextStyledProps>`
  font-family: ${({ theme }: TextStyledProps) =>
    theme.typography.fontFamilyBase};
  word-break: ${({ wordBreak }: TextStyledProps) => wordBreak || "normal"};
  overflow-wrap: ${({ overflowWrap }: TextStyledProps) =>
    overflowWrap || "break-word"};
  color: ${({ theme: { colors }, textColor }: TextStyledProps) =>
    textColor && typeof colors[textColor] !== "undefined"
      ? colors[textColor]
      : textColor || colors.textDark};
  text-align: ${({ textAlign }: TextStyledProps) => textAlign || "left"};
  font-size: ${({
    theme: {
      fontSizes,
      fontSizes: { m },
    },
    textSize,
  }: TextStyledProps) => (textSize ? fontSizes[textSize] : m)};
  line-height: ${({ theme }: TextStyledProps) => theme.typography.lineHeight};
  font-weight: ${({ textWeight, theme }: TextStyledProps) =>
    textWeight || theme.typography.fontWeightNormal};
  padding: 0;
  margin: 0;
  margin-bottom: ${({
    as,
    theme: {
      spacing: { xs },
    },
  }: TextStyledProps) =>
    typeof as === "undefined" || as === "p" ? `${xs}` : 0};

  &:last-child {
    margin-bottom: 0;
  }

  ${(props) => spacing(props, props.theme as ThemeType)}
`;
