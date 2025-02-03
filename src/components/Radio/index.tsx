import React, {
  type InputHTMLAttributes,
  type Ref,
  forwardRef,
  type ReactNode,
  type LegacyRef,
} from "react";
import { useTheme, ThemeProvider } from "styled-components";

import { crukTheme as defaultTheme } from "../../themes/cruk";
import { ErrorText } from "../ErrorText";

import {
  StyledLabel,
  StyledInput,
  SelectedBorder,
  CheckWrapper,
  Check,
  VerticalAlign,
} from "./styles";

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: Ref<HTMLInputElement> | LegacyRef<HTMLInputElement>;
  /** flag for error styling */
  hasError?: boolean;
  /** error message text  */
  errorMessage?: string;
  children?: ReactNode;
};

/**
 * A single radio button which should be part of a field set of radio buttons
 *
 * The value or children becomes the label, if you want an outer label for a radio or group of radios please use a LegendWrapper component
 */
export const Radio = forwardRef(
  (props: RadioProps, ref?: Ref<HTMLInputElement>) => {
    const foundTheme = useTheme();
    const theme = {
      ...defaultTheme,
      ...foundTheme,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, hasError, errorMessage, ...rest } = props;
    return (
      <ThemeProvider theme={theme}>
        <StyledLabel
          $hasError={props.hasError || !!props.errorMessage || false}
          className={props.className}
          $checked={props.checked || false}
          $disabled={props.disabled || false}
        >
          <StyledInput
            {...rest}
            disabled={props.disabled || false}
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
  },
);

Radio.displayName = "Radio";

export default Radio;
