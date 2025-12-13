import React, {
  type InputHTMLAttributes,
  type Ref,
  type ReactNode,
} from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { ErrorText } from "../ErrorText";
import { IconFa } from "../IconFa";

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
export const Checkbox = (props: CheckBoxProps) => {
  const { children, hasError, errorMessage, ref, ...rest } = props;

  return (
    <>
      <StyledLabel
        $hasError={hasError || !!errorMessage || false}
        $checked={props.checked || props.defaultChecked || false}
        $disabled={props.disabled || false}
      >
        <StyledInput
          {...rest}
          disabled={props.disabled || false}
          type="checkbox"
          ref={ref}
          aria-describedby={
            !!props.id && !!errorMessage ? `${props.id}-error` : undefined
          }
        />
        <SelectedBorder />
        {children || props.value}
        <CheckWrapper>
          <Check>
            <IconFa faIcon={faCheck} color="check" size="1.25em" />
          </Check>
        </CheckWrapper>
      </StyledLabel>
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
