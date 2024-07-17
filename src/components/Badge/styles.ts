import styled, { css } from "styled-components";

import { type ColorKeyType, type SpaceType, type ThemeType } from "../../types";

export const StyledBadge = styled.span<{
  $backgroundColor?: string;
  $borderColor?: string;
  $textColor?: string;
  $isText?: boolean;
  $size: SpaceType;
  theme: ThemeType;
}>`
  border-width: 1px;
  border-style: solid;
  background-color: ${({ theme: { colors }, $backgroundColor }) =>
    $backgroundColor &&
    typeof colors[$backgroundColor as ColorKeyType] !== "undefined"
      ? colors[$backgroundColor as ColorKeyType]
      : $backgroundColor || colors.primary};
  color: ${({ theme: { colors }, $textColor }) =>
    $textColor && typeof colors[$textColor as ColorKeyType] !== "undefined"
      ? colors[$textColor as ColorKeyType]
      : $textColor || colors.textOnPrimary};
  border-color: ${({ theme: { colors }, $borderColor, $backgroundColor }) =>
    $borderColor && typeof colors[$borderColor as ColorKeyType] !== "undefined"
      ? colors[$borderColor as ColorKeyType]
      : $borderColor ||
        ($backgroundColor &&
        typeof colors[$backgroundColor as ColorKeyType] !== "undefined"
          ? colors[$backgroundColor as ColorKeyType]
          : $backgroundColor || colors.primary)};
  text-align: center;
  border-radius: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 1rem;
  padding: ${({
    theme: {
      spacing: { xxs },
    },
  }) => xxs};
  display: inline-block;
  min-width: ${({
    $size,
    theme: {
      spacing,
      spacing: { xs },
    },
  }) => `calc(${spacing[$size]} + ${xs})`};

  ${({ $isText, theme, $size }) =>
    !$isText &&
    css`
      padding: 0;
      border-radius: 50%;
      height: ${`calc(${theme.spacing[$size]} + ${theme.spacing.xs})`};
      width: ${`calc(${theme.spacing[$size]} + ${theme.spacing.xs})`};
      line-height: ${`calc(${theme.spacing[$size]} + ${theme.spacing.xs})`};
      svg {
        height: ${`calc(${theme.spacing[$size]}`};
      }
    `}
`;

export default StyledBadge;
