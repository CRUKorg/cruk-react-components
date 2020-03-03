import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGClose from '../../assets/svg/icons/close.svg';

export const IconClose = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGClose aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconClose;
