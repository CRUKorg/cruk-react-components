import React, {
  type InputHTMLAttributes,
  type Ref,
  type ReactNode,
} from "react";

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
  ref?: Ref<HTMLInputElement>;
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
export const Radio = (props: RadioProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, hasError, errorMessage, ref, ...rest } = props;
  return (
    <>
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
            !!props.id && !!props.errorMessage ? `${props.id}-error` : undefined
          }
        />
        <SelectedBorder />
        <CheckWrapper>
          <Check />
        </CheckWrapper>

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
    </>
  );
};

export default Radio;
