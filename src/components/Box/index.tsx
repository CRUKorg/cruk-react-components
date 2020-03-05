import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { COLORS, UTILITIES } from '../../Constants';

export type BoxProps = {
  bgColor?: string;
  css?: any;
  children?: any;
};

const BoxStyled = styled.div<BoxProps>`
  background-color: ${COLORS.bodyBg};
  padding: ${UTILITIES.spacingUnit * 4}px;
  margin: 0 0 ${UTILITIES.spacingUnit * 4}px 0;
  margin-bottom: ${UTILITIES.spacingUnit * 4}px;
  border: 1px solid ${COLORS.grayLight};
  border-radius: ${UTILITIES.borderRadius};
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  &:last-child {
    margin-bottom: 0;
  }
  color: ${({ bgColor }) => (bgColor ? COLORS.white : COLORS.grayDarker)};

  ${({ bgColor, theme }) => {
    const checkTheme = theme.colors ? theme : { colors: COLORS };
    const { colors } = checkTheme;
    const checkBgColor = bgColor ? (typeof colors[bgColor] !== 'undefined' ? colors[bgColor] : bgColor) : null;
    return `background-color: ${checkBgColor};`;
  }}

  ${(props: BoxProps) => (css as any)([props.css])}
`;

const Box: FunctionComponent<BoxProps> = props => {
  return <BoxStyled {...props}>{props.children}</BoxStyled>;
};

export default Box;
