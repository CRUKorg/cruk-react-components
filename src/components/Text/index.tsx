import React, { FunctionComponent, HTMLAttributes } from 'react';
import { useTheme } from 'styled-components';

import defaultTheme from 'src/themes/cruk';

import { TextStyled } from './styles';

import { SpacingProps } from 'src/components/Spacing';
import { WordBreakType, FontSizeType, ColorKeyType } from 'src/types';

// the 'as' prop is for styled component casting
// text hover color prop is only used in Link which extends Text
export type TextProps = SpacingProps &
  HTMLAttributes<HTMLElement> & {
    textColor?: ColorKeyType | string;
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    textSize?: FontSizeType;
    textWeight?: number;
    as?: any;
    wordBreak?: WordBreakType;
  };

export const Text: FunctionComponent<TextProps> = props => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  return <TextStyled {...props} theme={theme} />;
};

export default Text;
