import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled, { useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import spacing, { SpacingProps } from 'src/components/Spacing';

import { WordBreakType, FontSizeType } from 'src/types';

// the 'as' prop is for styled component casting
// text hover color prop is only used in Link which extends Text
export type TextProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    textColor?: string;
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    textSize?: FontSizeType;
    textWeight?: number;
    as?: any;
    wordBreak?: WordBreakType;
  };

export const TextStyled = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  word-break: ${({ wordBreak }) => wordBreak || 'normal'};
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
      fontSizes: { m },
    },
    textSize,
  }) => (textSize ? fontSizes[textSize] : m)};
  line-height: ${({
    theme: {
      typography: { lineHeight },
    },
  }) => lineHeight};
  font-weight: ${({
    textWeight,
    theme: {
      typography: { fontWeightMedium },
    },
  }) => (textWeight ? textWeight : fontWeightMedium)};
  padding: 0;
  margin: 0;
  margin-bottom: ${({
    as,
    theme: {
      spacing: { xs },
    },
  }) => (typeof as === 'undefined' || as === 'p' ? `${xs}` : 0)};

  &:last-child {
    margin-bottom: 0;
  }

  ${props => spacing(props)}
`;

export const Text: FunctionComponent<TextProps> = props => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  return <TextStyled {...props} theme={theme} />;
};

export default Text;
