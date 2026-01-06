import React, { type HTMLAttributes, type ReactNode } from "react";

import { ErrorText } from "../ErrorText";

export type LegendWrapperProps = HTMLAttributes<HTMLLegendElement> & {
  children?: ReactNode;
  /** legend text */
  legendText: string;
  /** error message text  */
  errorMessage?: string;
  /** flag for error styling */
  hasError?: boolean;
  /** if field is required, when not required (optional) appears in legend */
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
  const hintTextElement =
    !!hintText &&
    (typeof hintText === "string" || typeof hintText === "number") ? (
      <span className="hint-text">{hintText}</span>
    ) : (
      hintText
    );
  return (
    <fieldset
      className="component-legend-wrapper"
      data-has-error={hasError || !!errorMessage || false}
      data-has-hint-text={!!hintText}
    >
      {legendText && (
        <legend {...restOfHTMLAttributes}>
          <span className="legend-span" data-has-hint-text={!!hintText}>
            {legendText}{" "}
            {!required && (
              <span className="required-indication-text">(optional)</span>
            )}
          </span>
          {hintTextElement}
        </legend>
      )}
      {children}
      {!!errorMessage && <ErrorText marginTop="xxs">{errorMessage}</ErrorText>}
    </fieldset>
  );
}

export default LegendWrapper;
