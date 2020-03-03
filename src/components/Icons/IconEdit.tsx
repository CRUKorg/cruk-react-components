import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGEdit from '../../assets/svg/icons/edit.svg';

export const IconEdit = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGEdit aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconEdit;
