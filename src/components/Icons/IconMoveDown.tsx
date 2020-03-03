import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGMoveDown from '../../assets/svg/icons/moveDown.svg';

export const IconMoveDown = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGMoveDown aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconMoveDown;
