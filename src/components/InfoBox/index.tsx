import React, {
  type HTMLAttributes,
  type Ref,
  type ReactNode,
  type ElementType,
} from "react";
import { useTheme } from "styled-components";

import { crukTheme as defaultTheme } from "../../themes/cruk";
import { Box } from "../Box";
import { Text } from "../Text";
import { Heading } from "../Heading";

import { type SpacingProps } from "../Spacing";
import { StyledInfoBox } from "./styles";
import { themeColorOrString } from "../../utils/themeUtils";
import { type ColourVariableType } from "src/types";

export type InfoBoxProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    /** background color of wrapping element, this will add default padding */
    backgroundColor?: ColourVariableType | string;
    /** Title text */
    titleText: string;
    /** Title text colour */
    titleTextColor?: ColourVariableType | string;
    /** Description text */
    descriptionText: string;
    /** Description text colour */
    descriptionTextColor?: ColourVariableType | string;
    /** Space for extra element underneath description */
    children?: ReactNode;
    /** Icon in left column usually 2em squared */
    icon?: ReactNode;
    ref?: Ref<HTMLElement>;
    /** styled-component polymorphic feature so you take the styling of a box and cast the component to be a "span" for example */
    as?: ElementType;
  };

/**
   * Box is used to wrap other components to add margin and padding. The values will be in the t-shirt sizes specified in the theme sizes.
  
  The more specific the the target the higher priority the css will have. For example `margin` will be overridden by the `marginVertical` or `marginHorizontal` props. `marginTop`, `marginBottom`, `marginLeft`, `marginRight` will override the the `marginVertical` and `marginHorizontal` props.
   */
export const InfoBox = ({
  children,
  titleText,
  titleTextColor,
  descriptionText,
  descriptionTextColor,
  icon,
  backgroundColor,
  ref,
  ...spacingAndHTMLElementProps
}: InfoBoxProps) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  const backgroundColorOrDefault = backgroundColor
    ? themeColorOrString(backgroundColor)
    : "var(--clr-cruk-grey-200, #e6e6e6)";

  const textColorOrDefault = titleTextColor
    ? themeColorOrString(titleTextColor)
    : "var(--clr-text-dark, #000)";

  const descriptionTextColorOrDefault = descriptionTextColor
    ? themeColorOrString(descriptionTextColor)
    : "var(--clr-text-dark, #000)";

  return (
    <StyledInfoBox
      theme={theme}
      {...spacingAndHTMLElementProps}
      backgroundColor={backgroundColorOrDefault}
      margin={spacingAndHTMLElementProps.margin || "none"}
      ref={ref}
    >
      {icon && <Box marginRight="s">{icon}</Box>}
      <div>
        {titleText && (
          <Heading
            as="p"
            margin="none"
            h4
            marginBottom="xxs"
            textColor={textColorOrDefault}
          >
            {titleText}
          </Heading>
        )}
        {descriptionText && (
          <Text textColor={descriptionTextColorOrDefault} marginBottom="none">
            {descriptionText}
          </Text>
        )}
        {children}
      </div>
    </StyledInfoBox>
  );
};

export default InfoBox;
