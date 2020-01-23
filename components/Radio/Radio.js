// @Flow

import React from 'react';
import styled, { withTheme } from 'styled-components';
import { COLORS, UTILITIES } from '../Constants';

const StyledLabel = styled.label`
  border-radius: ${props => props.theme.utilities.borderRadius};
  border: solid 2px ${props => (props.checked ? props.theme.colors.primary : props.theme.colors.gray)};
  cursor: pointer;
  display: inline-block;
  font-weight: ${props => (props.checked ? 'bold' : 'normal')};
  padding: 5px;
`;

const StyledInput = styled.input`
  margin-right: 5px;
`;

type RadioProps = {
  checked: boolean,
  disabled: boolean,
  name: string,
  onChange: Function,
  theme?: { colors: {}, utilities: {}},
  value: string,
};

const Radio = (props: RadioProps) => {
  const theme = {
    colors: {
      ...COLORS,
      ...props.theme.colors,
    },
    utilities: {
      ...UTILITIES,
      ...props.theme.utilities,
    },
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
      {props.children || props.value}
    </StyledLabel>
  );
};

Radio.defaultProps = {
  theme: {},
};

export default withTheme(Radio);
