import React, { FunctionComponent, ReactNode } from 'react';
import { useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';

import { StyledBadge } from './styles';

import { SpaceType } from 'src/types';

export type BadgeProps = {
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
};

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
const Badge: FunctionComponent<BadgeProps> = ({ children, ...rest }) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  return (
    <StyledBadge theme={theme} isText={typeof children === 'string'} size="xs" {...rest}>
      {children}
    </StyledBadge>
  );
};

export default Badge;
