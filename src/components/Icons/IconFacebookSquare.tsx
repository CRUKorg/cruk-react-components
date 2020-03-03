import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGFacebookSquare from '../../assets/svg/icons/facebookSquare.svg';

export const IconFacebookSquare = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGFacebookSquare aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconFacebookSquare;
