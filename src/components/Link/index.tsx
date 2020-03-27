import React, { FunctionComponent, AnchorHTMLAttributes } from 'react';
import styled, { css, withTheme, ThemeProvider } from 'styled-components';
import defaultTheme from '../../themes/cruk';

import Text from '../Text';
import Icon, { ICON_NAMES } from '../Icon';

import { ThemeType } from 'src/themes/types';

const ChevyWithLevee = styled(Icon)`
  padding-right: ${({
    theme: {
      spacing: { extraExtraSmall },
    },
  }) => extraExtraSmall};
`;
const Chevron = () => <ChevyWithLevee name={ICON_NAMES.chevronRight} />;

type LinkProps = AnchorHTMLAttributes<{}> & {
  theme?: ThemeType;
  textHoverColor?: string;
  ariaLabel?: string;
  appearance?: 'primary' | 'secondary';
};

const StyledLink = styled(Text)<LinkProps>`
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
  }: LinkProps) =>
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

const Link: FunctionComponent<LinkProps> = props => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  // security by default
  const rel = props.rel ? props.rel : 'noopener noreferrer';

  return (
    <ThemeProvider theme={theme}>
      <StyledLink {...props} forwardedAs="a" theme={theme} rel={rel} aria-label={props.ariaLabel}>
        {props.appearance === 'primary' && <Chevron />}
        {props.children}
      </StyledLink>
    </ThemeProvider>
  );
};

export default withTheme(Link);
