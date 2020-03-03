import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGEnvelopeSquare from '../../assets/svg/icons/envelopeSquare.svg';

export const IconEnvelopeSquare = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGEnvelopeSquare aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconEnvelopeSquare;
