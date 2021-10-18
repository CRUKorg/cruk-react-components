import React, {
  FunctionComponent,
  ReactNode,
  ButtonHTMLAttributes,
  Ref,
  forwardRef,
} from "react";
import { useTheme } from "styled-components";

import defaultTheme from "src/themes/cruk";
import Icon from "src/components/Icon";

import { Spacer, StyledButton } from "./styles";

import { ButtonAppearanceType } from "src/types";

export type Props = ButtonHTMLAttributes<HTMLElement> & {
  /** the look and feel of the button */
  appearance?: ButtonAppearanceType;
  /** flag to streatch but to 100% width */
  full?: boolean;
  /** this is a url which will convert the button to an anchor tag */
  href?: string;
  /** the height of the button, this will add padding not increase text size */
  size?: "m" | "l";
  css?: any;
  /** styled-components polymorphism where you can use the styling of a button but convert to another element like an anchor tag */
  as?: any;
  ref?: Ref<HTMLElement>;
};

/**
 * Design system documentation CRUK https://zeroheight.com/23de8a59a/p/180ef6-buttons/b/32e1a2
 *
 * Design system documentation SU2C https://zeroheight.com/79db39f7e/p/22ff0e-button/b/32e1a2
 */
export const Button: FunctionComponent<Props> = forwardRef(
  (props: Props, ref?: Ref<HTMLElement>) => {
    const foundTheme = useTheme();

    const theme = {
      ...defaultTheme,
      ...foundTheme,
    };
    const { appearance = "primary" } = props;
    const childArray = React.Children.toArray(props.children);

    // button has a fixed width if there is a single icon
    const isIconButton =
      // @ts-ignore typescript doesn't seem to like child.type but it works fine
      props.children &&
      childArray.length === 1 &&
      childArray[0] &&
      childArray[0].type === Icon
        ? true
        : false;

    return (
      <StyledButton
        as={props.href ? "a" : "button"}
        {...props}
        appearance={appearance}
        isIconButton={isIconButton}
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
              )
            )
          : null}
      </StyledButton>
    );
  }
);

Button.defaultProps = {
  appearance: "primary",
  full: false,
  size: "m",
};

export default Button;
