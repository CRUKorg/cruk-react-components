import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGFacebook from '../../assets/svg/icons/facebook.svg';

export const IconFacebook = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGFacebook aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconFacebook;
