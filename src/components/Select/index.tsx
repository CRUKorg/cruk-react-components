import React, {
  type ReactNode,
  type SelectHTMLAttributes,
  type Ref,
} from "react";

import { LabelWrapper } from "../LabelWrapper";
import { ErrorText } from "../ErrorText";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  /** error message text */
  errorMessage?: string;
  /** flag for error styling of component */
  hasError?: boolean;
  /** label text */
  label: string;
  /** hind text or custom component */
  hintText?: ReactNode;
  /** flag to stop (optional) appearing in label, useful for compound form components like DateInput */
  hideRequiredIndicationInLabel?: boolean;
  /** react DOM reference of object used scrolling to it with errors etc */
  ref?: Ref<HTMLSelectElement>;
};

/**
 * Select components are used for collecting user provided information from a list of options.
 *
 */
export const Select = ({
  errorMessage,
  hasError,
  required,
  label,
  hintText,
  hideRequiredIndicationInLabel,
  ref,
  ...props
}: SelectProps) => {
  return (
    <LabelWrapper
      label={label}
      hintText={hintText}
      required={(!hideRequiredIndicationInLabel && required) || false}
    >
      <select
        className="component-select"
        {...props}
        ref={ref}
        required={required}
        aria-invalid={hasError || !!errorMessage || false}
        aria-describedby={
          !!props.id && !!errorMessage ? `${props.id}-error` : undefined
        }
      />
      {!!errorMessage && (
        <ErrorText
          marginTop="xxs"
          id={props.id ? `${props.id}-error` : undefined}
        >
          {errorMessage}
        </ErrorText>
      )}
    </LabelWrapper>
  );
};

export default Select;
