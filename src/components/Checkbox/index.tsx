import React, { FC, InputHTMLAttributes, Ref, forwardRef } from "react";
import { useTheme, ThemeProvider } from "styled-components";

import defaultTheme from "../../themes/cruk";
import ErrorText from "../ErrorText";

import {
  StyledLabel,
  StyledInput,
  CheckWrapper,
  CheckGlyph,
  Check,
  SelectedBorder,
} from "./styles";

export type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: Ref<HTMLInputElement>;
  /** flag for error styling */
  hasError?: boolean;
  /** error message text  */
  errorMessage?: string;
};

/**
 * Checkboxes allow the user to select one or more items.
 *
 * The value or children becomes the label, if you want an outer label for a checkbox or group of checkboxes please use a LegendWrapper component
 */
const Checkbox: FC<CheckBoxProps> = forwardRef(
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
                <CheckGlyph viewBox="0 0 17.8 17.8">
                  <path d="M0 11.314l1.52-1.52 4.95 4.95 9.794-9.794 1.52 1.52L6.482 17.774l-.01-.01-.01.01z" />
                </CheckGlyph>
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
