import React, {
  type HTMLAttributes,
  type Ref,
  forwardRef,
  type ReactNode,
  type ElementType,
} from "react";
import { useTheme } from "styled-components";

import { crukTheme as defaultTheme } from "../../themes/cruk";

import {
  spacingPropsToSpacingPropsInternal,
  type SpacingProps,
} from "../Spacing";
import { StyledBox } from "./styles";

export type BoxProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    /** background color of box, this will add default padding */
    backgroundColor?: string;
    ref?: Ref<HTMLDivElement>;
    children?: ReactNode;
    /** styled-component polymorphic feature so you take the styling of a box and cast the component to be a "span" for example */
    as?: ElementType;
  };

/**
 * Box is used to wrap other components to add margin and padding.
 * The values will be in the t-shirt sizes specified in the theme sizes.
 * The more specific the the target the higher priority the css will have.
 * For example `margin` will be overridden by the `marginVertical` or `marginHorizontal` props. `marginTop`, `marginBottom`, `marginLeft`, `marginRight` will override the the `marginVertical` and `marginHorizontal` props.
 */
export const Box = forwardRef(
  ({ ...props }: BoxProps, ref?: Ref<HTMLDivElement>) => {
    const { children, backgroundColor, ...rest } = props;
    const foundTheme = useTheme();
    const theme = {
      ...defaultTheme,
      ...foundTheme,
    };
    const restWithInternalSpacingProps =
      spacingPropsToSpacingPropsInternal(rest);

    return (
      <StyledBox
        theme={theme}
        $backgroundColor={backgroundColor}
        {...restWithInternalSpacingProps}
        ref={ref}
      >
        {children}
      </StyledBox>
    );
  },
);

Box.displayName = "Box";

export default Box;
