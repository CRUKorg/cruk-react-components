import React, { type HTMLAttributes } from "react";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import { type SpacingProps } from "../Spacing";
import { StyledErrorText } from "./styles";
import { IconFa } from "../IconFa";
import { Box } from "../Box";

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
export function ErrorText({ children, as = "span", ...props }: ErrorTextProps) {
  const shouldShowIcon = typeof children === "string" && children.length;
  return (
    <StyledErrorText
      forwardedAs={as}
      {...props}
      role="alert"
      textColor="var(--clr-text-error, #d93025)"
      textWeight="var(--typ-font-weight-heavy, 700)"
    >
      {shouldShowIcon ? (
        <Box as="span" marginRight="xxs">
          <IconFa faIcon={faTriangleExclamation} size="1em" />
        </Box>
      ) : null}
      {children}
    </StyledErrorText>
  );
}

export default ErrorText;
