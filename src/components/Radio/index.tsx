import React, { FunctionComponent } from 'react';
import styled, { withTheme, css } from 'styled-components';

import defaultTheme from '../../themes/cruk';

import { ThemeType } from '../../themes/types';

type StyledLabelProps = {
  checked: boolean;
};

const CheckWrapper = styled.div`
  display: inline-block;
  height: 2rem;
  width: 2rem;
  position: absolute;
  top: calc(100% / 2 - 1rem);
  left: 1rem;
`;

const Check = styled.span`
  display: block;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.radioBorder};
  border-radius: 100%;
  height: 2rem;
  width: 2rem;
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
    height: 1.5rem;
    width: 1.5rem;
    top: calc(50% - 0.75rem);
    left: calc(50% - 0.75rem);
    margin: auto;
    transition: background-color 0.25s linear;
  }
`;

const StyledLabel = styled.label<StyledLabelProps>`
  position: relative;
  border-radius: ${props => props.theme.utilities.borderRadius};
  border: solid 2px
    ${({ checked, theme }) =>
      checked && !theme.utilities.useDefaultFocusRect ? theme.colors.primary : theme.colors.inputBorder};
  cursor: pointer;
  display: inline-block;
  font-weight: ${props => (props.checked ? 'bold' : 'normal')};
  padding: ${({
    theme: {
      spacing: { extraExtraExtraSmall },
    },
  }) => extraExtraExtraSmall};
  vertical-align: middle;

  &:focus ~ ${CheckWrapper} ${Check} {
    outline: 2px solid #7aacfe; /* for non-webkit browsers */
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${({ theme }) =>
    theme.utilities.useDefaultFromControls
      ? null
      : css`
          padding: 1rem 1rem 1rem 4rem;
          min-height: 4rem;

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

const StyledInput = styled.input`
  margin-right: ${({
    theme: {
      spacing: { extraExtraExtraSmall },
    },
  }) => extraExtraExtraSmall};
  ${({ theme }) =>
    theme.utilities.useDefaultFromControls
      ? null
      : css`
          position: absolute;
          left: ${({
            theme: {
              spacing: { extraExtraExtraSmall },
            },
          }) => extraExtraExtraSmall};
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

type RadioProps = {
  checked: boolean;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  className?: string;
  disabled?: boolean;
  theme?: ThemeType;
};

const RadioInput: FunctionComponent<RadioProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  return (
    <StyledLabel className={props.className} checked={props.checked} theme={theme}>
      <StyledInput
        checked={props.checked}
        disabled={props.disabled}
        onChange={props.onChange}
        name={props.name}
        type="radio"
        value={props.value}
      />
      {theme.utilities.useDefaultFromControls ? null : (
        <CheckWrapper>
          <Check />
        </CheckWrapper>
      )}
      <VerticalAlign>{props.children || props.value}</VerticalAlign>
    </StyledLabel>
  );
};

export default withTheme(RadioInput);
