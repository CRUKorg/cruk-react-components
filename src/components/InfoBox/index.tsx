import React, { type HTMLAttributes, type Ref, type ReactNode } from "react";

import { Box } from "../Box";
import { Text } from "../Text";
import { Heading } from "../Heading";

import { type ColourVariableType, type SpacingProps } from "../../types";

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
}: SpacingProps &
  HTMLAttributes<HTMLElement> & {
    /** background color of wrapping element, this will add default padding */
    backgroundColor?: ColourVariableType;
    /** Title text */
    titleText: string;
    /** Title text colour */
    titleTextColor?: ColourVariableType;
    /** Description text */
    descriptionText: string;
    /** Description text colour */
    descriptionTextColor?: ColourVariableType;
    /** Space for extra element underneath description */
    children?: ReactNode;
    /** Icon in left column usually 2em squared */
    icon?: ReactNode;
    ref?: Ref<HTMLDivElement>;
  }) => {
  return (
    <div
      className={["component-info-box", "spacing-props", "color-props"].join(
        " ",
      )}
      {...spacingAndHTMLElementProps}
      data-bg-color={backgroundColor || "background-mid"}
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
            textColor={titleTextColor || "text-dark"}
          >
            {titleText}
          </Heading>
        )}
        {descriptionText && (
          <Text
            textColor={descriptionTextColor || "text-dark"}
            marginBottom="none"
          >
            {descriptionText}
          </Text>
        )}
        {children}
      </div>
    </div>
  );
};

export default InfoBox;
