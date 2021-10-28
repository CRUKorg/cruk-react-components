import styled, { css } from "styled-components";
import { ThemeType } from "src/types";

type PaginationStyledProps = {
  active?: boolean;
  name?: string;
  disabled?: boolean;
};

type ThemeProps = {
  theme: ThemeType;
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
  &:hover {
    opacity: 0.88;
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:visited {
    text-decoration: none;
  }

  ${(itemProps: PaginationStyledProps) =>
    itemProps.active &&
    css`
      color: ${({ theme }: ThemeProps) => theme.colors.textDark};
      background-color: ${({
        theme: {
          colors: { paginationActive },
        },
      }: ThemeProps) => paginationActive};
      cursor: default;
      &:hover {
        background-color: ${({
          theme: {
            colors: { paginationActive },
          },
        }: ThemeProps) => paginationActive};
        text-decoration: none;
      }
    `}

  ${(itemProps: PaginationStyledProps) =>
    (itemProps.name === "Prev" || itemProps.name === "Next") &&
    css`
      color: ${({
        theme,
        disabled,
      }: {
        theme: ThemeType;
        disabled?: boolean;
      }) => (disabled ? theme.colors.disabled : theme.colors.paginationText)};
      background-color: transparent;
      font-weight: bold;
      padding: 8px 6px;
      background-color: transparent;
      &:hover {
        background-color: transparent;
        text-decoration: underline;
      }
      &:focus,
      &:active,
      &:visited {
        text-decoration: none;
      }
    `}

  ${(itemProps: PaginationStyledProps) =>
    itemProps.disabled &&
    css`
      color: $ ${({ theme }: ThemeProps) => theme.colors.disabled};
      cursor: not-allowed;
      text-decoration: none;
      &:hover,
      &:focus,
      &:active,
      &:visited {
        color: ${({ theme }: ThemeProps) => theme.colors.disabled};
        text-decoration: none;
      }
    `}
`;

export const PagerItem = styled.li`
  display: none;
  &:first-child,
  &:last-child {
    display: inline;
  }
  @media (min-width: ${({
      theme: {
        breakpoint: { mobile },
      },
    }: ThemeProps) => mobile}) {
    display: inline;
  }
  span {
    border: none;
    min-width: 30px;
    padding: 5px;
    margin: 1px;
    border-radius: 0;
  }
`;
