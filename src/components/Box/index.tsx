import React, {
  type HTMLAttributes,
  type Ref,
  type ReactNode,
  type ElementType,
} from "react";

import {
  spacingPropsToSpacingPropsInternal,
  type SpacingProps,
} from "../Spacing";
import { StyledBox } from "./styles";

import { type ColourVariableType } from "../../types";

export type BoxProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    /** background color of box, this will add default padding */
    backgroundColor?: string | ColourVariableType;
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
export const Box = ({ ...props }: BoxProps) => {
  const { children, backgroundColor, ref, ...rest } = props;
  const restWithInternalSpacingProps = spacingPropsToSpacingPropsInternal(rest);

  return (
    <StyledBox
      $backgroundColor={backgroundColor}
      {...restWithInternalSpacingProps}
      ref={ref}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
