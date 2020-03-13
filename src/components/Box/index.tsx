import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import defaultTheme, { UTILITIES, COLORS } from '../../themes/cruk';
import { ThemeType } from '../../themes/types';

type BoxProps = {
  bgColor: string;
  getBgColor: string;
  children: any;
  css: any;
  theme?: ThemeType;
};

const StyledBox = styled.div`
  background-color: ${COLORS.bodyBg};
  padding: ${UTILITIES.spacingUnit * 4}px;
  margin: 0 0 ${UTILITIES.spacingUnit * 4}px 0;
  margin-bottom: ${UTILITIES.spacingUnit * 4}px;
  border: 1px solid ${COLORS.boxBorder};
  border-radius: ${UTILITIES.borderRadius};
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  &:last-child {
    margin-bottom: 0;
  }

  ${(props: BoxProps) =>
    props.getBgColor &&
    css`
      background-color: ${props.getBgColor};
      color: ${COLORS.textLight};
    `}

  ${(props: BoxProps) => (css as any)([props.css])}
`;
const Box = (props: BoxProps) => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  const checkBgColor = (theme.colors as any)[props.bgColor] || props.bgColor;
  return (
    <StyledBox theme={theme} getBgColor={props.bgColor && checkBgColor} {...props}>
      {props.children}
    </StyledBox>
  );
};

export default withTheme(Box);
