import React from 'react';
import IconStyled from '../IconStyled';
import SVGCalendar from '../../assets/svg/calendar.svg';

type Props = {
  color?: string;
  size?: string;
};

export const IconCalendar = ({ color, size }: Props) => {
  return (
    <IconStyled color={color} size={size}>
      <SVGCalendar />
    </IconStyled>
  );
};

export default IconCalendar;
