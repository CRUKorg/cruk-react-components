import React, { FunctionComponent } from 'react';
import { COLORS, TYPOGRAPHY, FONT_SIZES, FontSizeType } from '../../themes/cruk';
import styled, { withTheme } from 'styled-components';

// the 'as' prop is for styled component casting
export type TextProps = {
  textColor?: string;
  textAlign?: 'left' | 'right' | 'center';
  textSize?: FontSizeType;
  textWeight?: number;
  as?: any;
  theme?: any;
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
  font-size: ${({ theme, textSize }) =>
    textSize ? (theme.fontSizes ? theme.fontSizes[`${textSize}`] : FONT_SIZES[`${textSize}`]) : FONT_SIZES.medium};
  line-height: 1.5em;
  font-weight: ${({ textWeight }) => (textWeight ? textWeight : TYPOGRAPHY.fontWeightMedium)};
  padding: 0;
  margin: 0;
`;

export const Text: FunctionComponent<TextProps> = props => {
  // TODO clean this up once clean-theme-2 has been merged
  const theme = {
    colors: { ...COLORS, ...props.theme.colors },
    fontSizes: { ...FONT_SIZES, ...props.theme.fontSizes },
    typography: { ...TYPOGRAPHY, ...props.theme.typography },
  };

  console.log({ preTheme: theme });

  return (
    <TextStyled {...props} theme={theme}>
      {props.children}
    </TextStyled>
  );
};

export default withTheme(Text);
