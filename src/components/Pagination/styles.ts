import styled, { css } from "styled-components";

export const PagerWrapper = styled.div`
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

export const PagerLink = styled.a<{
  name?: string;
  $active?: boolean;
  $disabled?: boolean;
}>`
  font-weight: normal;
  font-family: var(--typ-font-family-base, "Poppins", Arial, sans-serif);
  font-size: var(--font-size-s, 0.875rem);
  color: var(--clr-text-light, #fff);
  background-color: var(--clr-pagination-background, #00007e);
  cursor: pointer;
  border-radius: 0;
  margin: var(--spacing-xxs, 0.5rem);
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

  ${({ $active }) =>
    $active &&
    css`
      color: var(--clr-text-dark, #000);
      background-color: var(--clr-pagination-active, #e6e6e6);
      cursor: default;
      &:hover {
        background-color: var(--clr-pagination-active, #e6e6e6);
        text-decoration: none;
      }
    `}

  ${({ name, $disabled }) =>
    (name === "Prev" || name === "Next") &&
    css`
      color: ${$disabled
        ? "var(--clr-disabled, #e6e6e6)"
        : "var(--clr-pagination-text, #00007e)"};
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

  ${({ $disabled }) =>
    $disabled &&
    css`
      color: var(--clr-disabled, #e6e6e6);
      cursor: not-allowed;
      pointer-events:none
      text-decoration: none;
      &:hover,
      &:focus,
      &:active,
      &:visited {
        color: $ var(--clr-disabled, #e6e6e6);
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
  @media (min-width: 576px) {
    display: inline;
  }
  span {
    border: none;
    min-width: 30px;
    padding: 5px;
    margin: 1px;
    border-radius: 0;
    border-width: var(--breakpoint-mobile, 576px);
  }
`;
