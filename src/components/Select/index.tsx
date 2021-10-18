import React, {
  FunctionComponent,
  ReactNode,
  SelectHTMLAttributes,
  Ref,
  forwardRef,
} from "react";
import { useTheme } from "styled-components";

import defaultTheme from "src/themes/cruk";
import ErrorText from "src/components/ErrorText";
import LabelWrapper from "src/components/LabelWrapper";

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
  /** react DOM reference of object used scrolling to it with errors etc */
  ref?: Ref<HTMLSelectElement>;
};

/**
 * Select components are used for collecting user provided information from a list of options.
 *
 */
const Select: FunctionComponent<SelectProps> = forwardRef(
  (
    {
      errorMessage,
      hasError,
      required,
      label,
      hintText,
      ...props
    }: SelectProps,
    ref?: Ref<HTMLSelectElement>
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
        required={required || false}
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
            id={!!props.id ? `${props.id}-error` : undefined}
          >
            {errorMessage}
          </ErrorText>
        )}
      </LabelWrapper>
    );
  }
);

export default Select;
