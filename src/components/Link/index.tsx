import React, { FC, AnchorHTMLAttributes, forwardRef, Ref } from 'react';

import { useTheme, ThemeProvider } from 'styled-components';
import defaultTheme from 'src/themes/cruk';

import { StyledLink, ChevyWithLevee } from './styles';

import { TextProps } from 'src/components/Text';

export type Props = AnchorHTMLAttributes<HTMLElement> &
  TextProps & {
    textHoverColor?: string;
    appearance?: 'primary' | 'secondary';
    ref?: Ref<HTMLElement>;
  };

const Link: FC<Props> = forwardRef((props: Props, ref?: Ref<HTMLElement>) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  // security by default
  const rel = props.rel ? props.rel : props.target === '_blank' ? 'noopener noreferrer' : '';

  return (
    <ThemeProvider theme={theme}>
      <StyledLink {...props} theme={theme} rel={rel} forwardedAs="a" ref={ref}>
        {props.appearance === 'primary' && <ChevyWithLevee name={'chevronRightBold'} size="0.8em" />}
        {props.children}
      </StyledLink>
    </ThemeProvider>
  );
});

export default Link;
