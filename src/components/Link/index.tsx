import React, { FunctionComponent, AnchorHTMLAttributes } from 'react';
import styled, { withTheme } from 'styled-components';

import Text from '../Text';
import defaultTheme from '../../themes/cruk';

import { ThemeType } from 'src/themes/types';

const StyledLink = styled(Text)`
  transition: color 0.2s ease;
  color: ${({ theme: { colors }, textColor }) =>
    textColor && typeof colors[textColor] !== 'undefined'
      ? colors[textColor]
      : textColor
      ? textColor
      : colors['linkColor']};
  text-decoration: ${({
    theme: {
      typography: { linkTextDecoration },
    },
  }) => linkTextDecoration};

  &:hover {
    cursor: pointer;
    color: ${({ theme: { colors }, textHoverColor }) =>
      textHoverColor && typeof colors[textHoverColor] !== 'undefined'
        ? colors[textHoverColor]
        : textHoverColor
        ? textHoverColor
        : colors['linkColorHover']};
  }
`;

type LinkProps = AnchorHTMLAttributes<{}> & {
  theme?: ThemeType;
  textHoverColor?: string;
  ariaLabel?: string;
};

const Link: FunctionComponent<LinkProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  // security by default
  const rel = props.rel ? props.rel : 'noopener noreferrer';

  return (
    <StyledLink {...props} forwardedAs="a" theme={theme} rel={rel} aria-label={props.ariaLabel}>
      {props.children}
    </StyledLink>
  );
};

export default withTheme(Link);
