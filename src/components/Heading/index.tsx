import React, { HTMLAttributes, ElementType } from "react";
import { useTheme } from "styled-components";

import defaultTheme from "../../themes/cruk";
import { SpacingProps } from "../Spacing";

import { FontSizeType, WordBreakType, OverflowWrapType } from "../../types";
import { H1, H2, H3, H4, H5, H6 } from "./styles";

export type HeadingProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    /** font size FontSizeType t-shirt sizes  */
    textSize?: FontSizeType;
    /** horizontal alignment of text */
    textAlign?: "left" | "right" | "center";
    /** color of text */
    textColor?: string;
    /** styled-component polymorphic feature so you take the styling of a header and cast the component to be a "span" for example */
    as?: ElementType;
    /** word-break behavior */
    wordBreak?: WordBreakType;
    /** overflow-wrap behavior */
    overflowWrap?: OverflowWrapType;
  };

/**
 * 
 * Use headings consistently to create a clear hierarchy throughout your service.
Markup headings semantically using the appropriate <h#> level HTML element and
use the corresponding heading class (h1, h2, h3, ....). Write all headings in sentence case. Heading differs from the Text component by using a different font-family and it changes the font size according to the screen width breakpoints.
 * 
 */
const Heading = ({ h1, h2, h3, h4, h5, h6, ...props }: HeadingProps) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  const propsWithTheme = {
    ...props,
    theme,
  };

  if (h1) return <H1 {...propsWithTheme} />;
  if (h2) return <H2 {...propsWithTheme} />;
  if (h3) return <H3 {...propsWithTheme} />;
  if (h4) return <H4 {...propsWithTheme} />;
  if (h5) return <H5 {...propsWithTheme} />;
  if (h6) return <H6 {...propsWithTheme} />;
  return <H2 {...propsWithTheme} />;
};

export default Heading;
