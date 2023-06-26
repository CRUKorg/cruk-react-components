import React, { InputHTMLAttributes, Ref, forwardRef, ReactNode } from "react";
import { useTheme, ThemeProvider } from "styled-components";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import defaultTheme from "../../themes/cruk";
import ErrorText from "../ErrorText";
import IconFa from "../IconFa";

import {
  StyledLabel,
  StyledInput,
  CheckWrapper,
  Check,
  SelectedBorder,
} from "./styles";

export type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: Ref<HTMLInputElement>;
  /** flag for error styling */
  hasError?: boolean;
  /** error message text  */
  errorMessage?: string;
  children?: ReactNode;
};

/**
 * Checkboxes allow the user to select one or more items.
 *
 * The value or children becomes the label, if you want an outer label for a checkbox or group of checkboxes please use a LegendWrapper component
 */
const Checkbox = forwardRef(
  (props: CheckBoxProps, ref?: Ref<HTMLInputElement>) => {
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
          checked={props.checked || props.defaultChecked || false}
          disabled={props.disabled || false}
        >
          <StyledInput
            {...propsWithoutChildren}
            disabled={props.disabled || false}
            type="checkbox"
            ref={ref}
            aria-describedby={
              !!props.id && !!props.errorMessage
                ? `${props.id}-error`
                : undefined
            }
          />
          <SelectedBorder />
          {children || props.value}
          {theme.utilities.useDefaultFromControls ? null : (
            <CheckWrapper>
              <Check>
                <IconFa faIcon={faCheck} color="primary" size="1.25em" />
              </Check>
            </CheckWrapper>
          )}
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

export default Checkbox;
