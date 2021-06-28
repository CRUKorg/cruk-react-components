import styled, { css } from 'styled-components';

const CHECK_BOX_SIZE = '1.5rem';
const CHECK_SIZE = '1.125rem';
const BUTTON_HEIGHT = '3em';

type StyledLabelProps = {
  checked: boolean;
  disabled: boolean;
  hasError: boolean;
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
  }) => xs};
`;

export const Check = styled.span`
  display: block;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.selectionBorder};
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
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledLabel = styled.label<StyledLabelProps>`
  position: relative;
  border-radius: ${props => props.theme.utilities.borderRadius};
  border: ${({ theme, checked }) =>
    `solid ${theme.utilities.inputBorderWidth} ${
      checked && !theme.utilities.useDefaultFocusRect ? theme.colors.primary : theme.colors.inputBorder
    }`};
  ${({ hasError }) => hasError && css`
    border: solid ${({ theme }) => theme.utilities.inputBorderWidth} ${({ hasError, theme }) =>
    hasError ? theme.colors.textError : theme.colors.inputBorder};
  `}
  cursor: pointer;
  display: block;
  font-weight: ${({ theme, checked }) => (checked || !theme.utilities.useDefaultFocusRec ? 'bold' : 'normal')};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.disabled : theme.colors.textDark)};
  padding: ${({ theme }) =>
    `calc( (${BUTTON_HEIGHT} - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.m} calc( (${BUTTON_HEIGHT} - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.xl}`};

  &:focus ~ ${CheckWrapper} ${Check} {
    outline: 2px solid #7aacfe; /* for non-webkit browsers */
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${({ theme }) =>
    theme.utilities.useDefaultFromControls
      ? null
      : css`
          min-height: 2rem;
          font-weight: ${({ theme }) => theme.typography.fontWeightHeavy};

          &:hover ${CheckWrapper} ${Check} {
            border: solid 1px
              ${({
                theme: {
                  colors: { primary },
                },
              }) => primary};
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

  ${({ theme }) =>
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
          }) => s};
        `
      : css`
          /* This hides the original input */
          position: absolute;
          left: ${({
            theme: {
              spacing: { xxs },
            },
          }) => xxs};
          opacity: 0;

          &:focus ~ ${SelectedBorder} {
            outline: none !important;
            box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.inputBorderColour};
            box-shadow: 0 0 0 2px -webkit-focus-ring-color;
          }

          &:checked ~ ${CheckWrapper} ${Check} ${CheckGlyph} {
            transform: rotateY(0deg);
          }
        `}
`;
