import React, { FunctionComponent } from 'react';
import styled, { withTheme } from 'styled-components';
import defaultTheme from '../../themes/cruk';

import { FontSizeType } from '../../themes/types';

import { ThemeType } from '../../themes/types';

// the 'as' prop is for styled component casting
export type TextProps = {
  textColor?: string;
  textAlign?: 'left' | 'right' | 'center';
  textSize?: FontSizeType;
  textWeight?: number;
  as?: any;
  theme?: ThemeType;
};

export const TextStyled = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  color: ${({ theme, textColor }) =>
    textColor && typeof theme.colors[textColor] !== 'undefined'
      ? theme.colors[textColor]
      : textColor
      ? textColor
      : theme.colors['textDark']};
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
  return <TextStyled theme={theme} {...props} />;
};

export default withTheme(Text);
