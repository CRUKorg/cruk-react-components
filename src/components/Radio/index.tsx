import React, { FC, InputHTMLAttributes, Ref, forwardRef } from "react";
import { useTheme, ThemeProvider } from "styled-components";

import defaultTheme from "src/themes/cruk";
import ErrorText from "../ErrorText";

import {
  StyledLabel,
  StyledInput,
  SelectedBorder,
  CheckWrapper,
  Check,
  VerticalAlign,
} from "./styles";

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: Ref<HTMLInputElement>;
  /** flag for error styling */
  hasError?: boolean;
  /** error message text  */
  errorMessage?: string;
};

/**
 * A single radio button which should be part of a field set of radio buttons
 *
 * The value or children becomes the label, if you want an outer label for a radio or group of radios please use a LegendWrapper component
 */
const Radio: FC<RadioProps> = forwardRef(
  (props: RadioProps, ref?: Ref<HTMLInputElement>) => {
    const foundTheme = useTheme();
    const theme = {
      ...defaultTheme,
      ...foundTheme,
    };
    const { children, ...propsWithoutChildren } = props;
    return (
      <ThemeProvider theme={theme}>
        <StyledLabel
          hasError={props.hasError || !!props.errorMessage || false}
          className={props.className}
          checked={props.checked || false}
          disabled={props.disabled || false}
        >
          <StyledInput
            {...propsWithoutChildren}
            type="radio"
            ref={ref}
            aria-describedby={
              !!props.id && !!props.errorMessage
                ? `${props.id}-error`
                : undefined
            }
          />
          <SelectedBorder />
          {theme.utilities.useDefaultFromControls ? null : (
            <CheckWrapper>
              <Check />
            </CheckWrapper>
          )}
          <VerticalAlign>{props.children || props.value}</VerticalAlign>
        </StyledLabel>
        {!!props.errorMessage && (
          <ErrorText
            marginTop="xxs"
            id={props.id ? `${props.id}-error` : undefined}
          >
            {props.errorMessage}
          </ErrorText>
        )}
      </ThemeProvider>
    );
  }
);

export default Radio;
