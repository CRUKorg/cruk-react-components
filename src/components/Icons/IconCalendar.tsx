import React from 'react';
import styled, { withTheme } from 'styled-components';

import { COLORS } from '../../Constants';

import IconBase, { IconBasePropsType, IconBaseStyledPropsType } from '../IconBase';
import SVGCalendar from '../../assets/svg/icons/calendar.svg';

const SVGCalendarStyled = styled(SVGCalendar)`
  ${(props: IconBaseStyledPropsType) => IconBase(props)}
`;

export const IconCalendar = ({ theme, color, ...props }: IconBasePropsType) => {
  const foundTheme = theme && theme.colors ? theme : { colors: COLORS };
  const foundColor = color ? (foundTheme.colors as { [key: string]: string })[color] || color : 'currentColor';

  console.log({ theme, foundTheme, foundColor });
  return <SVGCalendarStyled aria-hidden="true" focusable="false" iconColor={foundColor} {...props} />;
};

export default withTheme(IconCalendar);
