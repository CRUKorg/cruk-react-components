import React, { FunctionComponent, HTMLAttributes } from "react";
import { useTheme } from "styled-components";

import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import defaultTheme from "../../themes/cruk";
import { SpacingProps } from "../Spacing";
import { StyledErrorText } from "./styles";
import IconFa from "../IconFa";
import Box from "../Box";

export type ErrorTextProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    as?: React.ElementType;
  };

/**
 *
 * To be used in forms for inline validation. Applies styling and accessibility attribute so that it will be read by screen readers.
 *
 * Please be aware that some input components already have this component built in and can be passed an "errorMessage" prop
 */
const ErrorText: FunctionComponent<ErrorTextProps> = ({
  children,
  as = "span",
  ...props
}) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  return (
    <StyledErrorText forwardedAs={as} {...props} theme={theme} role="alert">
      <Box as="span" marginRight="xxs">
        <IconFa faIcon={faTriangleExclamation} size="1em" />
      </Box>
      {children}
    </StyledErrorText>
  );
};

export default ErrorText;
