import React, {
  FunctionComponent,
  ReactNode,
  TextareaHTMLAttributes,
  Ref,
  forwardRef,
} from "react";
import { useTheme } from "styled-components";

import defaultTheme from "src/themes/cruk";
import ErrorText from "src/components/ErrorText";
import LabelWrapper from "src/components/LabelWrapper";

import { StyledTextArea } from "./styles";

export type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
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
};

/**
 * TextAreaField lets users enter and edit multiline text.
 */
const TextField: FunctionComponent<TextAreaFieldProps> = forwardRef(
  (
    {
      errorMessage,
      hasError,
      hintText,
      label,
      resize = "vertical",
      lineCount = 3,
      ...props
    }: TextAreaFieldProps,
    ref?: Ref<HTMLTextAreaElement>
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
        required={props.required || false}
      >
        <StyledTextArea
          {...props}
          aria-invalid={hasError || !!errorMessage || false}
          aria-describedby={
            !!props.id && !!errorMessage ? `${props.id}-error` : undefined
          }
          hasError={hasError || !!errorMessage || false}
          resize={resize}
          lineCount={lineCount}
          theme={theme}
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
  }
);

TextField.defaultProps = {
  lineCount: 3,
  resize: "vertical",
};

export default TextField;
