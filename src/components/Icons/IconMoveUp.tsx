import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGMoveUp from '../../assets/svg/icons/moveUp.svg';

export const IconMoveUp = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGMoveUp aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconMoveUp;
