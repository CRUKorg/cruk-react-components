import styled from 'styled-components';

import spacing from 'src/components/Spacing';

import { SpacingProps } from 'src/components/Spacing';
import { WordBreakType, FontSizeType, ThemeType } from 'src/types';

type TextStyledProps = SpacingProps & {
  textColor?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  textSize?: FontSizeType;
  textWeight?: number;
  as?: any;
  wordBreak?: WordBreakType;
  theme: ThemeType;
};

export const TextStyled = styled.p<TextStyledProps>`
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
