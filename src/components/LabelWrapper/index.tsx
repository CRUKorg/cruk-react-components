import React, { type LabelHTMLAttributes, type ReactNode } from "react";

import { LabelText, Label, RequiredIndicationText, HintText } from "./styles";

type LabelWrapperProps = LabelHTMLAttributes<HTMLLabelElement> & {
  /** label text */
  label: string;
  /** hint text or react element in it's place */
  hintText?: ReactNode;
  /** if field is required, when not required (optional) appears in label */
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
  const hintTextElement =
    !!hintText &&
    ((typeof hintText === "string" && hintText.length) ||
      typeof hintText === "number") ? (
      <HintText>{hintText}</HintText>
    ) : (
      hintText
    );

  return (
    <>
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
    </>
  );
}

export default LabelWrapper;
