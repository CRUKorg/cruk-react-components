import React, { FunctionComponent } from 'react';
import styled, { css, useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import { SpaceType, ThemeType } from 'src/types';

type BadgeProps = {
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  text?: boolean;
  size?: SpaceType;
  children?: any;
};

type StyleBadgeProps = {
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  text?: boolean;
  size: SpaceType;
  theme: ThemeType;
};

const StyledBadge = styled.span<StyleBadgeProps>`
  border-width: 1px;
  border-style: solid;
  background-color: ${({ theme: { colors }, backgroundColor }) =>
    backgroundColor && typeof colors[backgroundColor] !== 'undefined'
      ? colors[backgroundColor]
      : backgroundColor
      ? backgroundColor
      : colors['primary']};
  color: ${({ theme: { colors }, textColor }) =>
    textColor && typeof colors[textColor] !== 'undefined'
      ? colors[textColor]
      : textColor
      ? textColor
      : colors['textLight']};
  border-color: ${({ theme: { colors }, borderColor, backgroundColor }) =>
    borderColor && typeof colors[borderColor] !== 'undefined'
      ? colors[borderColor]
      : borderColor
      ? borderColor
      : backgroundColor && typeof colors[backgroundColor] !== 'undefined'
      ? colors[backgroundColor]
      : backgroundColor
      ? backgroundColor
      : colors['primary']};
  text-align: center;
  border-radius: 1.5rem;
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1rem;
  padding: ${({
    theme: {
      spacing: { xxs },
    },
  }) => xxs};
  display: inline-block;
  min-width: ${({
    size,
    theme: {
      spacing,
      spacing: { xs },
    },
  }) => `calc(${spacing[size]} + ${xs})`};

  ${(props: StyleBadgeProps) =>
    !props.text &&
    css`
      padding: 0;
      border-radius: 50%;
      display: block;
      height: ${({
        size,
        theme: {
          spacing,
          spacing: { xs },
        },
      }: StyleBadgeProps) => `calc(${spacing[size]} + ${xs})`};
      width: ${({
        size,
        theme: {
          spacing,
          spacing: { xs },
        },
      }: StyleBadgeProps) => `calc(${spacing[size]} + ${xs})`};
      line-height: ${({
        size,
        theme: {
          spacing,
          spacing: { xs },
        },
      }: StyleBadgeProps) => `calc(${spacing[size]} + ${xs})`};
      svg {
        height: ${({ size, theme: { spacing } }: StyleBadgeProps) => spacing[size]};
      }
    `}
`;

const Badge: FunctionComponent<BadgeProps> = props => {
  const { text, children, ...rest } = props;
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  return (
    <StyledBadge theme={theme} text={typeof children === 'string'} size="xs" {...rest}>
      {children}
    </StyledBadge>
  );
};

export default Badge;
