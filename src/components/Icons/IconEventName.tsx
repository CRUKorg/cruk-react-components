import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGEventName from '../../assets/svg/icons/eventName.svg';

export const IconEventName = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGEventName aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconEventName;
