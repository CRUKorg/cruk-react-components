import React, {
  FunctionComponent,
  HTMLAttributes,
  Ref,
  forwardRef,
  ReactNode,
  ElementType,
} from "react";
import { useTheme } from "styled-components";

import defaultTheme from "../../themes/cruk";
import Box from "../Box";
import Text from "../Text";
import Heading from "../Heading";

import { SpacingProps } from "../Spacing";
import { StyledInfoBox } from "./styles";

export type InfoBoxProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    /** background color of wrapping element, this will add default padding */
    backgroundColor?: string;
    /** Title text */
    titleText: string;
    /** Title text colour */
    titleTextColor?: string;
    /** Description text */
    descriptionText: string;
    /** Description text colour */
    descriptionTextColor?: string;
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
const InfoBox: FunctionComponent<InfoBoxProps> = forwardRef(
  (
    {
      children,
      titleText,
      titleTextColor,
      descriptionText,
      descriptionTextColor,
      icon,
      ...spacingAndHTMLElementProps
    }: InfoBoxProps,
    ref?: Ref<HTMLElement>
  ) => {
    const foundTheme = useTheme();
    const theme = {
      ...defaultTheme,
      ...foundTheme,
    };

    const backgroundColorOrDefault =
      spacingAndHTMLElementProps.backgroundColor || theme.tokenColors.grey_200;

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
              textColor={titleTextColor || theme.colors.textDark}
            >
              {titleText}
            </Heading>
          )}
          {descriptionText && (
            <Text
              textColor={descriptionTextColor || theme.colors.textDark}
              marginBottom="none"
            >
              {descriptionText}
            </Text>
          )}
          {children}
        </div>
      </StyledInfoBox>
    );
  }
);

export default InfoBox;
