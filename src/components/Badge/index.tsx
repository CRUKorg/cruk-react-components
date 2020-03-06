import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../../Constants';

type BadgeProps = {
  bgColor?: string;
  text: boolean;
  theme: { colors: { [key: string]: string } };
  getBgColor?: string;
  size: number;
  children?: any;
};
type StyledBadgeProps = {
  bgColor?: string;
  text: boolean;
  getBgColor?: string;
  size?: number;
};

// TODO Look at where 15 comes from in the height and width bellow.
const StyledBadge = styled.div<StyledBadgeProps>`
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
  font-size: ${FONT_SIZES.small};

  display: inline;

  padding: ${({ text }) => (!!text ? '3px 10px;' : '0')};

  border-radius: ${({ text }) => (!!text ? '1.5rem' : '50%')};
  height: ${({ size, text }) => (!!text ? 'auto' : `calc(${size}px + 15px)`)};
  width: ${({ size, text }) => (!!text ? 'auto' : `calc(${size}px + 15px)`)};
  line-height: ${({ size, text }) => (!!text ? 'inherit' : `calc(${size}px + 15px)`)};

  svg {
    height: ${({ size }) => `${size}px`};
  }
`;

const Badge: FunctionComponent<BadgeProps> = props => {
  const { children } = props;
  const getChildSize =
    children.props && children.props.size !== undefined ? parseFloat(props.children.props.size.match(/\d+/)[0]) : 15;
  const getChildSizeFloat = parseFloat(getChildSize.toString());
  const isChildText = typeof children === 'string';

  console.log({ isChildText, children });
  return (
    <StyledBadge text={isChildText} size={getChildSizeFloat} bgColor={props.bgColor}>
      {props.children}
    </StyledBadge>
  );
};

export default Badge;
