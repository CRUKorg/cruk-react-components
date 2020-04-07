import React, { FunctionComponent } from 'react';
import styled, { withTheme } from 'styled-components';

import defaultTheme from '../../themes/cruk';
import ErrorText from '../ErrorText';
import { WithLabel } from '../Label';

import { SpacingProps } from '../Spacing';
import { ThemeType } from '../../themes/types';

type StyledInputProps = SpacingProps & {
  hasError: boolean;
  error: string;
  label: string;
  hintText: string;
  required: boolean;
  theme?: ThemeType;
};

const StyledInput = styled.select<StyledInputProps>`
  appearance: none;
  background: ${({
    theme: {
      colors: { selectBackground },
    },
  }) =>
    `linear-gradient(
      45deg,
      transparent 50%,
      ${selectBackground} 50%
    ),
    linear-gradient(135deg, ${selectBackground} 50%, transparent 50%)`};
  background-position: calc(100% - 16px) 1em, calc(100% - 10px) 1em;
  background-size: 6px 6px;
  background-repeat: no-repeat;
  border-radius: ${props => props.theme.utilities.borderRadius};
  border: solid 2px
    ${props => (props.hasError || props.error ? props.theme.colors.textError : props.theme.colors.inputBorder)};
  color: ${props => props.theme.colors.textDark};
  display: block;
  font-size: ${props => props.theme.fontSizes.medium};
  padding: 7px 24px 5px 10px;
  width: 100%;
  height: 40px;
  transition: border-color 150ms linear;
  &:focus {
    border-color: ${props => props.theme.colors.tertiary};
    outline: 0;
  }
`;

type SelectProps = SpacingProps & {
  error: string;
  hasError: boolean;
  label: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  placeholder: string;
  type: 'text' | 'number' | 'email' | 'password';
  value: string;
  hintText: string;
  required: boolean;
  theme?: ThemeType;
};

const Select: FunctionComponent<SelectProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  return (
    <WithLabel {...props}>
      <StyledInput {...props} theme={theme}>
        {props.children}
      </StyledInput>
      {!!props.error && <ErrorText>{props.error}</ErrorText>}
    </WithLabel>
  );
};

export default withTheme(Select);
