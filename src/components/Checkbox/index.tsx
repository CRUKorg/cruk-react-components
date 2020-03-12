import React from 'react';
import styled, { withTheme } from 'styled-components';
import { COLORS, UTILITIES } from '../../themes/cruk';

type StyledLabelProps = {
  checked: boolean;
  theme: any;
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
  theme?: { colors: {}; utilities: {} };
  value: string;
  children: any;
};

const Checkbox = (props: CheckboxProps) => {
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
    <StyledLabel checked={props.checked} theme={theme}>
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
  );
};

Checkbox.defaultProps = {
  theme: {},
};

export default withTheme(Checkbox);
