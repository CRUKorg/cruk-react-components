import React from 'react';
import styled from 'styled-components';
import { COLORS } from './Constants';

const Link = styled.a`
  color: ${COLORS.linkColor};
  text-decoration: none;
  
  &:hover {
    color: ${COLORS.linkColorHover};
    text-decoration: underline;
  }
`;

export default props => (
  <Link {...props} >
    {props.children}
  </Link>
);
