import styled, { css } from "styled-components";

import { type ThemeType, type ButtonAppearanceType } from "../../types";

export const Spacer = styled.span<{ theme: ThemeType }>`
  margin-left: var(--spacing-xxs, 1rem);
  &:first-of-type {
    margin-left: 0;
  }
`;

export const StyledButton = styled.button<{
  theme: ThemeType;
  href?: string;
  $isIconButton: boolean;
  $appearance?: ButtonAppearanceType;
  $full?: boolean;
  $size?: "m" | "l";
  $css?: string;
}>`
  --_button-height: 3rem;
  --_button-height-large: 4rem;

  box-sizing: border-box;
  min-height: var(--_button-height, 3rem);
  height: min-content;
  display: inline-block;
  vertical-align: middle;

  padding: ${({ theme, $isIconButton }) =>
    $isIconButton
      ? "0"
      : `calc( (var(--_button-height, 3rem) - ( var(--btn-border-thickness, 2px) * 2) - ${theme.typography.lineHeight} ) / 2) var(--btn-horizontal-padding, 1.5rem)`};
  width: ${({ $isIconButton }) =>
    $isIconButton ? `var(--_button-height, 3rem)` : "auto"};
  min-width: ${({ $isIconButton }) =>
    $isIconButton ? `var(--_button-height, 3rem)` : "auto"};
  border-radius: var(--btn-border-radius, 0px);
  border-style: solid;
  border-width: var(--btn-border-thickness, 2px);

  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;

  cursor: pointer;
  font-size: var(--font-size-m, 1rem);
  font-family: ${({
    theme: {
      typography: { fontFamilyButtons },
    },
  }) => fontFamilyButtons};
  font-weight: ${({
    theme: {
      typography: { fontWeightButtons },
    },
  }) => fontWeightButtons};
  text-align: center;
  text-transform: var(--btn-text-transform, none);
  text-decoration: var(--btn-text-decoration, none);

  &:focus-visible {
    outline: auto;
  }

  ${(props) =>
    props.$appearance === "primary" &&
    css`
      background-color: var(--clr-button-primary-background, #e60079);
      border-color: var(--clr-button-primary-border, #e60079);
      color: var(--clr-button-primary-text, #ffffff) !important;
      &:focus,
      &:hover {
        background-color: var(--clr-button-primary-background-hover, #cc006c);
        border-color: var(--clr-button-primary-border-hover, #cc006c);
        color: var(--clr-button-primary-text-hover, #ffffff) !important;
      }
      &:disabled {
        cursor: not-allowed;
        background-color: var(
          --clr-button-primary-disabled-background,
          #e6e6e6
        );
        color: var(--clr-button-primary-disabled-text, #666666) !important;
        border-color: var(--clr-button-primary-disabled-border, #e6e6e6);
      }
    `}

  ${(props) =>
    props.$appearance === "secondary" &&
    css`
      background-color: var(--clr-button-secondary-background, #ffffff);
      border-color: var(--clr-button-secondary-border, #e60079);
      color: var(--clr-button-secondary-text, #e60079) !important;
      &:focus,
      &:hover {
        background-color: var(--clr-button-secondary-background-hover, #ffe6f3);
        border-color: var(--clr-button-secondary-border-hover, #ffe6f3);
        color: var(--clr-button-secondary-text-hover, #e60079) !important;
      }
      &:disabled {
        cursor: not-allowed;
        background-color: var(
          --clr-button-secondary-disabled-background,
          #e6e6e6
        );
        color: var(--clr-button-secondary-disabled-text, #666666) !important;
        border-color: var(--clr-button-secondary-disabled-border, #e6e6e6);
      }
    `}

  ${(props) =>
    props.$appearance === "tertiary" &&
    css`
      display: inline-block;
      padding: 0;
      border: 0px;
      background-color: rgba(255, 255, 255, 0);
      transition: color 0.2s ease;
      color: var(--clr-button-tertiary-text, #e60079);
      &:focus,
      &:hover {
        color: var(--clr-button-tertiary-text-hover, #cc006c);
      }
      &:disabled {
        cursor: not-allowed;
        background-color: transparent;
        color: var(--clr-button-tertiary-disabled-text, #666666) !important;
        border-color: transparent;
      }
    `}
  
  ${({ theme, $size, $isIconButton }) =>
    $size === "l" &&
    css`
      min-height: var(--_button-height-large, 4rem);
      border-radius: var(--btn-border-radius-large, 0px);
      padding: ${$isIconButton
        ? "0"
        : `calc( (var(--_button-height-large, 4rem) - ( var(--btn-border-thickness, 2px) * 2) - ${theme.typography.lineHeight} ) / 2) var(--btn-horizontal-padding, 2rem)`};
      min-width: ${$isIconButton
        ? `var(--_button-height-large, 4rem)`
        : "auto"};
      height: ${$isIconButton
        ? `var(--_button-height-large, 4rem)`
        : "min-content"};
    `}

  ${(props) =>
    props.$full &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.$css &&
    css`
      ${props.$css}
    `}
`;
