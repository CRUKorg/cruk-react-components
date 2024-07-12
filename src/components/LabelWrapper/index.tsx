import React, { type LabelHTMLAttributes, type ReactNode } from "react";
import { useTheme, ThemeProvider } from "styled-components";

import { Text } from "../Text";
import { crukTheme as defaultTheme } from "../../themes/cruk";

import { LabelText, Label, RequiredText } from "./styles";

type LabelWrapperProps = LabelHTMLAttributes<HTMLLabelElement> & {
  /** label text */
  label: string;
  /** hint text or react element in it's place */
  hintText?: ReactNode;
  /** when required (required) appears in label */
  required?: boolean;
  /** flag to stop (required) appearing in label, useful for compound form components like DateInput */
  hideRequiredInLabel?: boolean;
  children?: ReactNode;
};

export function LabelWrapper({
  label,
  hintText,
  required,
  hideRequiredInLabel = false,
  children,
  ...otherHTMLLabelProps
}: LabelWrapperProps) {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  const hintTextElement =
    !!hintText &&
    ((typeof hintText === "string" && hintText.length) ||
      typeof hintText === "number") ? (
      <Text>{hintText}</Text>
    ) : (
      hintText
    );

  return (
    <ThemeProvider theme={theme}>
      {label ? (
        <Label {...otherHTMLLabelProps}>
          <LabelText hasHintText={!!hintText}>
            {label}
            {required && !hideRequiredInLabel && (
              <RequiredText>{` (required)`}</RequiredText>
            )}
          </LabelText>
          {hintTextElement}
          {children}
        </Label>
      ) : (
        <>{children}</>
      )}
    </ThemeProvider>
  );
}

LabelWrapper.defaultProps = {
  required: false,
};

export default LabelWrapper;
