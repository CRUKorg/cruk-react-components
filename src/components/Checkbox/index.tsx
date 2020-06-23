import React, { FC, InputHTMLAttributes } from 'react';
import styled, { css, withTheme, ThemeProvider } from 'styled-components';

import defaultTheme from '../../themes/cruk';
import { ThemeType } from '../../themes/types';

const CHECK_BOX_SIZE = '1.5rem';
const CHECK_SIZE = '1.125rem';

type StyledLabelProps = {
  checked: boolean;
  theme?: ThemeType;
};

const CheckWrapper = styled.div`
  display: inline-block;
  height: ${CHECK_BOX_SIZE};
  width: ${CHECK_BOX_SIZE};
  position: absolute;
  top: calc(50% - (${CHECK_BOX_SIZE} / 2));
  left: ${({
    theme: {
      spacing: { extraSmall },
    },
  }) => extraSmall};
`;

const Check = styled.span`
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

const CheckGlyph = styled.svg`
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

const StyledLabel = styled.label<StyledLabelProps>`
  position: relative;
  border-radius: ${props => props.theme.utilities.borderRadius};
  border: ${({ theme, checked }) =>
    `solid ${theme.utilities.inputBorderWidth} ${
      checked && !theme.utilities.useDefaultFocusRect ? theme.colors.primary : theme.colors.inputBorder
    }`};
  cursor: pointer;
  display: block;
  font-weight: ${({ theme, checked }) => (checked || !theme.utilities.useDefaultFocusRec ? 'bold' : 'normal')};
  padding: 5px;

  &:focus ~ ${CheckWrapper} ${Check} {
    outline: 2px solid #7aacfe; /* for non-webkit browsers */
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${({ theme }) =>
    theme.utilities.useDefaultFromControls
      ? null
      : css`
          padding: 1rem 1rem 1rem 3rem;
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

// TODO when we get rid of bootstrap remove !important.
const StyledInput = styled.input`
  margin-right: 5px !important;

  ${({ theme }) =>
    theme.utilities.useDefaultFromControls
      ? null
      : css`
          /* This hides the original input */
          position: absolute;
          left: ${({
            theme: {
              spacing: { extraExtraSmall },
            },
          }) => extraExtraSmall};
          opacity: 0;

          &:focus ~ ${CheckWrapper} ${Check} {
            outline: 2px solid #7aacfe; /* for non-webkit browsers */
            outline: 5px auto -webkit-focus-ring-color;
          }

          &:checked ~ ${CheckWrapper} ${Check} ${CheckGlyph} {
            transform: rotateY(0deg);
          }
        `}
`;

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  theme?: ThemeType;
};

const Checkbox: FC<CheckboxProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledLabel checked={props.checked}>
        <StyledInput
          checked={props.checked}
          disabled={props.disabled || false}
          name={props.name}
          onChange={props.onChange}
          type="checkbox"
          value={props.value}
        />
        {props.children || props.value}
        {theme.utilities.useDefaultFromControls ? null : (
          <CheckWrapper>
            <Check>
              <CheckGlyph viewBox={`0 0 17.8 17.8`}>
                <path d="M0 11.314l1.52-1.52 4.95 4.95 9.794-9.794 1.52 1.52L6.482 17.774l-.01-.01-.01.01z" />
              </CheckGlyph>
            </Check>
          </CheckWrapper>
        )}
      </StyledLabel>
    </ThemeProvider>
  );
};

export default withTheme(Checkbox);
