import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGCalendar from '../../assets/svg/calendar.svg';

export const IconCalendar = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGCalendar aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconCalendar;
