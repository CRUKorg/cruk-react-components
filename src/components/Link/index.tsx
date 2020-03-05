import React, { FunctionComponent, AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';
import Text from '../Text';

import { COLORS, TYPOGRAPHY } from '../../Constants';

const StyledLink = styled(Text)`
  transition: color 0.2s ease;
  color: ${({ theme: { colors } }) => (colors ? colors.linkColor : COLORS.linkColor)};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: ${({ theme: { colors } }) => (colors && colors.linkColorHover ? colors.linkColor : COLORS.linkColorHover)};
    text-decoration: ${({ theme: { typography } }) =>
      typography && typography.linkTextDecoration ? typography.linkTextDecoration : TYPOGRAPHY.linkTextDecoration};
  }
`;

const Link: FunctionComponent<AnchorHTMLAttributes<{}>> = props => {
  return (
    <StyledLink as="a" {...props}>
      {props.children}
    </StyledLink>
  );
};

export default Link;
