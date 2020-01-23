// @Flow

import React from 'react';
import styled, { css, ThemeProvider, withTheme } from 'styled-components';
import { COLORS, UTILITIES } from '../Constants';

type BoxProps = {
  bgColor: string,
  theme: { colors: {} },
};

const StyledBox = styled.div`
  background-color: ${COLORS.white};
  padding: ${UTILITIES.spacingUnit * 4}px;
  margin: 0 0 ${UTILITIES.spacingUnit * 4}px 0;
  margin-bottom: ${UTILITIES.spacingUnit * 4}px;
  border: 1px solid ${COLORS.grayLight};
  border-radius: ${UTILITIES.borderRadius};
  box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);
  &:last-child { margin-bottom: 0;}
  
  ${props => props.getBgColor && css`
    background-color: ${props.getBgColor};
    color: ${COLORS.white};
  `}
  
  ${props => css([props.css])}
`;
const Box = (props: BoxProps) => {
  const theme = {
    colors: {
      ...COLORS,
      ...props.theme.colors,
    },
  };
  const checkBgColor = theme.colors[props.bgColor] || props.bgColor;
  return (
    <ThemeProvider theme={theme}>
      <StyledBox
        getBgColor={props.bgColor && checkBgColor}
        {...props}
      >
        {props.children}
      </StyledBox>
    </ThemeProvider>
  );
};

Box.defaultProps = {
  theme: {},
};

export default withTheme(Box);
