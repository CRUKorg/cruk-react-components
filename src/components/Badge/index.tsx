import React, { FunctionComponent } from 'react';
import styled, { css, withTheme } from 'styled-components';

import defaultTheme from '../../themes/cruk';
import { ThemeType, SpaceType } from '../../types';

type BadgeProps = {
  backgroundColor?: string;
  text?: boolean;
  theme?: ThemeType;
  size?: SpaceType;
  children?: any;
};

type StyleBadgeProps = {
  backgroundColor?: string;
  text?: boolean;
  theme: ThemeType;
  size: SpaceType;
};

const StyledBadge = styled.span<StyleBadgeProps>`
  background-color: ${({ theme: { colors }, backgroundColor }) =>
    backgroundColor && typeof colors[backgroundColor] !== 'undefined'
      ? colors[backgroundColor]
      : backgroundColor
      ? backgroundColor
      : colors['primary']};
  color: ${props => props.theme.colors.textLight};
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
  const { text, children, theme, ...rest } = props;
  const mergedTheme = {
    ...defaultTheme,
    ...theme,
  };
  return (
    <StyledBadge theme={mergedTheme} text={typeof children === 'string'} size="xs" {...rest}>
      {children}
    </StyledBadge>
  );
};

export default withTheme(Badge);
