import styled, { css } from "styled-components";

import { type ColorKeyType, type SpaceType, type ThemeType } from "../../types";

type StyleBadgeProps = {
  $backgroundColor?: string;
  $borderColor?: string;
  $textColor?: string;
  $isText?: boolean;
  $size: SpaceType;
  theme: ThemeType;
};

export const StyledBadge = styled.span<StyleBadgeProps>`
  border-width: 1px;
  border-style: solid;
  background-color: ${({
    theme: { colors },
    $backgroundColor,
  }: StyleBadgeProps) =>
    $backgroundColor &&
    typeof colors[$backgroundColor as ColorKeyType] !== "undefined"
      ? colors[$backgroundColor as ColorKeyType]
      : $backgroundColor || colors.primary};
  color: ${({ theme: { colors }, $textColor }: StyleBadgeProps) =>
    $textColor && typeof colors[$textColor as ColorKeyType] !== "undefined"
      ? colors[$textColor as ColorKeyType]
      : $textColor || colors.textOnPrimary};
  border-color: ${({
    theme: { colors },
    $borderColor,
    $backgroundColor,
  }: StyleBadgeProps) =>
    $borderColor && typeof colors[$borderColor as ColorKeyType] !== "undefined"
      ? colors[$borderColor as ColorKeyType]
      : $borderColor ||
        ($backgroundColor &&
        typeof colors[$backgroundColor as ColorKeyType] !== "undefined"
          ? colors[$backgroundColor as ColorKeyType]
          : $backgroundColor || colors.primary)};
  text-align: center;
  border-radius: 1.5rem;
  font-size: ${({ theme }: StyleBadgeProps) => theme.fontSizes.m};
  line-height: 1rem;
  padding: ${({
    theme: {
      spacing: { xxs },
    },
  }: StyleBadgeProps) => xxs};
  display: inline-block;
  min-width: ${({
    $size,
    theme: {
      spacing,
      spacing: { xs },
    },
  }: StyleBadgeProps) => `calc(${spacing[$size]} + ${xs})`};

  ${({ $isText, theme, $size }: StyleBadgeProps) =>
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
