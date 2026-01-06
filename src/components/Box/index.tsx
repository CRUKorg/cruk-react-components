import React, { type Ref, type HTMLAttributes, type ReactNode } from "react";

import {
  type ColourVariableType,
  type SpacingProps,
  type ColourProps,
} from "../../types";

export type BoxProps = SpacingProps &
  ColourProps &
  HTMLAttributes<HTMLElement> & {
    /** background color of box, this will add default padding */
    backgroundColor?: string | ColourVariableType;
    children?: ReactNode;
    ref?: Ref<HTMLDivElement | HTMLSpanElement>;
    as?: "span" | "div";
    style?: React.CSSProperties;
  };

/**
 * Box is used to wrap other components to add margin and padding.
 * The values will be in the t-shirt sizes specified in the theme sizes.
 * The more specific the the target the higher priority the css will have.
 * For example `margin` will be overridden by the `marginVertical` or `marginHorizontal` props. `marginTop`, `marginBottom`, `marginLeft`, `marginRight` will override the the `marginVertical` and `marginHorizontal` props.
 */
export const Box = ({ ...props }: BoxProps) => {
  const {
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
    as,
    children,
    ref,
    ...htmlAttributes
  } = props;

  const convertedProps = {
    "data-color": textColor,
    "data-bg-color": backgroundColor,
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
      {!as || as === "div" ? (
        <div
          ref={ref as Ref<HTMLDivElement>}
          className={["component-box", "color-props", "spacing-props"].join(
            " ",
          )}
          {...htmlAttributes}
          {...convertedProps}
        >
          {children}
        </div>
      ) : null}
      {as === "span" ? (
        <span
          ref={ref as Ref<HTMLSpanElement>}
          className={["component-box", "color-props", "spacing-props"].join(
            " ",
          )}
          {...htmlAttributes}
          {...convertedProps}
        >
          {children}
        </span>
      ) : null}
    </>
  );
};

export default Box;
