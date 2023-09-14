import styled, { css } from "styled-components";
import { ThemeType } from "../../types";

const CHECK_BOX_SIZE = "1.5rem";
const BUTTON_HEIGHT = "3em";
const BORDER_THICKNESS = "1px";

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

  svg {
    /* asset is little wonky */
    margin-left: 0.05rem;
    path {
      transition: transform 0.25s ease;
      transform: rotateY(90deg);
      transform-origin: center;
    }
  }
`;

export const StyledLabel = styled.label<StyledLabelProps>`
  box-sizing: border-box;
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  line-height: ${({ theme }: StyledLabelProps) => theme.typography.lineHeight};
  font-size: ${({ theme }: ThemeProps) => theme.typography.fontSizeBase};
  font-family: ${({ theme }: StyledLabelProps) =>
    theme.typography.fontFamilyBase};

  background-color: ${({ theme }: ThemeProps) => theme.colors.backgroundLight};
  position: relative;

  cursor: ${({ disabled }: StyledLabelProps) =>
    disabled ? "not-allowed" : "pointer"};
  display: block;

  color: ${({ theme, disabled }: StyledLabelProps) =>
    disabled ? theme.colors.disabled : theme.colors.textDark};
  padding: ${({ theme }: ThemeProps) =>
    `calc( (${BUTTON_HEIGHT} - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.m} calc( (${BUTTON_HEIGHT} - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.xl}`};
  &:focus ~ ${CheckWrapper} ${Check} {
    outline: 2px solid #7aacfe; /* for non-webkit browsers */
    outline: 5px auto -webkit-focus-ring-color;
  }

  svg {
    path {
      fill: ${({ theme, disabled }: StyledLabelProps) =>
        disabled && theme.colors.disabled};
    }
  }

  ${({ theme, disabled: isDisabled, checked }: StyledLabelProps) =>
    theme.utilities.useDefaultFromControls
      ? null
      : css`
          min-height: 2rem;

          ${CheckWrapper} ${Check} {
            border: solid ${BORDER_THICKNESS}
              ${({
                theme: {
                  colors: { primary, disabled, inputBorder },
                },
              }: ThemeProps) =>
                isDisabled ? disabled : checked ? primary : inputBorder};
          }

          &:hover ${CheckWrapper} ${Check} {
            border: solid ${BORDER_THICKNESS}
              ${({
                theme: {
                  colors: { primary, disabled },
                },
              }: ThemeProps) => (isDisabled ? disabled : primary)};
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

          &:checked ~ ${CheckWrapper} svg path {
            transform: rotateY(0deg);
          }
        `}
`;
