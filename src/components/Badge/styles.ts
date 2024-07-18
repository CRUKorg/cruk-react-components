import styled from "styled-components";

import { type SpaceType, type ThemeType } from "../../types";

export const StyledBadge = styled.span<{
  $backgroundColor: string;
  $borderColor: string;
  $textColor: string;
  $isText: boolean;
  $size: SpaceType;
  theme: ThemeType;
}>`
  display: inline-block;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.m};
  padding: ${({ theme, $isText }) => ($isText ? theme.spacing.xxs : 0)};
  border-radius: ${({ $isText }) => ($isText ? ` 1.5rem` : "50%")};
  height: ${({ $isText, $size, theme }) =>
    $isText ? `auto` : `calc(${theme.spacing[$size]} + ${theme.spacing.xs})`};
  width: ${({ $isText, $size, theme }) =>
    $isText ? `auto` : `calc(${theme.spacing[$size]} + ${theme.spacing.xs})`};
  line-height: ${({ $isText, $size, theme }) =>
    $isText ? ` 1rem` : `calc(${theme.spacing[$size]} + ${theme.spacing.xs})`};
  min-width: ${({ $size, theme }) =>
    `calc(${theme.spacing[$size]} + ${theme.spacing.xs})`};

  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-color: ${({ $borderColor }) => $borderColor};
  color: ${({ $textColor }) => $textColor};
`;

export default StyledBadge;
