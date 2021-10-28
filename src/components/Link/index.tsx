import React, { FC, AnchorHTMLAttributes, forwardRef, Ref } from "react";

import { useTheme, ThemeProvider } from "styled-components";
import defaultTheme from "src/themes/cruk";

import { TextProps } from "src/components/Text";
import { StyledLink, ChevyWithLevee } from "./styles";

export type LinkProps = AnchorHTMLAttributes<HTMLElement> &
  TextProps & {
    /** link text hover colour */
    textHoverColor?: string;
    /** link appearance varient, undefined is a standarding link withing a text block */
    appearance?: "primary" | "secondary";
    /** styled-components polymorphism where you can use the styling of a link but convert to another element like a button */
    ref?: Ref<HTMLElement>;
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
export const Link: FC<LinkProps> = forwardRef(
  (props: LinkProps, ref?: Ref<HTMLElement>) => {
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

    return (
      <ThemeProvider theme={theme}>
        <StyledLink
          {...props}
          theme={theme}
          rel={rel}
          forwardedAs="a"
          ref={ref}
        >
          {props.appearance === "primary" && (
            <ChevyWithLevee name="chevronRightBold" size="0.8em" />
          )}
          {props.children}
        </StyledLink>
      </ThemeProvider>
    );
  }
);

export default Link;
