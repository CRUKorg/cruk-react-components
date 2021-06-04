import styled, { css } from 'styled-components';

const RADIO_SIZE = '1.5rem';
const RADIO_INNER_SIZE = '1rem';
const BUTTON_HEIGHT = '3em';

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
  }) => xs};
`;

export const Check = styled.span`
  display: block;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.selectionBorder};
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
    content: '';
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
  checked: boolean;
  disabled: boolean;
};

export const StyledLabel = styled.label<StyledLabelProps>`
  width: 100%;
  position: relative;
  border-radius: ${({ theme }) => theme.utilities.borderRadius};
  border: ${({ theme, checked }) =>
    `solid ${theme.utilities.inputBorderWidth} ${
      checked && !theme.utilities.useDefaultFocusRect ? theme.colors.primary : theme.colors.inputBorder
    }`};
  cursor: pointer;
  display: inline-block;
  font-weight: ${({ checked }) => (checked ? 'bold' : 'normal')};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.disabled : theme.colors.textDark)};
  padding: ${({ theme }) =>
    `calc( (${BUTTON_HEIGHT} - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.m} calc( (${BUTTON_HEIGHT} - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) ${theme.spacing.xl}`};
  vertical-align: middle;

  &:focus ~ ${CheckWrapper} ${Check} {
    outline: 2px solid #7aacfe; /* for non-webkit browsers */
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${({ theme }) =>
    theme.utilities.useDefaultFromControls
      ? null
      : css`
          min-height: 2rem;

          &:hover ${CheckWrapper} ${Check} {
            border: solid 2px
              ${({
                theme: {
                  colors: { primary },
                },
              }) => primary};
          }
        `}
`;

export const VerticalAlign = styled.span`
  vertical-align: middle;
  line-height: 100%;
`;

export const SelectedBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledInput = styled.input`
  margin-right: ${({
    theme: {
      spacing: { xxs },
    },
  }) => xxs};

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

          &:checked ~ ${CheckWrapper} ${Check}::before {
            background: ${({ theme }) => theme.colors.primary};
          }
        `}
`;
