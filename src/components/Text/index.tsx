import React, {
  type HTMLAttributes,
  type Ref,
  forwardRef,
  type ElementType,
  type FunctionComponent,
} from "react";
import { useTheme } from "styled-components";

import { crukTheme as defaultTheme } from "../../themes/cruk";

import { type SpacingProps } from "../Spacing";
import {
  type WordBreakType,
  type FontSizeType,
  type OverflowWrapType,
} from "../../types";
import { TextStyled } from "./styles";

// the 'as' prop is for styled component casting
// text hover color prop is only used in Link which extends Text

/**
 * Text is to be used as the main paragraph component (or span using as="span"). Using the Text component is preferred to simply adding text to a div and styling that div, this will guarantee we are always using the correct font and default text colour.
 */
export type TextProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    /** text colour  */
    textColor?: string;
    /** text horizontal alignment  */
    textAlign?: "left" | "right" | "center" | "justify";
    /** font size FontSizeType t-shirt sizes  */
    textSize?: FontSizeType;
    /** font weight theme.typography{fontWeightHeavy/fontWeightNormal/fontWeightMedium/fontWeightLight/fontWeightVLight} is better than a random number */
    textWeight?: number | string;
    /** font family theme.typography{fontFamilyBase/fontFamilyHeadings} is better than a random string */
    textFontFamily?: string;
    /** styled-components polymorphism where you can set this to "span", "p" or "h2" it default to "p" */
    as?: ElementType;
    /** word-break behaviour */
    wordBreak?: WordBreakType;
    /** overflow-wrap behaviour */
    overflowWrap?: OverflowWrapType;
    /** react reference to the DOM element sometime used to scroll to or set focus after an error */
    ref?: Ref<HTMLElement>;
  };

export const Text: FunctionComponent<TextProps> = forwardRef(
  (props: TextProps, ref?: Ref<HTMLElement>) => {
    const foundTheme = useTheme();
    const theme = {
      ...defaultTheme,
      ...foundTheme,
    };

    return <TextStyled {...props} ref={ref} theme={theme} />;
  },
);

export default Text;
