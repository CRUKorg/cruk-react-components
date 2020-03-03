import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGQuestion from '../../assets/svg/icons/question.svg';

export const IconQuestion = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGQuestion aria-hidden="true" focusable="false" />
    </IconStyled>
  );
};

export default IconQuestion;
