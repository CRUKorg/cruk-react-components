import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGMove from '../../assets/svg/icons/move.svg';

export const IconMove = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGMove aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconMove;
