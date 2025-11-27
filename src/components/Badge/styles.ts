import styled from "styled-components";

import { type SpaceType, type ThemeType } from "../../types";

export const StyledBadge = styled.span<{
  $backgroundColor: string;
  $borderColor: string;
  $textColor: string;
  $isSquare: boolean;
  $size: SpaceType;
  theme: ThemeType;
}>`
  display: inline-block;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.m};
  padding: ${({ theme, $isSquare }) => ($isSquare ? 0 : theme.spacing.xxs)};
  border-radius: ${({ $isSquare }) => ($isSquare ? "50%" : ` 1.5rem`)};
  height: ${({ $isSquare, $size, theme }) =>
    $isSquare ? `calc(${theme.spacing[$size]} + ${theme.spacing.xs})` : `auto`};
  width: ${({ $isSquare, $size, theme }) =>
    $isSquare ? `calc(${theme.spacing[$size]} + ${theme.spacing.xs})` : `auto`};
  line-height: ${({ $isSquare, $size, theme }) =>
    $isSquare
      ? `calc(${theme.spacing[$size]} + ${theme.spacing.xs})`
      : ` 1rem`};
  min-width: ${({ $size, theme }) =>
    `calc(${theme.spacing[$size]} + ${theme.spacing.xs})`};

  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-color: ${({ $borderColor }) => $borderColor};
  color: ${({ $textColor }) => $textColor};
  svg {
    vertical-align: baseline;
  }
`;

export default StyledBadge;
