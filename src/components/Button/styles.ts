import styled, { css } from "styled-components";

import { ThemeType, ButtonAppearanceType } from "src/types";

const BUTTON_HEIGHT = "3rem";
const BUTTON_HEIGHT_LARGE = "4rem";

export const Spacer = styled.span`
  margin-left: ${({ theme }) => theme.spacing.xxs};
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
  css?: any;
};

export const StyledButton = styled.button<StyledButtonProps>`
  box-sizing: border-box;
  min-height: ${BUTTON_HEIGHT};
  display: inline-block;
  vertical-align: middle;
  padding: ${({ theme, isIconButton }) =>
    isIconButton
      ? "0"
      : `calc( (${BUTTON_HEIGHT} - ( ${theme.button.buttonBorderThickness} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.m}`};
  width: ${({ isIconButton }) => (isIconButton ? `${BUTTON_HEIGHT}` : "auto")};
  min-width: ${({ isIconButton }) =>
    isIconButton ? `${BUTTON_HEIGHT}` : "auto"};

  border-radius: ${(props) => props.theme.button.borderRadius};
  border-style: solid;
  border-width: ${({ theme }) => theme.button.buttonBorderThickness};

  transition: color 0.2s ease, background-color 0.2s ease,
    border-color 0.2s ease;

  cursor: pointer;
  font-size: ${({
    theme: {
      fontSizes: { m },
    },
  }) => m};
  font-family: ${({
    theme: {
      typography: { fontFamilyHeadings },
    },
  }) => fontFamilyHeadings};
  font-weight: ${({
    theme: {
      typography: { fontWeightMedium },
    },
  }) => fontWeightMedium};
  text-align: center;
  text-transform: ${(props) => props.theme.button.textTransform};
  text-decoration: ${(props) => props.theme.button.textDecoration};

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
      border-radius: ${({ theme }) => theme.button.borderRadiusLarge};
      padding: ${({ theme, isIconButton }) =>
        isIconButton
          ? "0"
          : `calc( (${BUTTON_HEIGHT_LARGE} - ( ${theme.button.buttonBorderThickness} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.m}`};
      min-width: ${({ isIconButton }) =>
        isIconButton ? `${BUTTON_HEIGHT_LARGE}` : "auto"};
      height: ${({ isIconButton }) =>
        isIconButton ? `${BUTTON_HEIGHT_LARGE}` : "auto"};
    `}

  ${(props: StyledButtonProps) =>
    props.full &&
    css`
      width: 100%;
    `}

  ${(props: StyledButtonProps) => (css as any)([props.css])}
`;
