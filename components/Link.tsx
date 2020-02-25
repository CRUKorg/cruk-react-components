import React from 'react';
import styled from 'styled-components';
import { COLORS } from './Constants';

const StyledLink = styled.a`
  color: ${COLORS.linkColor};
  text-decoration: none;

  &:hover {
    color: ${COLORS.linkColorHover};
    text-decoration: underline;
  }
`;

type LinkProps = {
   children: any 
};

export default (props: LinkProps ) => <StyledLink {...props} />;
