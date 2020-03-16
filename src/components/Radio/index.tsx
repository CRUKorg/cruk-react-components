import React from 'react';
import styled, { withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';

import { ThemeType } from '../../themes/types';

type StyledLabelProps = {
  checked: boolean;
};

const StyledLabel = styled.label<StyledLabelProps>`
  border-radius: ${props => props.theme.utilities.borderRadius};
  border: solid 2px ${props => (props.checked ? props.theme.colors.primary : props.theme.colors.radioLabelBorder)};
  cursor: pointer;
  display: inline-block;
  font-weight: ${props => (props.checked ? 'bold' : 'normal')};
  padding: 5px;
`;

const StyledInput = styled.input`
  margin-right: 5px;
`;

type RadioProps = {
  checked: boolean;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  children: any;
  className?: string;
  disabled?: boolean;
  theme?: ThemeType;
};

const RadioInput = (props: RadioProps) => {
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
      {props.children || props.value}
    </StyledLabel>
  );
};

export default withTheme(RadioInput);
