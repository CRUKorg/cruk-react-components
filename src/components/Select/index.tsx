import React, {
  type ReactNode,
  type SelectHTMLAttributes,
  type Ref,
  forwardRef,
  type LegacyRef,
} from "react";
import { useTheme } from "styled-components";

import { crukTheme as defaultTheme } from "../../themes/cruk";
import { LabelWrapper } from "../LabelWrapper";
import { ErrorText } from "../ErrorText";

import { StyledSelect } from "./styles";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  /** error message text */
  errorMessage?: string;
  /** flag for error styling of component */
  hasError?: boolean;
  /** label text */
  label: string;
  /** hind text or custom component */
  hintText?: ReactNode;
  /** flag to stop (required) appearing in label, useful for compound form components like DateInput */
  hideRequiredInLabel?: boolean;
  /** react DOM reference of object used scrolling to it with errors etc */
  ref?: Ref<HTMLSelectElement> | LegacyRef<HTMLSelectElement>;
};

/**
 * Select components are used for collecting user provided information from a list of options.
 *
 */
export const Select = forwardRef(
  (
    {
      errorMessage,
      hasError,
      required,
      label,
      hintText,
      hideRequiredInLabel,
      ...props
    }: SelectProps,
    ref?: Ref<HTMLSelectElement>,
  ) => {
    const foundTheme = useTheme();
    const theme = {
      ...defaultTheme,
      ...foundTheme,
    };

    return (
      <LabelWrapper
        label={label}
        hintText={hintText}
        required={(!hideRequiredInLabel && required) || false}
      >
        <StyledSelect
          {...props}
          ref={ref}
          theme={theme}
          required={required}
          aria-invalid={hasError || !!errorMessage || false}
          aria-describedby={
            !!props.id && !!errorMessage ? `${props.id}-error` : undefined
          }
          hasError={hasError || !!errorMessage || false}
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
  },
);

export default Select;
