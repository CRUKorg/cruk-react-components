import styled, { css } from "styled-components";
import { ThemeType } from "../../types";

const RADIO_SIZE = "1.5rem";
const RADIO_INNER_SIZE = "0.75rem";
const BUTTON_HEIGHT = "3em";

type ThemeProp = {
  theme: ThemeType;
};

export const CheckWrapper = styled.div`
  display: inline-block;
  height: ${RADIO_SIZE};
  width: ${RADIO_SIZE};
  position: absolute;
  top: calc(50% - (${RADIO_SIZE} / 2));
  left: ${({
    theme: {
      spacing: { xs },
    },
  }: ThemeProp) => xs};
`;

export const Check = styled.span`
  display: block;
  position: relative;
  border: 2px solid ${({ theme }: ThemeProp) => theme.colors.selectionBorder};
  border-radius: 100%;
  height: ${RADIO_SIZE};
  width: ${RADIO_SIZE};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  transition: border 0.25s linear, box-shadow 0.25s linear;

  ::before {
    display: block;
    position: absolute;
    content: "";
    border-radius: 100%;
    height: ${RADIO_INNER_SIZE};
    width: ${RADIO_INNER_SIZE};
    top: calc(50% - (${RADIO_INNER_SIZE} / 2));
    left: calc(50% - (${RADIO_INNER_SIZE} / 2));
    margin: auto;
    transition: background-color 0.25s linear;
  }
`;

type StyledLabelProps = {
  hasError: boolean;
  disabled: boolean;
  checked: boolean;
  theme: ThemeType;
};

export const StyledLabel = styled.label<StyledLabelProps>`
  box-sizing: border-box;
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  line-height: ${({ theme }: StyledLabelProps) => theme.typography.lineHeight};
  font-size: ${({ theme }: StyledLabelProps) => theme.typography.fontSizeBase};
  font-family: ${({ theme }: StyledLabelProps) =>
    theme.typography.fontFamilyBase};

  background-color: ${({ theme }: StyledLabelProps) =>
    theme.colors.backgroundLight};
  width: 100%;
  position: relative;

  cursor: ${({ disabled }: StyledLabelProps) =>
    disabled ? "not-allowed" : "pointer"};
  display: inline-block;

  color: ${({ theme, disabled }: StyledLabelProps) =>
    disabled ? theme.colors.disabled : theme.colors.textDark};
  padding: ${({ theme }: StyledLabelProps) =>
    `calc( (${BUTTON_HEIGHT} - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.m} calc( (${BUTTON_HEIGHT} - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.xl}`};
  vertical-align: middle;

  ${({ theme, disabled: isDisabled, checked }: StyledLabelProps) =>
    theme.utilities.useDefaultFromControls
      ? null
      : css`
          min-height: 2rem;

          ${CheckWrapper} ${Check} {
            border: solid 2px
              ${({
                theme: {
                  colors: { primary, disabled, inputBorder },
                },
              }: ThemeProp) =>
                isDisabled ? disabled : checked ? primary : inputBorder};
          }

          &:hover ${CheckWrapper} ${Check} {
            border: solid 2px
              ${({
                theme: {
                  colors: { primary, disabled },
                },
              }: ThemeProp) => (isDisabled ? disabled : primary)};
          }
        `}
`;

export const VerticalAlign = styled.span`
  display: inline;
  vertical-align: middle;
  line-height: 100%;
  background-color: ${({ theme }: ThemeProp) => theme.colors.backgroundLight};
  min-height: 2em;
  z-index: 1;
`;

export const SelectedBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  z-index: 0;
`;

type StyledInputType = {
  disabled: boolean;
  theme: ThemeType;
};

export const StyledInput = styled.input`
  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  margin-right: ${({
    theme: {
      spacing: { xxs },
    },
  }: StyledInputType) => xxs};

  ${({ theme, disabled }: StyledInputType) =>
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
          }: ThemeProp) => s};
        `
      : css`
          position: absolute;
          left: ${({
            theme: {
              spacing: { xxs },
            },
          }: ThemeProp) => xxs};
          opacity: 0;

          &:focus ~ ${SelectedBorder} {
            outline: none !important;
            box-shadow: inset 0 0 0 2px ${theme.colors.inputBorder};
            box-shadow: inset 0 0 0 2px -webkit-focus-ring-color;
          }

          &:checked ~ ${CheckWrapper} ${Check}::before {
            background: ${disabled
              ? theme.colors.disabled
              : theme.colors.primary};
          }
        `}
`;
