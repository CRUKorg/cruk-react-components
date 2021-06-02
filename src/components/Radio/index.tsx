import React, { FC, InputHTMLAttributes, Ref, forwardRef } from 'react';
import { useTheme, ThemeProvider } from 'styled-components';

import defaultTheme from 'src/themes/cruk';

import { StyledLabel, StyledInput, SelectedBorder, CheckWrapper, Check, VerticalAlign } from './styles';

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: Ref<HTMLInputElement>;
};

/**
 * A single radio button which should be part of a field set of radio buttons
 *
 * The value or children becomes the label, if you want an outer label for a radio or group of radios please use a legend element
 */
const Radio: FC<RadioProps> = forwardRef((props: RadioProps, ref?: Ref<HTMLInputElement>) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const { children, ...propsWithoutChildren } = props;

  return (
    <ThemeProvider theme={theme}>
      <StyledLabel className={props.className} checked={props.checked || false} disabled={props.disabled || false}>
        <StyledInput {...propsWithoutChildren} type="radio" ref={ref} />
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
});

export default Radio;
