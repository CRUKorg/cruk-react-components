import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGDelete from '../../assets/svg/icons/delete.svg';

export const IconDelete = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGDelete aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconDelete;
