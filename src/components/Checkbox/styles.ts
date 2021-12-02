import styled, { css } from "styled-components";
import { ThemeType } from "../../types";

const CHECK_BOX_SIZE = "1.5rem";
const CHECK_SIZE = "1.125rem";
const BUTTON_HEIGHT = "3em";

type StyledLabelProps = {
  checked: boolean;
  disabled: boolean;
  hasError: boolean;
  theme: ThemeType;
};

type ThemeProps = {
  theme: ThemeType;
};
export const CheckWrapper = styled.div`
  display: inline-block;
  height: ${CHECK_BOX_SIZE};
  width: ${CHECK_BOX_SIZE};
  position: absolute;
  top: calc(50% - (${CHECK_BOX_SIZE} / 2));
  left: ${({
    theme: {
      spacing: { xs },
    },
  }: ThemeProps) => xs};
`;

export const Check = styled.span`
  display: block;
  position: relative;
  border: 1px solid ${({ theme }: ThemeProps) => theme.colors.selectionBorder};
  height: ${CHECK_BOX_SIZE};
  width: ${CHECK_BOX_SIZE};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  transition: border 0.25s ease;
  overflow: hidden;
`;

export const CheckGlyph = styled.svg`
  height: ${CHECK_SIZE};
  width: ${CHECK_SIZE};
  transition: transform 0.25s ease;
  transform: rotateY(90deg);
  transform-origin: center;
  /* asset is little wonky */
  margin-top: -0.125rem;
  margin-left: 0.125rem;

  path {
    fill: ${({ theme }: ThemeProps) => theme.colors.primary};
  }
`;

export const StyledLabel = styled.label<StyledLabelProps>`
  background-color: ${({ theme }: ThemeProps) => theme.colors.backgroundLight};
  position: relative;
  border-width: ${({ theme }: ThemeProps) => theme.utilities.inputBorderWidth};
  border-style: solid;
  border-color: ${({ hasError, theme, checked }: StyledLabelProps) =>
    hasError
      ? theme.colors.textError
      : checked && !theme.utilities.useDefaultFocusRect
      ? theme.colors.primary
      : theme.colors.inputBorder};
  cursor: pointer;
  display: block;
  font-weight: ${({ theme, checked }: StyledLabelProps) =>
    checked || !theme.utilities.useDefaultFocusRect
      ? theme.typography.fontWeightHeavy
      : theme.typography.fontWeightMedium};
  color: ${({ theme, disabled }: StyledLabelProps) =>
    disabled ? theme.colors.disabled : theme.colors.textDark};
  padding: ${({ theme }: ThemeProps) =>
    `calc( (${BUTTON_HEIGHT} - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.m} calc( (${BUTTON_HEIGHT} - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.xl}`};
  &:focus ~ ${CheckWrapper} ${Check} {
    outline: 2px solid #7aacfe; /* for non-webkit browsers */
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${({ theme }: ThemeProps) =>
    theme.utilities.useDefaultFromControls
      ? null
      : css`
          min-height: 2rem;
          &:hover ${CheckWrapper} ${Check} {
            border: solid 1px
              ${({
                theme: {
                  colors: { primary },
                },
              }: ThemeProps) => primary};
          }
        `}
`;

export const SelectedBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

// TODO when we get rid of bootstrap remove !important.
export const StyledInput = styled.input`
  margin-right: 5px !important;

  ${({ theme }: ThemeProps) =>
    theme.utilities.useDefaultFromControls
      ? css`
          position: absolute;
          display: inline-block;
          transform: translate(-50%, -50%);
          top: 50%;
          margin: 0;
          padding: 0;
          left: ${({
            theme: {
              spacing: { s },
            },
          }: ThemeProps) => s};
        `
      : css`
          /* This hides the original input */
          position: absolute;
          left: ${({
            theme: {
              spacing: { xxs },
            },
          }: ThemeProps) => xxs};
          opacity: 0;

          &:focus ~ ${SelectedBorder} {
            outline: none !important;
            box-shadow: inset 0 0 0 2px ${theme.colors.inputBorder};
            box-shadow: inset 0 0 0 2px -webkit-focus-ring-color;
          }

          &:checked ~ ${CheckWrapper} ${Check} ${CheckGlyph} {
            transform: rotateY(0deg);
          }
        `}
`;
