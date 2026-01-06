import React, { type ReactNode } from "react";
import { type ColourVariableType } from "../../types";
import { themeColorOrString } from "../../utils/themeUtils";

/**
 * Displays a numeric or icon indicator. You can use the icon prop to
indicate the importance of the badge to the user.

Note that depending on how they are used, badges may be confusing for users
of screen readers and similar assistive technologies. While the styling of
badges provides a visual cue as to their purpose, these users will simply
be presented with the content of the badge. Depending on the specific
situation, these badges may seem like random additional words or numbers
at the end of a sentence, link, or button. Unless the context is clear,
consider including additional context with a visually hidden piece of
additional text.
 */
export function Badge({
  children,
  size,
  isSquare,
  backgroundColor,
  textColor,
  borderColor,
}: {
  size?: "xs" | "s" | "m" | "l" | "xl";
  /** contents of badge */
  children?: ReactNode;
  /** forces shape to have equal width and height set by size attribute */
  isSquare?: boolean;
  textColor?: ColourVariableType | string;
  backgroundColor?: ColourVariableType | string;
  borderColor?: ColourVariableType | string;
  style?: React.CSSProperties;
}) {
  const isSquareCalculated = isSquare ?? !(typeof children === "string");
  const textColourThemeOrString = textColor
    ? themeColorOrString(textColor)
    : undefined;
  const backgroundColourThemeOrString = backgroundColor
    ? themeColorOrString(backgroundColor)
    : undefined;
  const borderColourThemeOrString = borderColor
    ? themeColorOrString(borderColor)
    : undefined;

  const convertedProps = {
    "data-size": size,
    "data-is-square": isSquareCalculated,
  };

  return (
    <span
      className={["component-badge"].join(" ")}
      {...convertedProps}
      style={{
        color: textColourThemeOrString,
        backgroundColor: backgroundColourThemeOrString,
        borderColor: borderColourThemeOrString,
      }}
    >
      {children}
    </span>
  );
}

export default Badge;
