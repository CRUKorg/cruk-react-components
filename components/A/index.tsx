import React, { AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';
import { COLORS } from '../Constants';
import Span from '../Span';
import P from '../P';

const StyledLink = styled.a`
  text-decoration: none;

  ${Span}, ${P} {
    transition: color 0.2s ease;
    color: ${COLORS.linkColor};
    text-decoration: none;
    &:hover {
      color: ${COLORS.linkColorHover};
      text-decoration: none;
      cursor: pointer;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

const A = (props: AnchorHTMLAttributes<{}>) => <StyledLink {...props}>{props.children}</StyledLink>;

export default A;
