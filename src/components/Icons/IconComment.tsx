import React from 'react';
import IconStyled, { IconStyledProps } from '../IconStyled';
import SVGComment from '../../assets/svg/comment.svg';

export const IconComment = (props: IconStyledProps) => {
  return (
    <IconStyled {...props}>
      <SVGComment aria-hidden="true" focusable="false" transform="scale(-1, 1)" />
    </IconStyled>
  );
};

export default IconComment;
