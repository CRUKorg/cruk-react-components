import styled, { css } from "styled-components";
import { type ThemeType } from "../../types";

type ThemeProps = {
  theme: ThemeType;
};

type PaginationStyledProps = ThemeProps & {
  active?: boolean;
  name?: string;
  disabled?: boolean;
};

export const PagerWrapper = styled.div<PaginationStyledProps>`
  display: table;
  width: 100%;
  clear: both;
  text-align: center;
`;

export const PagerList = styled.ul`
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
`;

export const PagerLink = styled.a<PaginationStyledProps>`
  font-weight: normal;
  font-family: ${({
    theme: {
      typography: { fontFamilyBase },
    },
  }: ThemeProps) => fontFamilyBase};
  font-size: ${({
    theme: {
      fontSizes: { s },
    },
  }: ThemeProps) => s};
  color: ${({ theme }: ThemeProps) => theme.colors.textLight};
  background-color: ${({ theme }: ThemeProps) =>
    theme.colors.paginationBackground};
  cursor: pointer;
  border-radius: 0;
  margin: ${({ theme }: ThemeProps) => theme.spacing.xxs};
  padding: 7px 11px;
  text-decoration: none;
  &:active,
  &:focus,
  &:hover {
    opacity: 0.88;
    text-decoration: underline;
  }
  &:visited {
    text-decoration: none;
  }

  &:focus-visible {
    outline: auto;
  }

  ${({ active, theme }: PaginationStyledProps) =>
    active &&
    css`
      color: ${theme.colors.textDark};
      background-color: ${theme.colors.paginationActive};
      cursor: default;
      &:hover {
        background-color: ${theme.colors.paginationActive};
        text-decoration: none;
      }
    `}

  ${({ name, theme, disabled }: PaginationStyledProps) =>
    (name === "Prev" || name === "Next") &&
    css`
      color: ${disabled ? theme.colors.disabled : theme.colors.paginationText};
      background-color: transparent;
      font-weight: bold;
      padding: 8px 6px;
      background-color: transparent;
      &:focus,
      &:hover {
        background-color: transparent;
        text-decoration: underline;
      }
      &:active,
      &:visited {
        text-decoration: none;
      }
    `}

  ${({ theme, disabled }: PaginationStyledProps) =>
    disabled &&
    css`
      color: $ ${theme.colors.disabled};
      cursor: not-allowed;
      pointer-events:none
      text-decoration: none;
      &:hover,
      &:focus,
      &:active,
      &:visited {
        color: ${theme.colors.disabled};
        text-decoration: none;
      }
    `}
`;

export const PagerItem = styled.li<ThemeProps>`
  display: none;
  &:first-child,
  &:last-child {
    display: inline;
  }
  @media (min-width: ${(props) => props.theme.breakpoint.mobile}) {
    display: inline;
  }
  span {
    border: none;
    min-width: 30px;
    padding: 5px;
    margin: 1px;
    border-radius: 0;
    border-width: ${(props) => props.theme.breakpoint.mobile};
  }
`;
