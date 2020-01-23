// @Flow

import React from 'react';
import styled, { css, ThemeProvider, withTheme } from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../Constants';

type BadgeProps = {
  bgColor: string,
  text: boolean,
  theme: { colors: {} },
};
const StyledBadge = styled.span`
  background-color: ${props => props.getBgColor};
  color: ${COLORS.white};
  text-align: center;
  border-radius: 1.5rem;
  font-size: ${TYPOGRAPHY.fontSizeSmall};
  padding: 3px 10px;
  display: inline-block;

  ${props => !props.text && css`
    padding: 0;
    border-radius: 50%;
    display: block;
    height: ${props.size + parseFloat(15)}px;
    width: ${props.size + parseFloat(15)}px;
    line-height: ${props.size + parseFloat(15)}px;
    svg {
      height: ${props.size}px;
    }
  `}
`;

const Badge = (props: BadgeProps) => {
  const theme = {
    colors: {
      ...COLORS,
      ...props.theme.colors,
    },
  };
  const getChildSize = props.children.props && (props.children.props.size !== undefined) ?
    parseFloat(props.children.props.size.match(/\d+/)[0]) : 15;
  const defaultBgColor = theme.colors.primary || COLORS.primary;
  const checkBgColor = theme.colors[props.bgColor] || props.bgColor;
  return (
    <ThemeProvider theme={theme}>
      <StyledBadge
        text={typeof props.children === 'string'}
        size={parseFloat(getChildSize)}
        getBgColor={props.bgColor !== undefined ? checkBgColor : defaultBgColor}
        {...props}
      >
        {props.children}
      </StyledBadge>
    </ThemeProvider>
  );
};

Badge.defaultProps = {
  theme: {},
};

export default withTheme(Badge);
