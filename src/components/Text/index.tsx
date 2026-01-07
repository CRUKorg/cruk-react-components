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
    as?:
      | "span"
      | "div"
      | "p"
      | "address"
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "h6";
    ref?: Ref<
      | HTMLSpanElement
      | HTMLDivElement
      | HTMLParagraphElement
      | HTMLHeadingElement
    >;
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
      {!as || as === "p" ? (
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
      ) : null}
      {as === "div" ? (
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
      ) : null}
      {as === "span" ? (
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
      ) : null}
      {as === "address" ? (
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
      ) : null}
      {as === "h1" ? (
        <h1
          className={[
            "component-text",
            "text-props",
            "spacing-props",
            "color-props",
          ].join(" ")}
          ref={ref as Ref<HTMLHeadingElement>}
          {...htmlAttributes}
          {...convertedPropsFiltered}
        />
      ) : null}
      {as === "h2" ? (
        <h2
          className={[
            "component-text",
            "text-props",
            "spacing-props",
            "color-props",
          ].join(" ")}
          ref={ref as Ref<HTMLHeadingElement>}
          {...htmlAttributes}
          {...convertedPropsFiltered}
        />
      ) : null}
      {as === "h3" ? (
        <h3
          className={[
            "component-text",
            "text-props",
            "spacing-props",
            "color-props",
          ].join(" ")}
          ref={ref as Ref<HTMLHeadingElement>}
          {...htmlAttributes}
          {...convertedPropsFiltered}
        />
      ) : null}
      {as === "h4" ? (
        <h4
          className={[
            "component-text",
            "text-props",
            "spacing-props",
            "color-props",
          ].join(" ")}
          ref={ref as Ref<HTMLHeadingElement>}
          {...htmlAttributes}
          {...convertedPropsFiltered}
        />
      ) : null}
      {as === "h5" ? (
        <h5
          className={[
            "component-text",
            "text-props",
            "spacing-props",
            "color-props",
          ].join(" ")}
          ref={ref as Ref<HTMLHeadingElement>}
          {...htmlAttributes}
          {...convertedPropsFiltered}
        />
      ) : null}
      {as === "h6" ? (
        <h6
          className={[
            "component-text",
            "text-props",
            "spacing-props",
            "color-props",
          ].join(" ")}
          ref={ref as Ref<HTMLHeadingElement>}
          {...htmlAttributes}
          {...convertedPropsFiltered}
        />
      ) : null}
    </>
  );
};

export default Text;
