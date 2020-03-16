import React, { FunctionComponent, AnchorHTMLAttributes } from 'react';
import styled, { withTheme } from 'styled-components';

import Text from '../Text';
import defaultTheme from '../../themes/cruk';

import { ThemeType } from 'src/themes/types';

const StyledLink = styled(Text)`
  transition: color 0.2s ease;
  color: ${({
    theme: {
      colors: { linkColor },
    },
  }) => linkColor};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: ${({
      theme: {
        colors: { linkColorHover },
      },
    }) => linkColorHover};
    text-decoration: ${({
      theme: {
        typography: { linkTextDecoration },
      },
    }) => linkTextDecoration};
  }
`;

type LinkProps = AnchorHTMLAttributes<{}> & {
  theme?: ThemeType;
};

const Link: FunctionComponent<LinkProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  return (
    <StyledLink as="a" theme={theme} {...props}>
      {props.children}
    </StyledLink>
  );
};

export default withTheme(Link);
