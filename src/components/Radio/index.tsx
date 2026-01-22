import React, {
  type InputHTMLAttributes,
  type Ref,
  type ReactNode,
} from "react";

import { ErrorText } from "../ErrorText";

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

  const invalid = props.hasError || !!props.errorMessage?.length;

  return (
    <>
      <label className="component-radio">
        <input
          {...rest}
          className="input"
          aria-invalid={invalid || false}
          disabled={props.disabled || false}
          type="radio"
          ref={ref}
          aria-describedby={
            !!props.id && !!props.errorMessage ? `${props.id}-error` : undefined
          }
        />
        <div className="check-wrapper">
          <span className="check" />
        </div>

        <span className="vertical-align">{props.children || props.value}</span>
      </label>
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
