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

  // Show a warning in console if required but missing in props
  if (process.env.NODE_ENV !== 'production') {
    const childArray = React.Children.toArray(props.children);
    const hasString = childArray.reduce((child, hasStringChild) => {
      const isChildString = typeof child === 'string';
      return isChildString ? true : hasStringChild;
    }, false);
    const showAriaWarning = !hasString && typeof props.ariaLabel === 'undefined';
    if (showAriaWarning) {
      console.error("If the Link component doesn't contain text please use the ariaLabel prop for accessibility");
    }
  }

  return (
    <StyledLink {...props} forwardedAs="a" theme={theme} rel={rel} aria-label={props.ariaLabel}>
      {props.children}
    </StyledLink>
  );
};

export default withTheme(Link);
