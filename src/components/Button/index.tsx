import React, {
  type ReactNode,
  type ButtonHTMLAttributes,
  type ReactElement,
  type Ref,
} from "react";

import { IconFa } from "../IconFa";
import "./styles.css";

import { type ButtonAppearanceType } from "../../types";

export const Button = ({
  appearance = "primary",
  full = false,
  isIconButton = false,
  href,
  children,
  as,
  ref,
  ...buttonHtmlAttributes
}: ButtonHTMLAttributes<HTMLElement> & {
  /** the look and feel of the button */
  appearance?: ButtonAppearanceType;
  /** flag to stretch but to 100% width */
  full?: boolean;
  /** this is a url which will convert the button to an anchor tag */
  href?: string;
  as?: "button" | "a" | "div" | "span";
  /** flag to force button into an icon button shape which is square or round */
  isIconButton?: boolean;
  /** Component reference */
  children?: ReactNode;
  ref?: Ref<
    HTMLButtonElement | HTMLAnchorElement | HTMLDivElement | HTMLSpanElement
  >;
  style?: React.CSSProperties;
}) => {
  const childArray = React.Children.toArray(children);
  const isChildString = typeof childArray[0] === "string";
  const firstElement = childArray[0] as ReactElement<HTMLElement>;

  // button has a fixed width if there is a single icon
  const setIconButton = !!(
    isIconButton ||
    (childArray.length === 1 && !isChildString && firstElement?.type) === IconFa
  );

  const convertedProps = {
    "data-appearance": appearance || "primary",
    "data-is-icon-button": setIconButton,
    "data-full": full,
  };

  const renderedChildren =
    children && childArray.length
      ? React.Children.map(children, (child: ReactNode, index: number) => (
          <span className="spacer" key={index}>
            {child}
          </span>
        ))
      : null;

  return (
    <>
      {(!as || as === "button") && !href ? (
        <button
          className="component-button"
          ref={ref as Ref<HTMLButtonElement>}
          {...convertedProps}
          {...buttonHtmlAttributes}
          {...(href ? { role: "button" } : {})}
        >
          {renderedChildren}
        </button>
      ) : null}
      {as === "a" || href ? (
        <a
          className="component-button"
          href={href}
          ref={ref as Ref<HTMLAnchorElement>}
          {...convertedProps}
          {...buttonHtmlAttributes}
        >
          {renderedChildren}
        </a>
      ) : null}
      {as === "div" ? (
        <div
          className="component-button"
          ref={ref as Ref<HTMLDivElement>}
          {...convertedProps}
          {...buttonHtmlAttributes}
        >
          {renderedChildren}
        </div>
      ) : null}
      {as === "span" ? (
        <span
          ref={ref as Ref<HTMLSpanElement>}
          className="component-button"
          {...convertedProps}
          {...buttonHtmlAttributes}
        >
          {renderedChildren}
        </span>
      ) : null}
    </>
  );
};

export default Button;
