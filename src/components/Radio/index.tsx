import React, { FC, InputHTMLAttributes } from 'react';
import styled, { withTheme, css, ThemeProvider } from 'styled-components';

import defaultTheme from '../../themes/cruk';

import { ThemeType } from '../../themes/types';

const RADIO_SIZE = '1.5rem';
const RADIO_INNER_SIZE = '1rem';

type StyledLabelProps = {
  checked: boolean;
};

const CheckWrapper = styled.div`
  display: inline-block;
  height: ${RADIO_SIZE};
  width: ${RADIO_SIZE};
  position: absolute;
  top: calc(50% - (${RADIO_SIZE} / 2));
  left: ${({
    theme: {
      spacing: { extraSmall },
    },
  }) => extraSmall};
`;

const Check = styled.span`
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

const StyledLabel = styled.label<StyledLabelProps>`
  position: relative;
  border-radius: ${props => props.theme.utilities.borderRadius};
  border: ${({ theme, checked }) =>
    `solid ${theme.utilities.inputBorderWidth} ${
      checked && !theme.utilities.useDefaultFocusRect ? theme.colors.primary : theme.colors.inputBorder
    }`};
  cursor: pointer;
  display: inline-block;
  font-weight: ${props => (props.checked ? 'bold' : 'normal')};
  padding: ${({
    theme: {
      spacing: { extraExtraSmall },
    },
  }) => extraExtraSmall};
  vertical-align: middle;

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

const VerticalAlign = styled.span`
  vertical-align: middle;
  line-height: 100%;
`;

const StyledInput = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  margin-right: ${({
    theme: {
      spacing: { extraExtraSmall },
    },
  }) => extraExtraSmall};
  ${({ theme }) =>
    theme.utilities.useDefaultFromControls
      ? null
      : css`
          position: absolute;
          left: ${({
            theme: {
              spacing: { extraExtraSmall },
            },
          }) => extraExtraSmall};
          opacity: 0;

          &:focus ~ ${CheckWrapper} ${Check} {
            outline: none !important;
            box-shadow: 0 0 0 0.2em #7aacfe;
            box-shadow: 0 0 0 0.2em -webkit-focus-ring-color;
          }

          &:checked ~ ${CheckWrapper} ${Check}::before {
            background: ${({
              theme: {
                colors: { primary },
              },
            }) => primary};
          }
        `}
`;

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  theme?: ThemeType;
};

const RadioInput: FC<RadioProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledLabel className={props.className} checked={props.checked}>
        <StyledInput {...props} type="radio" children={undefined} />
        {theme.utilities.useDefaultFromControls ? null : (
          <CheckWrapper>
            <Check />
          </CheckWrapper>
        )}
        <VerticalAlign>{props.children || props.value}</VerticalAlign>
      </StyledLabel>
    </ThemeProvider>
  );
};

export default withTheme(RadioInput);
