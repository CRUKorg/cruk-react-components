import React, { type Ref, type HTMLAttributes } from "react";

import { removeEmpty } from "../../utils/Helper";

import {
  type ColourProps,
  type SpacingProps,
  type TextProps,
} from "../../types";

export const Text = ({
  textColor,
  backgroundColor,
  textAlign,
  textSize,
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
  as,
  ref,
  ...htmlAttributes
}: HTMLAttributes<HTMLElement> &
  ColourProps &
  SpacingProps &
  TextProps & {
    as?: "span" | "div" | "p" | "address";
    ref?: Ref<HTMLSpanElement | HTMLDivElement | HTMLParagraphElement>;
    style?: React.CSSProperties;
  }) => {
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

  return (
    <>
      {(!as || as === "p") && (
        <p
          className={[
            "component-text",
            "text-props",
            "spacing-props",
            "color-props",
          ].join(" ")}
          ref={ref as Ref<HTMLParagraphElement>}
          {...htmlAttributes}
          {...convertedPropsFiltered}
        />
      )}
      {as === "div" && (
        <div
          className={[
            "component-text",
            "text-props",
            "spacing-props",
            "color-props",
          ].join(" ")}
          ref={ref as Ref<HTMLDivElement>}
          {...htmlAttributes}
          {...convertedPropsFiltered}
        />
      )}
      {as === "span" && (
        <span
          className={[
            "component-text",
            "text-props",
            "spacing-props",
            "color-props",
          ].join(" ")}
          ref={ref as Ref<HTMLSpanElement>}
          {...htmlAttributes}
          {...convertedPropsFiltered}
        />
      )}
      {as === "address" && (
        <address
          className={[
            "component-text",
            "text-props",
            "spacing-props",
            "color-props",
          ].join(" ")}
          ref={ref as Ref<HTMLSpanElement>}
          {...htmlAttributes}
          {...convertedPropsFiltered}
        />
      )}
    </>
  );
};

export default Text;
