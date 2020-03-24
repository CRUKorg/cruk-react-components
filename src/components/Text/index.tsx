import React, { FunctionComponent } from 'react';
import styled, { withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';

import { FontSizeType } from '../../themes/types';

import { ThemeType } from '../../themes/types';

// the 'as' prop is for styled component casting
// text hover color prop is only used in Link which extends Text
export type TextProps = {
  textColor?: string;
  textHoverColor?: string;
  textAlign?: 'left' | 'right' | 'center';
  textSize?: FontSizeType;
  textWeight?: number;
  as?: any;
  theme?: ThemeType;
};

export const TextStyled = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  color: ${({ theme: { colors }, textColor }) =>
    textColor && typeof colors[textColor] !== 'undefined'
      ? colors[textColor]
      : textColor
      ? textColor
      : colors['textDark']};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  font-size: ${({
    theme: {
      fontSizes,
      fontSizes: { medium },
    },
    textSize,
  }) => (textSize ? fontSizes[textSize] : medium)};
  line-height: 1.5em;
  font-weight: ${({
    textWeight,
    theme: {
      typography: { fontWeightMedium },
    },
  }) => (textWeight ? textWeight : fontWeightMedium)};
  padding: 0;
  margin: 0;
`;

export const Text: FunctionComponent<TextProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  return <TextStyled {...props} theme={theme} />;
};

export default withTheme(Text);
