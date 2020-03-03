import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGMessengerSquare from '../../assets/svg/icons/messengerSquare.svg';

export const IconMessengerSquare = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGMessengerSquare aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconMessengerSquare;
