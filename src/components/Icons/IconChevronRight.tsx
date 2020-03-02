import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGChevronRight from '../../assets/svg/chevronRight.svg';

export const IconChevronRight = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGChevronRight aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconChevronRight;
