import React, { FunctionComponent } from 'react';
import styled, { css, withTheme } from 'styled-components';

import defaultTheme from '../../themes/cruk';
import { ThemeType, SpaceType } from '../../themes/types';

type BadgeProps = {
  backgroundColor?: string;
  text: boolean;
  theme?: ThemeType;
  size?: SpaceType;
  children?: any;
};

const StyledBadge = styled.span`
  background-color: ${({ theme: { colors }, backgroundColor }) =>
    backgroundColor && typeof colors[backgroundColor] !== 'undefined'
      ? colors[backgroundColor]
      : backgroundColor
      ? backgroundColor
      : colors['primary']};
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  border-radius: 1.5rem;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 1rem;
  padding: ${({
    theme: {
      spacing: { extraExtraSmall },
    },
  }: BadgeProps) => extraExtraSmall};
  display: inline-block;
  min-width: ${({
    size,
    theme: {
      spacing,
      spacing: { extraSmall },
    },
  }: BadgeProps) => `calc(${spacing[size]} + ${extraSmall})`};

  ${(props: BadgeProps) =>
    !props.text &&
    css`
      padding: 0;
      border-radius: 50%;
      display: block;
      height: ${({
        size,
        theme: {
          spacing,
          spacing: { extraSmall },
        },
      }: BadgeProps) => `calc(${spacing[size]} + ${extraSmall})`};
      width: ${({
        size,
        theme: {
          spacing,
          spacing: { extraSmall },
        },
      }: BadgeProps) => `calc(${spacing[size]} + ${extraSmall})`};
      line-height: ${({
        size,
        theme: {
          spacing,
          spacing: { extraSmall },
        },
      }: BadgeProps) => `calc(${spacing[size]} + ${extraSmall})`};
      svg {
        height: ${({ size, theme: { spacing } }: BadgeProps) => spacing[size]};
      }
    `}
`;

const Badge: FunctionComponent<BadgeProps> = props => {
  const { text, theme, children, ...rest } = props;
  const mergedTheme = {
    ...defaultTheme,
    ...theme,
  };
  return (
    <StyledBadge theme={mergedTheme} text={typeof children === 'string'} size="extraSmall" {...rest}>
      {children}
    </StyledBadge>
  );
};

export default withTheme(Badge);
