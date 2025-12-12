import React, { type HTMLAttributes, type ElementType } from "react";
import { useTheme } from "styled-components";

import { crukTheme as defaultTheme } from "../../themes/cruk";
import {
  spacingPropsToSpacingPropsInternal,
  type SpacingProps,
} from "../Spacing";

import {
  type FontSizeType,
  type WordBreakType,
  type OverflowWrapType,
} from "../../types";
import { H1, H2, H3, H4, H5, H6 } from "./styles";
import { themeColorOrString } from "../../utils/themeUtils";

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
    /** word-break behavior */
    wordBreak?: WordBreakType;
    /** overflow-wrap behavior */
    overflowWrap?: OverflowWrapType;
    /** styled-component polymorphic feature so you take the styling of a header and cast the component to be a "span" for example */
    as?: ElementType;
  };

/**
 * 
 * Use headings consistently to create a clear hierarchy throughout your service.
Markup headings semantically using the appropriate <h#> level HTML element and
use the corresponding heading class (h1, h2, h3, ....). Write all headings in sentence case. Heading differs from the Text component by using a different font-family and it changes the font size according to the screen width breakpoints.
 * 
 */
export function Heading({
  textSize,
  textAlign,
  textColor,
  wordBreak,
  overflowWrap,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ...props
}: HeadingProps) {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  const propsConvertedToInternalSpacingProps =
    spacingPropsToSpacingPropsInternal(props);

  const textColorFinal = textColor
    ? themeColorOrString(textColor)
    : "var(--clr-text-header-default, #000)";

  if (h1)
    return (
      <H1
        {...propsConvertedToInternalSpacingProps}
        theme={theme}
        $textSize={textSize}
        $textAlign={textAlign}
        $textColor={textColorFinal}
        $wordBreak={wordBreak}
        $overflowWrap={overflowWrap}
      />
    );
  if (h2)
    return (
      <H2
        {...propsConvertedToInternalSpacingProps}
        theme={theme}
        $textSize={textSize}
        $textAlign={textAlign}
        $textColor={textColorFinal}
        $wordBreak={wordBreak}
        $overflowWrap={overflowWrap}
      />
    );
  if (h3)
    return (
      <H3
        {...propsConvertedToInternalSpacingProps}
        theme={theme}
        $textSize={textSize}
        $textAlign={textAlign}
        $textColor={textColorFinal}
        $wordBreak={wordBreak}
        $overflowWrap={overflowWrap}
      />
    );
  if (h4)
    return (
      <H4
        {...propsConvertedToInternalSpacingProps}
        theme={theme}
        $textSize={textSize}
        $textAlign={textAlign}
        $textColor={textColorFinal}
        $wordBreak={wordBreak}
        $overflowWrap={overflowWrap}
      />
    );
  if (h5)
    return (
      <H5
        {...propsConvertedToInternalSpacingProps}
        theme={theme}
        $textSize={textSize}
        $textAlign={textAlign}
        $textColor={textColorFinal}
        $wordBreak={wordBreak}
        $overflowWrap={overflowWrap}
      />
    );
  if (h6)
    return (
      <H6
        {...propsConvertedToInternalSpacingProps}
        theme={theme}
        $textSize={textSize}
        $textAlign={textAlign}
        $textColor={textColorFinal}
        $wordBreak={wordBreak}
        $overflowWrap={overflowWrap}
      />
    );
  return (
    <H2
      {...propsConvertedToInternalSpacingProps}
      theme={theme}
      $textSize={textSize}
      $textAlign={textAlign}
      $textColor={textColorFinal}
      $wordBreak={wordBreak}
      $overflowWrap={overflowWrap}
    />
  );
}

export default Heading;
