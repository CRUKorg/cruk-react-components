import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { COLORS, FONT_SIZES } from '../../Constants';

type BadgeProps = {
  bgColor?: string;
  text: boolean;
  theme: { colors: { [key: string]: string } };
  getBgColor?: string;
  size?: number;
  children?: any;
};
type StyledBadgeProps = {
  bgColor?: string;
  text: boolean;
  getBgColor?: string;
  size?: number;
};

// TODO Look at where 15 comes from in the height and width bellow.
const StyledBadge = styled.span<StyledBadgeProps>`
  background-color: ${({ theme = { colors: COLORS }, bgColor }) => {
    const foundTheme = theme.colors ? theme : { colors: COLORS };
    const defaultBgColor = bgColor
      ? typeof foundTheme.colors[bgColor] !== 'undefined'
        ? foundTheme.colors[bgColor]
        : bgColor
      : foundTheme.colors.primary;
    return defaultBgColor;
  }};
  color: ${COLORS.white};
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

const Badge: FunctionComponent<BadgeProps> = props => {
  const getChildSize =
    props.children.props && props.children.props.size !== undefined
      ? parseFloat(props.children.props.size.match(/\d+/)[0])
      : 15;
  return (
    <StyledBadge
      text={typeof props.children === 'string'}
      size={parseFloat(getChildSize.toString())}
      bgColor={props.bgColor}
    >
      {props.children}
    </StyledBadge>
  );
};

export default Badge;
