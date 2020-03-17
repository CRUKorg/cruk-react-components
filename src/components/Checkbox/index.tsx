import React, { FunctionComponent } from 'react';
import styled, { withTheme, ThemeProvider } from 'styled-components';

import defaultTheme from '../../themes/cruk';

import { ThemeType } from '../../themes/types';

type StyledLabelProps = {
  checked: boolean;
  theme?: ThemeType;
};

const StyledLabel = styled.label<StyledLabelProps>`
  border-radius: ${props => props.theme.utilities.borderRadius};
  border: solid 2px ${props => (props.checked ? props.theme.colors.primary : props.theme.colors.checkboxBorder)};
  cursor: pointer;
  display: block;
  font-weight: ${props => (props.checked ? 'bold' : 'normal')};
  padding: 5px;
`;

// TODO when we get rid of bootstrap remove !important.
const StyledInput = styled.input`
  margin-right: 5px !important;
`;

type CheckboxProps = {
  checked: boolean;
  disabled: boolean;
  name: string; // Adding this because formiK requires name or id.
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  theme?: ThemeType;
};

const Checkbox: FunctionComponent<CheckboxProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledLabel checked={props.checked}>
        <StyledInput
          checked={props.checked}
          disabled={props.disabled}
          name={props.name}
          onChange={props.onChange}
          type="checkbox"
          value={props.value}
        />
        {props.children || props.value}
      </StyledLabel>
    </ThemeProvider>
  );
};

export default withTheme(Checkbox);
