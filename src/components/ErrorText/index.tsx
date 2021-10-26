import React, { FC, HTMLAttributes } from "react";
import { useTheme } from "styled-components";

import defaultTheme from "src/themes/cruk";
import { SpacingProps } from "src/components/Spacing";
import { StyledErrorText } from "./styles";

export type ErrorTextProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    as?: string;
  };

/**
 *
 * To be used in forms for inline validation. Applies styling and accessibility attribute so that it will be read by screen readers.
 *
 * Please be aware that some input components already have this component built in and can be passed an "errorMessage" prop
 */
const ErrorText: FC<ErrorTextProps> = ({ children, as = "span", ...props }) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  return (
    <StyledErrorText forwardedAs={as} {...props} theme={theme} role="alert">
      {children}
    </StyledErrorText>
  );
};

export default ErrorText;
