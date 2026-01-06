import React, { type LabelHTMLAttributes, type ReactNode } from "react";

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
      <span className="hint-text">{hintText}</span>
    ) : (
      hintText
    );

  return (
    <>
      {label ? (
        <label className="label-component" {...otherHTMLLabelProps}>
          <span className="label-text" data-hintext={!!hintText}>
            {label}
            {!required && !hideRequiredIndicationInLabel && (
              <span className="required-indication-text">{` (optional)`}</span>
            )}
          </span>
          {hintTextElement}
          {children}
        </label>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default LabelWrapper;
