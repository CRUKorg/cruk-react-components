import React, {
  FunctionComponent,
  HTMLAttributes,
  Ref,
  forwardRef,
} from "react";
import { useTheme } from "styled-components";

import defaultTheme from "../../themes/cruk";

import { SpacingProps } from "../Spacing";
import { WordBreakType, FontSizeType, ColorKeyType } from "../../types";
import { TextStyled } from "./styles";

// the 'as' prop is for styled component casting
// text hover color prop is only used in Link which extends Text

/**
 * Text is to be used as the main paragraph component (or span using as="span"). Using the Text component is preferred to simply adding text to a div and styling that div, this will guarantee we are always using the correct font and default text colour.
 */
export type TextProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    /** text colour  */
    textColor?: ColorKeyType | string;
    /** text horizontal alignment  */
    textAlign?: "left" | "right" | "center" | "justify";
    /** font size FontSizeType t-shirt sizes  */
    textSize?: FontSizeType;
    /** font weight theme.typography{fontWeightHeavy/fontWeightMedium/fontWeightLight/fontWeightVLight} is better than a random number */
    textWeight?: number;
    /** styled-components polymorphism where you can set this to "span", "p" or "h2" it default to "p" */
    as?: any;
    /** word break behaviour */
    wordBreak?: WordBreakType;
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
  }
);

export default Text;
