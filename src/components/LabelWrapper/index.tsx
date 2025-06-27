import React, { type LabelHTMLAttributes, type ReactNode } from "react";
import { useTheme, ThemeProvider } from "styled-components";

import { Text } from "../Text";
import { crukTheme as defaultTheme } from "../../themes/cruk";

import { LabelText, Label, RequiredIndicationText } from "./styles";

type LabelWrapperProps = LabelHTMLAttributes<HTMLLabelElement> & {
  /** label text */
  label: string;
  /** hint text or react element in it's place */
  hintText?: ReactNode;
  /** when not required (optional) appears in label */
  required?: boolean;
  /** flag to stop (optional) appearing in label, useful for compound form components like DateInput */
  hideRequiredIndicationInLabel?: boolean;
  children?: ReactNode;
};

export function LabelWrapper({
  label,
  hintText,
  required = false,
  hideRequiredIndicationInLabel = false,
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
          <LabelText $hasHintText={!!hintText}>
            {label}
            {!required && !hideRequiredIndicationInLabel && (
              <RequiredIndicationText>{` (optional)`}</RequiredIndicationText>
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

export default LabelWrapper;
