import React, { AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../Constants';

import Text, { TextStyled } from '../Text';

type StyledLinkProps = {
  theme: { colors: { [key: string]: string } };
};

const StyledLink = styled.a`
  text-decoration: none;

  span,
  p,
  ${TextStyled} {
    transition: color 0.2s ease;
    color: ${({ theme: { colors } }: StyledLinkProps) =>
      colors && colors.linkColor ? colors.linkColor : COLORS.linkColor};
    text-decoration: none;
    &:hover {
      color: ${({ theme: { colors } }: StyledLinkProps) =>
        colors && colors.linkColorHover ? colors.linkColor : COLORS.linkColorHover};
      text-decoration: none;
      cursor: pointer;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

type Props = AnchorHTMLAttributes<{}> & StyledLinkProps;

const Link = (props: Props) => {
  // Filter out empty children in node array incase they have dynamically been deleted
  const childArray = React.Children.toArray(props.children).filter(Boolean);

  // if we are wrapping a simple string with an anchor
  // then first wrap the string in a Text component so it follows default text styling
  return (
    <StyledLink {...props}>
      {childArray.length
        ? childArray.map(node => {
            if (typeof node === 'string') {
              return <Text as="span">{node}</Text>;
            } else {
              return node;
            }
          })
        : null}
    </StyledLink>
  );
};

export default Link;
