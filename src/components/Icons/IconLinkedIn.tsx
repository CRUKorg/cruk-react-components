import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGLinkedIn from '../../assets/svg/icons/linkedIn.svg';

export const IconLinkedIn = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGLinkedIn aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconLinkedIn;
