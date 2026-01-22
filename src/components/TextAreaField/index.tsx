import React, {
  type ReactNode,
  type TextareaHTMLAttributes,
  type Ref,
} from "react";

import { ErrorText } from "../ErrorText";
import { LabelWrapper } from "../LabelWrapper";

/**
 * TextAreaField lets users enter and edit multiline text.
 */
export const TextAreaField = ({
  errorMessage,
  hasError,
  hintText,
  label,
  resize = "vertical",
  lineCount = 3,
  ref,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
  /** error message text */
  errorMessage?: string;
  /** flag for error styling */
  hasError?: boolean;
  /** hint text */
  hintText?: ReactNode;
  /** label text */
  label: string;
  /** resize behaviour using the resize button on the bottom right of the component */
  resize?: "both" | "vertical" | "horizontal" | "none";
  /** number of visible lines of text before scroll is required this affect the height of the input field */
  lineCount?: number;
  /** react reference to the DOM element sometime used to scroll to or set focus after an error */
  ref?: Ref<HTMLTextAreaElement>;
}) => {
  const invalid = hasError || !!errorMessage?.length;
  return (
    <LabelWrapper
      label={label}
      hintText={hintText}
      required={props.required || false}
    >
      <textarea
        className="component-textarea-field"
        {...props}
        aria-invalid={invalid}
        aria-describedby={
          !!props.id && !!errorMessage ? `${props.id}-error` : undefined
        }
        style={{
          resize: resize,
          height: `${lineCount * 1.5}em`,
        }}
        ref={ref}
        data-hj-suppress
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

export default TextAreaField;
