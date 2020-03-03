import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGMoveRight from '../../assets/svg/icons/moveRight.svg';

export const IconMoveRight = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGMoveRight aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconMoveRight;
