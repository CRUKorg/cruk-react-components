import React, { type ReactNode } from "react";
import { type SpaceType } from "../../types";

import { StyledBadge } from "./styles";
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
  size = "xs",
  backgroundColor = "primary",
  borderColor = "transparent",
  textColor = "text-on-primary",
  isSquare,
}: {
  /** background colour of badge */
  backgroundColor?: string;
  /** border colour of badge */
  borderColor?: string;
  /** text colour of badge */
  textColor?: string;
  /** size of badge */
  size?: SpaceType;
  /** contents of badge */
  children?: ReactNode;
  /** forces shape to have equal width and height set by size attribute */
  isSquare?: boolean;
}) {
  const isSquareCalculated = isSquare ?? !(typeof children === "string");

  return (
    <StyledBadge
      $isSquare={isSquareCalculated}
      $size={size}
      $backgroundColor={themeColorOrString(backgroundColor)}
      $borderColor={themeColorOrString(borderColor)}
      $textColor={themeColorOrString(textColor)}
    >
      {children}
    </StyledBadge>
  );
}

export default Badge;
