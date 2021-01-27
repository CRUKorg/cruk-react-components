import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled, { withTheme } from 'styled-components';

import defaultTheme from '../../themes/cruk';
import spacing, { SpacingProps } from '../Spacing';

import { FontSizeType } from '../../types';
import { ThemeType } from '../../types';

// the 'as' prop is for styled component casting
// text hover color prop is only used in Link which extends Text
export type TextProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    textColor?: string;
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
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  return <TextStyled {...props} theme={theme} />;
};

export default withTheme(Text);
