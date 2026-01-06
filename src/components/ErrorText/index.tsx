import React, { type Ref, type HTMLAttributes } from "react";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import { IconFa } from "../IconFa";
import { Box } from "../Box";

import { removeEmpty } from "../../utils/Helper";

import {
  type SpacingProps,
  type TextProps,
  type ColourProps,
} from "../../types";

/**
 *
 * To be used in forms for inline validation. Applies styling and accessibility attribute so that it will be read by screen readers.
 *
 * Please be aware that some input components already have this component built in and can be passed an "errorMessage" prop
 */
export function ErrorText({
  textColor,
  backgroundColor,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginVertical,
  marginHorizontal,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingVertical,
  paddingHorizontal,
  textSize,
  textAlign,
  textWeight,
  textFontFamily,
  wordBreak,
  overflowWrap,
  as,
  children,
  ref,
  ...htmlAttributes
}: SpacingProps &
  TextProps &
  ColourProps &
  HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
    as?: "span" | "div" | "p";
    ref?: Ref<HTMLSpanElement | HTMLDivElement | HTMLParagraphElement>;
  }) {
  const convertedProps = {
    "data-color": textColor,
    "data-bg-color": backgroundColor,
    "data-text-size": textSize,
    "data-text-align": textAlign,
    "data-text-weight": textWeight,
    "data-text-font-family": textFontFamily,
    "data-word-break": wordBreak,
    "data-overflow-wrap": overflowWrap,
    "data-margin": margin,
    "data-margin-top": marginTop,
    "data-margin-right": marginRight,
    "data-margin-bottom": marginBottom,
    "data-margin-left": marginLeft,
    "data-margin-vertical": marginVertical,
    "data-margin-horizontal": marginHorizontal,
    "data-padding": padding,
    "data-padding-top": paddingTop,
    "data-padding-right": paddingRight,
    "data-padding-bottom": paddingBottom,
    "data-padding-left": paddingLeft,
    "data-padding-vertical": paddingVertical,
    "data-padding-horizontal": paddingHorizontal,
  };

  const convertedPropsFiltered = removeEmpty(convertedProps);

  const shouldShowIcon = typeof children === "string" && children.length;

  const innerContent = (
    <>
      {shouldShowIcon ? (
        <Box as="span" marginRight="xxs">
          <IconFa faIcon={faTriangleExclamation} size="1em" />
        </Box>
      ) : null}
      {children}
    </>
  );
  return (
    <>
      {!as || as === "span" ? (
        <span
          className={[
            "component-error-text",
            "text-props",
            "spacing-props",
            "color-props",
          ].join(" ")}
          ref={ref as Ref<HTMLSpanElement>}
          {...htmlAttributes}
          {...convertedPropsFiltered}
          role="alert"
        >
          {innerContent}
        </span>
      ) : null}
      {as === "div" ? (
        <div
          className={[
            "component-error-text",
            "text-props",
            "spacing-props",
            "color-props",
          ].join(" ")}
          ref={ref as Ref<HTMLDivElement>}
          {...htmlAttributes}
          {...convertedPropsFiltered}
          role="alert"
        >
          {innerContent}
        </div>
      ) : null}
      {as === "p" ? (
        <p
          className={[
            "component-error-text",
            "text-props",
            "spacing-props",
            "color-props",
          ].join(" ")}
          ref={ref as Ref<HTMLParagraphElement>}
          {...htmlAttributes}
          {...convertedPropsFiltered}
          role="alert"
        >
          {innerContent}
        </p>
      ) : null}
    </>
  );
}

export default ErrorText;
