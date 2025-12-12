import styled, { css } from "styled-components";

import { type ThemeType, type ButtonAppearanceType } from "../../types";

const BUTTON_HEIGHT = "3rem";
const BUTTON_HEIGHT_LARGE = "4rem";

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
  box-sizing: border-box;
  min-height: ${BUTTON_HEIGHT};
  height: min-content;
  display: inline-block;
  vertical-align: middle;

  padding: ${({ theme, $isIconButton }) =>
    $isIconButton
      ? "0"
      : `calc( (${BUTTON_HEIGHT} - ( ${theme.button.buttonBorderThickness} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.button.horizontalPadding}`};
  width: ${({ $isIconButton }) =>
    $isIconButton ? `${BUTTON_HEIGHT}` : "auto"};
  min-width: ${({ $isIconButton }) =>
    $isIconButton ? `${BUTTON_HEIGHT}` : "auto"};

  border-radius: ${({ theme }) => theme.button.borderRadius};
  border-style: solid;
  border-width: ${({ theme }) => theme.button.buttonBorderThickness};

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
  text-transform: ${({ theme }) => theme.button.textTransform};
  text-decoration: ${({ theme }) => theme.button.textDecoration};

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
      min-height: ${BUTTON_HEIGHT_LARGE};
      border-radius: ${theme.button.borderRadiusLarge};
      padding: ${$isIconButton
        ? "0"
        : `calc( (${BUTTON_HEIGHT_LARGE} - ( ${theme.button.buttonBorderThickness} * 2) - ${theme.typography.lineHeight} ) / 2) var(--spacing-m, 2rem)`};
      min-width: ${$isIconButton ? `${BUTTON_HEIGHT_LARGE}` : "auto"};
      height: ${$isIconButton ? `${BUTTON_HEIGHT_LARGE}` : "min-content"};
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
