import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGClock from '../../assets/svg/clock.svg';

export const IconClock = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGClock aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconClock;
