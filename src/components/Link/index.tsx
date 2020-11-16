import React, { FunctionComponent, AnchorHTMLAttributes, forwardRef, Ref } from 'react';
import styled, { css, withTheme, ThemeProvider } from 'styled-components';
import defaultTheme from '../../themes/cruk';

import Text, { TextProps } from '../Text';
import Icon from '../Icon';

import { ThemeType } from 'src/types';

const ChevyWithLevee = styled(Icon)`
  margin-right: ${({
    theme: {
      spacing: { extraExtraSmall },
    },
  }) => extraExtraSmall};
`;

type LinkProps = AnchorHTMLAttributes<HTMLElement> &
  TextProps & {
    theme?: ThemeType;
    textHoverColor?: string;
    appearance?: 'primary' | 'secondary';
    innerRef?: Ref<any>;
  };

type StyledLinkProps = AnchorHTMLAttributes<HTMLElement> &
  TextProps & {
    theme: ThemeType;
    textHoverColor?: string;
    appearance?: 'primary' | 'secondary';
    innerRef?: Ref<any>;
  };

const StyledLink = styled(Text)<StyledLinkProps>`
  transition: color 0.2s ease;
  color: ${({ theme: { colors }, textColor, appearance }) =>
    textColor && typeof colors[textColor] !== 'undefined'
      ? colors[textColor]
      : textColor
      ? textColor
      : appearance && appearance === 'primary'
      ? colors['secondary']
      : colors['linkColor']};
  text-decoration: ${({
    appearance,
    theme: {
      typography: { linkTextDecoration },
    },
  }) => (appearance === 'primary' || appearance === 'secondary' ? 'none' : linkTextDecoration)};

  ${({
    appearance,
    theme: {
      typography: { fontWeightHeavy },
    },
  }: StyledLinkProps) =>
    (appearance === 'primary' || appearance === 'secondary') &&
    css`
      font-weight: ${fontWeightHeavy};
    `}

  &:hover {
    cursor: pointer;
    color: ${({ theme: { colors }, textHoverColor }) =>
      textHoverColor && typeof colors[textHoverColor] !== 'undefined'
        ? colors[textHoverColor]
        : textHoverColor
        ? textHoverColor
        : colors['linkColorHover']};
  }
`;

const Link: FunctionComponent<LinkProps> = forwardRef((props: LinkProps, ref?: Ref<HTMLElement>) => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  // security by default
  const rel = props.rel ? props.rel : 'noopener noreferrer';

  return (
    <ThemeProvider theme={theme}>
      <StyledLink {...props} theme={theme} rel={rel} forwardedAs="a" innerRef={ref}>
        {props.appearance === 'primary' && <ChevyWithLevee name={'chevronRightBold'} size="0.8em" />}
        {props.children}
      </StyledLink>
    </ThemeProvider>
  );
});

export default withTheme(Link);
