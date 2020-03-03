import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGMoveLeft from '../../assets/svg/icons/moveLeft.svg';

export const IconMoveLeft = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGMoveLeft aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconMoveLeft;
