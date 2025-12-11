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
  font-size: ${({
    theme: {
      fontSizes: { m },
    },
  }) => m};
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
      background-color: ${props.theme.colors.buttonPrimaryBackground};
      border-color: ${props.theme.colors.buttonPrimaryBorder};
      color: ${props.theme.colors.buttonPrimaryText} !important;
      &:focus,
      &:hover {
        background-color: ${props.theme.colors.buttonPrimaryBackgroundHover};
        border-color: ${props.theme.colors.buttonPrimaryBorderHover};
        color: ${props.theme.colors.buttonPrimaryTextHover} !important;
      }
      &:disabled {
        cursor: not-allowed;
        background-color: ${props.theme.colors.buttonPrimaryDisabledBackground};
        color: ${props.theme.colors.buttonPrimaryDisabledText} !important;
        border-color: ${props.theme.colors.buttonPrimaryDisabledBorder};
      }
    `}

  ${(props) =>
    props.$appearance === "secondary" &&
    css`
      background-color: ${props.theme.colors.buttonSecondaryBackground};
      border-color: ${props.theme.colors.buttonSecondaryBorder};
      color: ${props.theme.colors.buttonSecondaryText} !important;
      &:focus,
      &:hover {
        background-color: ${props.theme.colors.buttonSecondaryBackgroundHover};
        border-color: ${props.theme.colors.buttonSecondaryBorderHover};
        color: ${props.theme.colors.buttonSecondaryTextHover} !important;
      }
      &:disabled {
        cursor: not-allowed;
        background-color: ${props.theme.colors
          .buttonSecondaryDisabledBackground};
        color: ${props.theme.colors.buttonSecondaryDisabledText} !important;
        border-color: ${props.theme.colors.buttonSecondaryDisabledBorder};
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
      color: ${props.theme.colors.buttonTertiaryText};
      &:focus,
      &:hover {
        color: ${props.theme.colors.buttonTertiaryTextHover};
      }
      &:disabled {
        cursor: not-allowed;
        background-color: transparent;
        color: ${props.theme.colors.buttonTertiaryDisabledText} !important;
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
