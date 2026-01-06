import React, {
  type InputHTMLAttributes,
  type ReactNode,
  type Ref,
} from "react";

import { ErrorText } from "../ErrorText";
import { LabelWrapper } from "../LabelWrapper";

import { type fontSizes } from "../../types";

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  textSize?: (typeof fontSizes)[number];
  /** error message text  */
  errorMessage?: string;
  /** custom component/text that appears underneath the input field */
  extraBottom?: ReactNode;
  /** custom component/text that appears to the left of the input field for example prefixes like "£" */
  extraLeft?: ReactNode;
  /** custom component/text that appears to the right of the input field for example a search button */
  extraRight?: ReactNode;
  /** custom component/text that appears above the input field for example a url domain */
  extraTop?: ReactNode;
  /** flag for error styling */
  hasError?: boolean;
  /** flag which controls the whether a cross icon or check icon is displayed to the right of the input field */
  isValid?: boolean;
  /** flag to hide or show the check icon when valid */
  isValidVisible?: boolean;
  /** flag to hide or show the cross icon when invalid */
  isInvalidVisible?: boolean;
  /** hint text */
  hintText?: ReactNode;
  /** label text */
  label: string;
  /** flag to stop (optional) appearing in label, useful for compound form components like DateInput */
  hideRequiredIndicationInLabel?: boolean;
  /** react reference to the DOM element sometime used to scroll to or set focus after an error */
  ref?: Ref<HTMLInputElement>;
};

/**
 * TextFields let users enter and edit text. For multiline text entry please consider using the TextAreaFieldComponent.
 * */
export const TextField = ({
  textSize,
  errorMessage,
  extraBottom,
  extraLeft,
  extraRight,
  extraTop,
  hasError,
  hintText,
  isValid,
  isValidVisible,
  isInvalidVisible,
  label,
  hideRequiredIndicationInLabel,
  ref,
  ...props
}: TextFieldProps) => {
  const isValidCalculated =
    typeof isValid !== "undefined"
      ? isValid
      : !hasError && !errorMessage?.length;

  const renderContent = (
    <>
      {!!extraLeft && (
        <span className={["extra", "extra-left"].join(" ")}>{extraLeft}</span>
      )}
      <span
        className="input-wrapper"
        data-is-valid-visible={isValidVisible || false}
        data-is-invalid-visible={isInvalidVisible || false}
      >
        <input
          className="input text-props"
          aria-invalid={!isValidCalculated}
          aria-describedby={
            !!props.id && !!errorMessage ? `${props.id}-error` : undefined
          }
          data-is-valid-visible={isValidVisible || false}
          data-is-invalid-visible={isInvalidVisible || false}
          data-text-size={textSize}
          {...props}
          data-hj-suppress
          ref={ref}
        />
      </span>
      {!!extraRight && (
        <span className={["extra-right", "extra"].join(" ")}>{extraRight}</span>
      )}
    </>
  );

  return (
    <LabelWrapper
      label={label}
      hintText={hintText}
      required={props.required || false}
      hideRequiredIndicationInLabel={hideRequiredIndicationInLabel}
    >
      <span className="component-text-field">
        {!!extraTop && <span className="extra">{extraTop}</span>}
        {!!extraRight || !!extraLeft ? (
          <span className="extra-wrapper">{renderContent}</span>
        ) : (
          renderContent
        )}
        {!!extraBottom && <span className="extra">{extraBottom}</span>}
        {!!errorMessage?.length && (
          <ErrorText
            marginTop="xxs"
            id={props.id ? `${props.id}-error` : undefined}
          >
            {errorMessage}
          </ErrorText>
        )}
      </span>
    </LabelWrapper>
  );
};

export default TextField;
