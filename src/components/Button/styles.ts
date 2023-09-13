import styled, { css } from "styled-components";

import { ThemeType, ButtonAppearanceType } from "../../types";

const BUTTON_HEIGHT = "3rem";
const BUTTON_HEIGHT_LARGE = "4rem";

export const Spacer = styled.span`
  margin-left: ${({ theme }: { theme: ThemeType }) => theme.spacing.xxs};
  &:first-of-type {
    margin-left: 0;
  }
`;

type StyledButtonProps = {
  isIconButton: boolean;
  appearance?: ButtonAppearanceType;
  full?: boolean;
  theme: ThemeType;
  href?: string;
  size?: "m" | "l";
  css?: string;
};

export const StyledButton = styled.button<StyledButtonProps>`
  box-sizing: border-box;
  min-height: ${BUTTON_HEIGHT};
  height: min-content;
  display: inline-block;
  vertical-align: middle;

  padding: ${({ theme, isIconButton }: StyledButtonProps) =>
    isIconButton
      ? "0"
      : `calc( (${BUTTON_HEIGHT} - ( ${theme.button.buttonBorderThickness} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.button.horizontalPadding}`};
  width: ${({ isIconButton }: StyledButtonProps) =>
    isIconButton ? `${BUTTON_HEIGHT}` : "auto"};
  min-width: ${({ isIconButton }: StyledButtonProps) =>
    isIconButton ? `${BUTTON_HEIGHT}` : "auto"};

  border-radius: ${({ theme }: StyledButtonProps) => theme.button.borderRadius};
  border-style: solid;
  border-width: ${({ theme }: StyledButtonProps) =>
    theme.button.buttonBorderThickness};

  transition: color 0.2s ease, background-color 0.2s ease,
    border-color 0.2s ease;

  cursor: pointer;
  font-size: ${({
    theme: {
      fontSizes: { m },
    },
  }: StyledButtonProps) => m};
  font-family: ${({
    theme: {
      typography: { fontFamilyHeadings },
    },
  }: StyledButtonProps) => fontFamilyHeadings};
  font-weight: ${({
    theme: {
      typography: { fontWeightMedium },
    },
  }: StyledButtonProps) => fontWeightMedium};
  text-align: center;
  text-transform: ${({ theme }: StyledButtonProps) =>
    theme.button.textTransform};
  text-decoration: ${({ theme }: StyledButtonProps) =>
    theme.button.textDecoration};

  &:focus-visible {
    outline: auto;
  }

  ${(props: StyledButtonProps) =>
    props.appearance === "primary" &&
    css`
      background-color: ${props.theme.colors.buttonPrimaryBackground};
      border-color: ${props.theme.colors.buttonPrimaryBorder};
      color: ${props.theme.colors.buttonPrimaryText} !important;
      :focus,
      :hover {
        background-color: ${props.theme.colors.buttonPrimaryBackgroundHover};
        border-color: ${props.theme.colors.buttonPrimaryBorderHover};
        color: ${props.theme.colors.buttonPrimaryTextHover} !important;
      }
      :disabled {
        cursor: not-allowed;
        background-color: ${props.theme.colors.buttonPrimaryDisabledBackground};
        color: ${props.theme.colors.buttonPrimaryDisabledText} !important;
        border-color: ${props.theme.colors.buttonPrimaryDisabledBorder};
      }
    `}

  ${(props: StyledButtonProps) =>
    props.appearance === "secondary" &&
    css`
      background-color: ${props.theme.colors.buttonSecondaryBackground};
      border-color: ${props.theme.colors.buttonSecondaryBorder};
      color: ${props.theme.colors.buttonSecondaryText} !important;
      :focus,
      :hover {
        background-color: ${props.theme.colors.buttonSecondaryBackgroundHover};
        border-color: ${props.theme.colors.buttonSecondaryBorderHover};
        color: ${props.theme.colors.buttonSecondaryTextHover} !important;
      }
      :disabled {
        cursor: not-allowed;
        background-color: ${props.theme.colors
          .buttonSecondaryDisabledBackground};
        color: ${props.theme.colors.buttonSecondaryDisabledText} !important;
        border-color: ${props.theme.colors.buttonSecondaryDisabledBorder};
      }
    `}

  ${(props: StyledButtonProps) =>
    props.appearance === "tertiary" &&
    css`
      display: inline-block;
      padding: 0;
      border: 0px;
      background-color: rgba(255, 255, 255, 0);
      transition: color 0.2s ease;
      color: ${props.theme.colors.buttonTertiaryText};
      :focus,
      :hover {
        color: ${props.theme.colors.buttonTertiaryTextHover};
      }
      :disabled {
        cursor: not-allowed;
        background-color: transparent;
        color: ${props.theme.colors.buttonTertiaryDisabledText} !important;
        border-color: transparent;
      }
    `}
  
  ${(props: StyledButtonProps) =>
    props.size === "l" &&
    css`
      min-height: ${BUTTON_HEIGHT_LARGE};
      border-radius: ${({ theme }: StyledButtonProps) =>
        theme.button.borderRadiusLarge};
      padding: ${({ theme, isIconButton }: StyledButtonProps) =>
        isIconButton
          ? "0"
          : `calc( (${BUTTON_HEIGHT_LARGE} - ( ${theme.button.buttonBorderThickness} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.m}`};
      min-width: ${({ isIconButton }: StyledButtonProps) =>
        isIconButton ? `${BUTTON_HEIGHT_LARGE}` : "auto"};
      height: ${({ isIconButton }: StyledButtonProps) =>
        isIconButton ? `${BUTTON_HEIGHT_LARGE}` : "min-content"};
    `}

  ${(props: StyledButtonProps) =>
    props.full &&
    css`
      width: 100%;
    `}

  ${(props: StyledButtonProps) =>
    props.css &&
    css`
      ${props.css}
    `}
`;
