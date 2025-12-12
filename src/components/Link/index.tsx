import React, {
  type AnchorHTMLAttributes,
  type Ref,
  type ElementType,
  type ReactNode,
} from "react";
import { useTheme, ThemeProvider } from "styled-components";

import { crukTheme as defaultTheme } from "../../themes/cruk";

import { type TextProps } from "../Text";
import { StyledLink } from "./styles";
import { themeColorOrString } from "../../utils/themeUtils";

export type LinkProps = Omit<AnchorHTMLAttributes<HTMLElement>, "nonce"> &
  Omit<TextProps, "as" | "ref" | "nonce"> & {
    /** link text hover colour */
    textHoverColor?: string;
    /** link appearance variant, undefined is a standarding link withing a text block */
    appearance?: "primary" | "secondary";
    /** styled-components polymorphism where you can use the styling of a link but convert to another element like a button */
    ref?: Ref<HTMLElement>;
    /** styled-component polymorphic feature so you take the styling of a link and cast the component to be a "span" for example */
    as?: ElementType;
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
export const Link = (props: LinkProps) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  // security by default
  const rel = props.rel
    ? props.rel
    : props.target === "_blank"
      ? "noopener noreferrer"
      : "";

  // only forward As anchor if we are not casting as something that is not an anchor
  const forwardAs = props.as && props.as !== "a" ? undefined : "a";

  const { textHoverColor, appearance, ref, children, ...rest } = props;

  const textHoverColorFinal = textHoverColor
    ? themeColorOrString(textHoverColor)
    : undefined;

  return (
    <ThemeProvider theme={theme}>
      <StyledLink
        {...rest}
        $textHoverColor={textHoverColorFinal}
        $appearance={appearance}
        theme={theme}
        rel={rel}
        forwardedAs={forwardAs}
        ref={ref}
      >
        {children}
      </StyledLink>
    </ThemeProvider>
  );
};

Link.displayName = "Link";

export default Link;
