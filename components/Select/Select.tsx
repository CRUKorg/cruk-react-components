import React from 'react';
import styled, { withTheme } from 'styled-components';

import { COLORS, TYPOGRAPHY, UTILITIES } from '../Constants';
import ErrorText from '../ErrorText/ErrorText';
import { WithLabel } from '../Label';

type StyledInputProps = {
  hasError: boolean,
  error: string,
  label: string;
  hintText: string;
  required: boolean;
}

const StyledInput = styled.select<StyledInputProps>`
  appearance: none;
  background: linear-gradient(
      45deg,
      transparent 50%,
      ${props => props.theme.colors.grayDarker} 50%
    ),
    linear-gradient(
      135deg,
      ${props => props.theme.colors.grayDarker} 50%,
      transparent 50%
    );
  background-position: calc(100% - 16px) 1em, calc(100% - 10px) 1em;
  background-size: 6px 6px;
  background-repeat: no-repeat;
  border-radius: ${props => props.theme.utilities.borderRadius};
  border: solid 2px
    ${props =>
      props.hasError || props.error
        ? props.theme.colors.textError
        : props.theme.colors.gray};
  color: ${props => props.theme.colors.grayDarker};
  display: block;
  font-size: ${props => props.theme.typography.fontSize};
  padding: 7px 24px 5px 10px;
  width: 100%;
  height: 40px;
  transition: border-color 150ms linear;
  &:focus {
    border-color: ${props => props.theme.colors.tertiary};
    outline: 0;
  }
`;

type SelectProps = {
  error: string;
  hasError: boolean;
  label: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  placeholder: string;
  theme?: { colors: {}; typography: {}; utilities: {} };
  type: 'text' | 'number' | 'email' | 'password';
  value: string;
  hintText: string;
  required: boolean;
  children: any;
};

const Select = (props: SelectProps) => {
  const theme = {
    colors: {
      ...COLORS,
      ...props.theme.colors,
    },
    typography: {
      ...TYPOGRAPHY,
      ...props.theme.typography,
    },
    utilities: {
      ...UTILITIES,
      ...props.theme.utilities,
    },
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

Select.defaultProps = {
  theme: {},
};

export default withTheme(Select);
