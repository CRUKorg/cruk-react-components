import React, {
  type InputHTMLAttributes,
  type Ref,
  type ReactNode,
} from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { ErrorText } from "../ErrorText";
import { IconFa } from "../IconFa";

/**
 * Checkboxes allow the user to select one or more items.
 *
 * The value or children becomes the label, if you want an outer label for a checkbox or group of checkboxes please use a LegendWrapper component
 */
export const Checkbox = (
  props: InputHTMLAttributes<HTMLInputElement> & {
    ref?: Ref<HTMLInputElement>;
    /** flag for error styling */
    hasError?: boolean;
    /** error message text  */
    errorMessage?: string;
    children?: ReactNode;
  },
) => {
  const { children, hasError, errorMessage, ref, ...rest } = props;

  return (
    <>
      <label className="component-checkbox">
        <input
          {...rest}
          type="checkbox"
          disabled={props.disabled || false}
          aria-invalid={hasError || !!errorMessage || false}
          ref={ref}
          aria-describedby={
            !!props.id && !!errorMessage ? `${props.id}-error` : undefined
          }
        />
        {children || props.value}
        <div className="check-wrapper">
          <div className="check">
            <IconFa faIcon={faCheck} color="text-light" size="full" />
          </div>
        </div>
      </label>
      {!!errorMessage && (
        <ErrorText
          marginTop="xxs"
          id={props.id ? `${props.id}-error` : undefined}
        >
          {errorMessage}
        </ErrorText>
      )}
    </>
  );
};

export default Checkbox;
