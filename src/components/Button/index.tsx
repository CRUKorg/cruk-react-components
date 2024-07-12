import React, {
  type ReactNode,
  type ButtonHTMLAttributes,
  type Ref,
  forwardRef,
  type ReactElement,
  type ElementType,
} from "react";
import { useTheme } from "styled-components";

import { crukTheme as defaultTheme } from "../../themes/cruk";
import { IconFa } from "../IconFa";

import { Spacer, StyledButton } from "./styles";
import { type ButtonAppearanceType } from "../../types";

export type ButtonProps = ButtonHTMLAttributes<HTMLElement> & {
  /** the look and feel of the button */
  appearance?: ButtonAppearanceType;
  /** flag to stretch but to 100% width */
  full?: boolean;
  /** this is a url which will convert the button to an anchor tag */
  href?: string;
  /** the height of the button, this will add padding not increase text size */
  size?: "m" | "l";
  css?: unknown;
  /** styled-components polymorphism where you can use the styling of a button but convert to another element like an anchor tag */
  as?: ElementType;
  /** flag to force button into an icon button shape which is square or round */
  isIconButton?: boolean;
  /** Element reference */
  ref?: Ref<HTMLElement>;
  /** Component reference */
  children?: ReactNode;
};

/**
 * Design system documentation CRUK https://zeroheight.com/23de8a59a/p/180ef6-buttons/b/32e1a2
 *
 * Design system documentation SU2C https://zeroheight.com/79db39f7e/p/22ff0e-button/b/32e1a2
 */
export const Button = forwardRef(
  (props: ButtonProps, ref?: Ref<HTMLElement>) => {
    const foundTheme = useTheme();

    const theme = {
      ...defaultTheme,
      ...foundTheme,
    };
    const { appearance = "primary", isIconButton = false } = props;
    const childArray = React.Children.toArray(props.children);
    const isChildString = typeof childArray[0] === "string";
    const firstElement = childArray[0] as ReactElement;

    // button has a fixed width if there is a single icon
    const setIconButton = !!(
      isIconButton ||
      (childArray.length === 1 && !isChildString && firstElement?.type) ===
        IconFa
    );

    return (
      <StyledButton
        as={props.href ? "a" : "button"}
        {...(props.href ? { role: "button" } : {})}
        {...{
          full: false,
          size: "m",
          ...props,
        }}
        appearance={appearance}
        isIconButton={setIconButton}
        theme={theme}
        ref={ref}
      >
        {props.children && childArray.length
          ? React.Children.map(
              props.children,
              (child: ReactNode, index: number) => (
                <Spacer theme={theme} key={index}>
                  {child}
                </Spacer>
              ),
            )
          : null}
      </StyledButton>
    );
  },
);

export default Button;
