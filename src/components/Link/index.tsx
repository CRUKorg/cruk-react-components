import React, {
  type AnchorHTMLAttributes,
  type Ref,
  type ReactNode,
} from "react";

import { type ColourProps, type SpacingProps, type TextProps } from "src/types";

export type LinkProps = Omit<AnchorHTMLAttributes<HTMLElement>, "nonce"> &
  SpacingProps &
  ColourProps &
  TextProps & {
    /** link appearance variant, undefined is a standarding link withing a text block */
    appearance?: "primary" | "secondary";
    ref?: Ref<HTMLAnchorElement | HTMLSpanElement>;
    as?: "a" | "span";
    /** Component children */
    children?: ReactNode;
  };

/** Links are for wrapping plain text or elements to create clickable link.
 * This is to be treated as an anchor tag with the addition of the Text component API.
 * This component contains standard Anchor tag props like 'href' and 'target', but it also contains Text component props like 'textColor' and 'textAlign'.
 *
 * A link should really only be used for navigation to take a user to as new location.
 * The onClick handler can be use for more complicated scenarios.
 *
 * If you want something that looks like a link but behaves like a button ie. nothing to do with navigation, please consider using Link with as='button'
 *
 * If you want something that looks like a button but behaves like a link ie. it takes the user to a new location, please consider using Button and simply passing it an href, it will automatically turn into a link. */
export const Link = ({
  appearance,
  ref,
  children,
  as,
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
  ...htmlAnchorProps
}: LinkProps) => {
  // security by default
  const rel = htmlAnchorProps.rel
    ? htmlAnchorProps.rel
    : htmlAnchorProps.target === "_blank"
      ? "noopener noreferrer"
      : "";

  const convertedProps = {
    "data-appearance": appearance,
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
  // only forward As anchor if we are not casting as something that is not an anchor
  return (
    <>
      {!as || as === "a" ? (
        <a
          className={[
            "component-link",
            "color-props",
            "spacing-props",
            "text-props",
          ].join(" ")}
          ref={ref as Ref<HTMLAnchorElement>}
          {...convertedProps}
          {...htmlAnchorProps}
          rel={rel}
          data-appearance={appearance}
        >
          {children}
        </a>
      ) : null}

      {as === "span" ? (
        <span
          className={[
            "component-link",
            "color-props",
            "spacing-props",
            "text-props",
          ].join(" ")}
          ref={ref as Ref<HTMLAnchorElement>}
          // rel={rel}
          {...htmlAnchorProps}
          {...convertedProps}
          data-appearance={appearance}
        >
          {children}
        </span>
      ) : null}
    </>
  );
};

Link.displayName = "Link";

export default Link;
