import styled, { css } from "styled-components";

import { ThemeType } from "../../types";

const MIN_HEIGHT = "48px";

const crossBase64 =
  "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";

const checkBase64 =
  "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";

type ExtraProps = {
  theme: ThemeType;
};

type StyledInputProps = {
  hasError: boolean;
  isValid: boolean;
  theme: ThemeType;
  isValidVisible?: boolean;
  isInvalidVisible?: boolean;
};

export const Extra = styled.span<ExtraProps>`
  box-sizing: border-box;
  display: block;
  background-color: ${({ theme }: ExtraProps) =>
    theme.colors.textInputExtraInfo};
  color: ${({ theme }: ExtraProps) => theme.colors.textDark};
  font-size: ${({ theme }: ExtraProps) => theme.fontSizes.m};
  line-height: ${({ theme }: ExtraProps) => theme.typography.lineHeight};
  font-weight: ${({ theme }: ExtraProps) => theme.typography.fontWeightLight};
  padding: ${({ theme }: ExtraProps) =>
    `calc((${MIN_HEIGHT} - 1em ) / 2) ${theme.spacing.xs}`};
  margin: 0;
  line-height: 1rem;
  width: 100%;
`;

export const ExtraLeft = styled(Extra)`
  box-sizing: border-box;
  width: auto;
  vertical-align: middle;
  height: ${MIN_HEIGHT};

  button {
    min-height: ${({ theme }: ExtraProps) =>
      `calc(${MIN_HEIGHT} - (2 * ${theme.utilities.inputBorderWidth}))`} !important;
  }
`;

export const ExtraRight = styled(Extra)`
  box-sizing: border-box;
  width: auto;
  border: ${({ theme }: ExtraProps) =>
    `solid ${theme.utilities.inputBorderWidth} ${theme.colors.textInputBorder}`};
  transition: border-color 150ms linear;
  border-left: 0;
  background-color: transparent;
  padding: 0;
  height: ${MIN_HEIGHT};
  vertical-align: middle;

  button {
    min-height: ${({ theme }: ExtraProps) =>
      `calc(${MIN_HEIGHT} - (2 * ${theme.utilities.inputBorderWidth}))`} !important;
  }
`;

export const ExtraWrapper = styled.span`
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const StyledInputWrapper = styled.span<StyledInputProps>`
  box-sizing: border-box;
  position: relative;
  display: block;
  flex: 1 1;
  &:after {
    display: ${({ isValidVisible, isInvalidVisible }) =>
      !!isInvalidVisible || !!isValidVisible ? "block" : "none"};
    position: absolute;
    width: 2em;
    z-index: 1;
    bottom: 0;
    right: 0;
    content: "";
    top: 0;
    background-repeat: no-repeat;
    background-position: ${({ theme }: StyledInputProps) =>
      `calc( 100% - ${theme.spacing.xxs}) 50% `};
    ${({ isValid, isInvalidVisible }: StyledInputProps) =>
      !isValid &&
      isInvalidVisible &&
      css`
        background-image: url("data:image/png;base64,${crossBase64}");
      `}
    ${({ isValid, isValidVisible }: StyledInputProps) =>
      isValid &&
      isValidVisible &&
      css`
        background-image: url("data:image/png;base64,${checkBase64}");
      `}
  }
`;

export const StyledInput = styled.input<StyledInputProps>`
  box-sizing: border-box;
  background-color: ${({ theme }: ExtraProps) => theme.colors.backgroundLight};
  background-image: none;
  border: ${({ hasError, theme }: StyledInputProps) =>
    `solid ${theme.utilities.inputBorderWidth} ${
      hasError ? theme.colors.textError : theme.colors.textInputBorder
    }`};
  border-radius: 0;
  color: ${({ theme }: ExtraProps) => theme.colors.textDark};
  display: block;
  font-size: ${({ theme }: ExtraProps) => theme.fontSizes.m};
  line-height: ${({ theme }: ExtraProps) => theme.typography.lineHeight};
  min-width: 3em;
  padding: ${({ theme }: ExtraProps) =>
    `calc((${MIN_HEIGHT} - (${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.xs}`};

  /* Make sure text doesn't go behind the valid indicatior icon */
  ${({ isValidVisible, isInvalidVisible }) =>
    (isValidVisible || isInvalidVisible) &&
    css`
      padding-right: 3rem;
    `}

  width: 100%;
  transition: border-color 150ms linear;
  &:disabled {
    border-color: ${({ theme }: ExtraProps) => theme.colors.disabled};
    color: ${({ theme }: ExtraProps) => theme.colors.disabled};
  }

  ${({ theme }: ExtraProps) =>
    !theme.utilities.useDefaultFocusRect
      ? css`
          &:focus {
            outline: 0;
            border-color: ${theme.colors.tertiary};
            ~ ${ExtraRight} {
              border-color: ${theme.colors.tertiary};
            }
          }
        `
      : null};

  ${({ hasError, theme }: StyledInputProps) =>
    hasError &&
    css`
      ~ ${ExtraRight} {
        border-color: ${theme.colors.textError};
      }
    `}
  &:-webkit-autofill,
    &:-webkit-autofill:focus {
    box-shadow: 0 0 0 3em white inset !important;
  }
`;
