import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
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

import { SpacingProps } from "../Spacing";
import { StyledInfoBox } from "./styles";

export type InfoBoxProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    /** background color of box, this will add default padding */
    backgroundColor?: string;
    headingText?: string;
    headingTextColor?: string;
    descriptionText?: string;
    descriptionTextColor?: string;
    /** imported icon definition from "@fortawesome/free-solid-svg-icons" or "@fortawesome/free-brands-svg-icons" */
    css?: string;
    ref?: Ref<HTMLDivElement>;
    children?: ReactNode;
    icon?: ReactNode;
    /** styled-component polymorphic feature so you take the styling of a box and cast the component to be a "span" for example */
    as?: ElementType;
  };

/**
   * Box is used to wrap other components to add margin and padding. The values will be in the t-shirt sizes specified in the theme sizes.
  
  The more specific the the target the higher priority the css will have. For example `margin` will be overridden by the `marginVertical` or `marginHorizontal` props. `marginTop`, `marginBottom`, `marginLeft`, `marginRight` will override the the `marginVertical` and `marginHorizontal` props.
   */
const InfoBox: FunctionComponent<InfoBoxProps> = forwardRef(
  ({ ...props }: InfoBoxProps, ref?: Ref<HTMLDivElement>) => {
    const {
      children,
      css,
      headingText,
      headingTextColor,
      descriptionText,
      descriptionTextColor,
      icon,
      ...rest
    } = props;
    const foundTheme = useTheme();
    const theme = {
      ...defaultTheme,
      ...foundTheme,
    };

    return (
      <StyledInfoBox theme={theme} {...rest} ref={ref}>
        {icon && <Box marginTop="xxs">{icon}</Box>}
        <Box marginTop="xxs">
          {headingText && (
            <Text
              margin="none"
              textWeight={500}
              textSize="l"
              textColor={headingTextColor}
            >
              {headingText}
            </Text>
          )}
          {descriptionText && (
            <Text
              textColor={descriptionTextColor}
              marginBottom={!children ? "xs" : "none"}
            >
              {descriptionText}
            </Text>
          )}
          {children}
        </Box>
      </StyledInfoBox>
    );
  }
);

export default InfoBox;
