import React, { type HTMLAttributes } from "react";

import {
  type SpacingProps,
  type TextProps,
  type ColourProps,
} from "../../types";

export type HeadingProps = SpacingProps &
  TextProps &
  ColourProps &
  HTMLAttributes<HTMLElement> & {
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "legend";
  };

/**
 * 
 * Use headings consistently to create a clear hierarchy throughout your service.
Markup headings semantically using the appropriate <h#> level HTML element and
use the corresponding heading class (h1, h2, h3, ....). Write all headings in sentence case. Heading differs from the Text component by using a different font-family and it changes the font size according to the screen width breakpoints.
 * 
 */
export function Heading({
  textColor,
  backgroundColor,
  textSize,
  textAlign,
  textWeight,
  textFontFamily,
  wordBreak,
  overflowWrap,
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
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  as,
  ...htmlProps
}: HeadingProps) {
  const calculatedHTag = h1
    ? "h1"
    : h2
      ? "h2"
      : h3
        ? "h3"
        : h4
          ? "h4"
          : h5
            ? "h5"
            : h6
              ? "h6"
              : "h2";
  // as can be explicitly set or inferred from h1-h6 props
  const calculatedAs = as ? as : calculatedHTag;

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

  return (
    <>
      {calculatedAs === "h1" ? (
        <h1
          className={[
            "component-heading",
            "color-props",
            "spacing-props",
            "text-props",
          ].join(" ")}
          data-appearance={calculatedHTag}
          {...convertedProps}
          {...htmlProps}
        />
      ) : null}

      {calculatedAs === "h2" ? (
        <h2
          className={[
            "component-heading",
            "color-props",
            "spacing-props",
            "text-props",
          ].join(" ")}
          data-appearance={calculatedHTag}
          {...convertedProps}
          {...htmlProps}
        />
      ) : null}

      {calculatedAs === "h3" ? (
        <h3
          className={[
            "component-heading",
            "color-props",
            "spacing-props",
            "text-props",
          ].join(" ")}
          data-appearance={calculatedHTag}
          {...convertedProps}
          {...htmlProps}
        />
      ) : null}

      {calculatedAs === "h4" ? (
        <h4
          className={[
            "component-heading",
            "color-props",
            "spacing-props",
            "text-props",
          ].join(" ")}
          data-appearance={calculatedHTag}
          {...convertedProps}
          {...htmlProps}
        />
      ) : null}

      {calculatedAs === "h5" ? (
        <h5
          className={[
            "component-heading",
            "color-props",
            "spacing-props",
            "text-props",
          ].join(" ")}
          data-appearance={calculatedHTag}
          {...convertedProps}
          {...htmlProps}
        />
      ) : null}

      {calculatedAs === "h6" ? (
        <h6
          className={[
            "component-heading",
            "color-props",
            "spacing-props",
            "text-props",
          ].join(" ")}
          data-appearance={calculatedHTag}
          {...convertedProps}
          {...htmlProps}
        />
      ) : null}

      {calculatedAs === "p" ? (
        <p
          className={[
            "component-heading",
            "color-props",
            "spacing-props",
            "text-props",
          ].join(" ")}
          {...convertedProps}
          {...htmlProps}
        />
      ) : null}

      {calculatedAs === "span" ? (
        <span
          className={[
            "component-heading",
            "color-props",
            "spacing-props",
            "text-props",
          ].join(" ")}
          {...convertedProps}
          {...htmlProps}
        />
      ) : null}
      {calculatedAs === "legend" ? (
        <legend
          className={[
            "component-heading",
            "color-props",
            "spacing-props",
            "text-props",
          ].join(" ")}
          {...convertedProps}
          {...htmlProps}
        />
      ) : null}
    </>
  );
}

export default Heading;
