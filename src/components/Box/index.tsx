import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';
import { ThemeType } from '../../themes/types';

type BoxProps = {
  bgColor?: string;
  getBgColor: string;
  children: any;
  css?: any;
  theme: ThemeType;
};

const StyledBox = styled.div<BoxProps>`
  background-color: ${props => props.theme.colors.bodyBg};
  padding: ${props => props.theme.utilities.spacingUnit * 4}px;
  margin: 0 0 ${props => props.theme.utilities.spacingUnit * 4}px 0;
  margin-bottom: ${props => props.theme.utilities.spacingUnit * 4}px;
  border: 1px solid ${props => props.theme.colors.boxBorder};
  border-radius: ${props => props.theme.utilities.borderRadius};
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  &:last-child {
    margin-bottom: 0;
  }

  ${(props: BoxProps) =>
    props.getBgColor &&
    css`
      background-color: ${props.getBgColor};
      color: ${props.theme.colors.textLight};
    `}

  ${(props: BoxProps) => (css as any)([props.css])}
`;
const Box = (props: BoxProps) => {
  const { bgColor, getBgColor, children, css, theme, ...rest } = props;
  const mergedTheme = {
    ...defaultTheme,
    ...props.theme,
  };
  const checkBgColor = (mergedTheme.colors as any)[bgColor] || bgColor;

  return (
    <StyledBox theme={mergedTheme} getBgColor={bgColor && checkBgColor} {...rest}>
      {children}
    </StyledBox>
  );
};

export default withTheme(Box);
