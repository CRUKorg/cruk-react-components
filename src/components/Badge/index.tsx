import React from 'react';
import styled, { css, ThemeProvider, withTheme } from 'styled-components';
import defualtTheme, { COLORS, FONT_SIZES } from '../../themes/cruk';
import { ThemeType } from '../../themes/types';

type BadgeProps = {
  bgColor: string;
  text: boolean;
  theme: ThemeType;
  getBgColor?: string;
  size?: number;
  children?: any;
};

// TODO Look at where 15 comes from in the height and width bellow.
const StyledBadge = styled.span`
  background-color: ${props => props.getBgColor};
  color: ${COLORS.textLight};
  text-align: center;
  border-radius: 1.5rem;
  font-size: ${FONT_SIZES.small};
  padding: 3px 10px;
  display: inline-block;

  ${(props: BadgeProps) =>
    !props.text &&
    css`
      padding: 0;
      border-radius: 50%;
      display: block;
      height: ${props.size + 15}px;
      width: ${props.size + 15}px;
      line-height: ${props.size + 15}px;
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
  const getChildSize =
    props.children.props && props.children.props.size !== undefined
      ? parseFloat(props.children.props.size.match(/\d+/)[0])
      : 15;
  const defaultBgColor = theme.colors.primary || COLORS.primary;
  const checkBgColor = (theme.colors as any)[props.bgColor] || props.bgColor;
  return (
    <ThemeProvider theme={theme}>
      <StyledBadge
        text={typeof props.children === 'string'}
        size={parseFloat(getChildSize.toString())}
        getBgColor={props.bgColor !== undefined ? checkBgColor : defaultBgColor}
        {...props}
      >
        {props.children}
      </StyledBadge>
    </ThemeProvider>
  );
};

Badge.defaultProps = {
  theme: defualtTheme,
};

export default withTheme(Badge);
