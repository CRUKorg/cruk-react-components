import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY, FONT_SIZES } from '../../themes/cruk';

import { FontSizeType } from '../../themes/types';

// the 'as' prop is for styled component casting
export type TextProps = {
  textColor?: string;
  textAlign?: 'left' | 'right' | 'center';
  textSize?: FontSizeType;
  textWeight?: number;
  ellipsis?: boolean;
  as?: any;
  theme?: any;
};

export const TextStyled = styled.p<TextProps>`
  font-family: ${({ theme }) => (theme.typography ? theme.typography.fontFamilyBase : TYPOGRAPHY.fontFamilyBase)};
  color: ${({ theme, textColor }) => (theme.colors ? theme.colors[textColor] : COLORS.textDark)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  font-size: ${({ theme, textSize }) =>
    textSize ? (theme.fontSizes ? theme.fontSizes[textSize] : FONT_SIZES[textSize]) : FONT_SIZES.medium};
  line-height: 1.5em;
  font-weight: ${({ textWeight }) => (textWeight ? textWeight : TYPOGRAPHY.fontWeightMedium)};
  padding: 0;
  margin: 0;
`;

export const Text: FunctionComponent<TextProps> = props => <TextStyled {...props} />;

export default Text;
