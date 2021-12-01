import React, {
  FunctionComponent,
  HTMLAttributes,
  Ref,
  forwardRef,
} from "react";
import { useTheme } from "styled-components";

import defaultTheme from "../../themes/cruk";

import { SpacingProps } from "../Spacing";
import { StyledBox } from "./styles";

export type BoxProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    /** background color of box, this will add default padding */
    backgroundColor?: string;
    css?: string;
    ref?: Ref<HTMLDivElement>;
  };

/**
 * Box is used to wrap other components to add margin and padding. The values will be in the t-shirt sizes specified in the theme sizes.

The more specific the the target the higher priority the css will have. For example `margin` will be overridden by the `marginVertical` or `marginHorizontal` props. `marginTop`, `marginBottom`, `marginLeft`, `marginRight` will override the the `marginVertical` and `marginHorizontal` props.
 */
const Box: FunctionComponent<BoxProps> = forwardRef(
  ({ ...props }: BoxProps, ref?: Ref<HTMLDivElement>) => {
    const { children, css, ...rest } = props;
    const foundTheme = useTheme();
    const theme = {
      ...defaultTheme,
      ...foundTheme,
    };

    return (
      <StyledBox theme={theme} {...rest} ref={ref}>
        {children}
      </StyledBox>
    );
  }
);

export default Box;
