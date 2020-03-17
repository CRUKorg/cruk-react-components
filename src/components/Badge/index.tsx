import React, { FunctionComponent } from 'react';
import styled, { css, withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';
import { ThemeType, ColorsType } from '../../themes/types';

type BadgeProps = {
  bgColor?: string;
  text: boolean;
  theme?: ThemeType;
  getBgColor?: string;
  size?: number;
  children?: any;
};

// TODO Look at where 15 comes from in the height and width bellow.
const StyledBadge = styled.span`
  background-color: ${props => props.getBgColor};
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  border-radius: 1.5rem;
  font-size: ${props => props.theme.fontSizes.small};
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

const Badge: FunctionComponent<BadgeProps> = props => {
  const { bgColor, text, theme, getBgColor, size, children, ...rest } = props;
  const mergedTheme = {
    ...defaultTheme,
    ...theme,
  };
  const checkBgColor = (mergedTheme.colors as ColorsType)[bgColor] || bgColor;
  return (
    <StyledBadge
      theme={mergedTheme}
      text={typeof children === 'string'}
      size={15}
      getBgColor={bgColor !== undefined ? checkBgColor : mergedTheme.colors.primary}
      {...rest}
    >
      {children}
    </StyledBadge>
  );
};

export default withTheme(Badge);
