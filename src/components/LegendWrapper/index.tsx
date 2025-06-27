import React, { type HTMLAttributes, type ReactNode } from "react";
import { useTheme, ThemeProvider } from "styled-components";

import { crukTheme as defaultTheme } from "../../themes/cruk";
import { ErrorText } from "../ErrorText";
import { Text } from "../Text";

import { StyledFieldset, LegendSpan } from "./styles";

export type LegendWrapperProps = HTMLAttributes<HTMLLegendElement> & {
  children?: ReactNode;
  /** legend text */
  legendText: string;
  /** error message text  */
  errorMessage?: string;
  /** flag for error styling */
  hasError?: boolean;
  /** when not required (optional) appears in legend */
  required?: boolean;
  /** hint text */
  hintText?: ReactNode;
};
/**
 * LegendWrapper allows the user to add an outer label for a checkbox / group of checkboxes / radio buttons or a group of radio buttons.
 *
 * hasError and errorMessage props are just props that can be passed into the component.
 * There is no functionality checking if the children are valid/required etc this functionality will be needed to ne added outside of this component.
 */
export function LegendWrapper({
  children,
  legendText,
  required,
  errorMessage,
  hasError,
  hintText,
  ...restOfHTMLAttributes
}: LegendWrapperProps) {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  const hintTextElement =
    !!hintText &&
    (typeof hintText === "string" || typeof hintText === "number") ? (
      <Text as="span">{hintText}</Text>
    ) : (
      hintText
    );
  return (
    <ThemeProvider theme={theme}>
      <StyledFieldset
        $hasError={hasError || !!errorMessage || false}
        $hasHintText={!!hintText}
      >
        {legendText && (
          <legend {...restOfHTMLAttributes}>
            <LegendSpan $hasHintText={!!hintText}>
              {legendText} {!required && <span>(optional)</span>}
            </LegendSpan>
            {hintTextElement}
          </legend>
        )}
        {children}
        {!!errorMessage && (
          <ErrorText marginTop="xxs">{errorMessage}</ErrorText>
        )}
      </StyledFieldset>
    </ThemeProvider>
  );
}

export default LegendWrapper;
