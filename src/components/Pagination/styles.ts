import styled, { css } from "styled-components";

type PaginationStyledProps = {
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
  }) => fontFamilyBase};
  font-size: ${({
    theme: {
      fontSizes: { s },
    },
  }) => s};
  color: ${(props) => props.theme.colors.textLight};
  background-color: ${(props) => props.theme.colors.paginationBackground};
  cursor: pointer;
  border-radius: 0;
  margin: ${(props) => props.theme.spacing.xxs};
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
      color: ${(props) => props.theme.colors.textDark};
      background-color: ${({
        theme: {
          colors: { paginationActive },
        },
      }) => paginationActive};
      cursor: default;
      &:hover {
        background-color: ${({
          theme: {
            colors: { paginationActive },
          },
        }) => paginationActive};
        text-decoration: none;
      }
    `}

  ${(itemProps: PaginationStyledProps) =>
    (itemProps.name === "Prev" || itemProps.name === "Next") &&
    css`
      color: ${(props) => props.theme.colors.paginationBackground};
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
      color: ${(props) => props.theme.colors.disabled};
      cursor: not-allowed;
      text-decoration: none;
      &:hover,
      &:focus,
      &:active,
      &:visited {
        color: ${(props) => props.theme.colors.disabled};
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
    }) => mobile}) {
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
