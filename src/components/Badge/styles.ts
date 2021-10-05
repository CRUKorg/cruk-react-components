import styled, { css } from 'styled-components';

import { SpaceType, ThemeType } from 'src/types';

type StyleBadgeProps = {
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  isText?: boolean;
  size: SpaceType;
  theme: ThemeType;
};

export const StyledBadge = styled.span<StyleBadgeProps>`
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
      : colors['textOnPrimary']};
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
    !props.isText &&
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
