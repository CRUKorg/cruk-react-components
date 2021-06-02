import React, { FC, InputHTMLAttributes } from 'react';
import { useTheme, ThemeProvider } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import { StyledLabel, StyledInput, SelectedBorder, CheckWrapper, Check, VerticalAlign } from './styles';

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {};

/**
 * Checkboxes allow the user to select one or more items.
 *
 * The value or children becomes the label, if you want an outer label for a checkbox or group of checkboxes please use a legend element
 */
const RadioInput: FC<RadioProps> = props => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const { children, ...propsWithoutChildren } = props;

  return (
    <ThemeProvider theme={theme}>
      <StyledLabel className={props.className} checked={props.checked || false}>
        <StyledInput {...propsWithoutChildren} type="radio" />
        <SelectedBorder></SelectedBorder>
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

export default RadioInput;
