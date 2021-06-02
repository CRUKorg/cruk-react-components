import React, { FunctionComponent, useState } from 'react';
import { useTheme, ThemeProvider } from 'styled-components';

import { useScrollPosition } from 'src/hooks/useScrollPosition';
import defaultTheme from 'src/themes/cruk';

import {
  StyledHeader,
  HeaderStickyContainer,
  HeaderStickyPlaceHolder,
  HeaderMainContent,
  SkipToMain,
  StyledLink,
  Logo,
  LogoWrapper,
  Tagline,
} from './styles';

const HEADER_SCROLL_THRESHOLD = 66;

type HeaderProps = {
  isSticky?: boolean;
  siteSlogan?: string;
  logoAltText?: string;
  logoImageSrc?: string;
  logoLinkTitle?: string;
  logoLinkUrl?: string;
  fullWidth?: boolean;
};

export const Header: FunctionComponent<HeaderProps> = ({
  isSticky,
  siteSlogan,
  logoAltText,
  logoImageSrc,
  logoLinkTitle,
  logoLinkUrl,
  fullWidth,
  children,
}) => {
  const [isSmall, setIsSmall] = useState(false);
  const isBrowser = typeof window !== `undefined`;
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  useScrollPosition(
    ({ currPos }: { prevPos: { x: number; y: number }; currPos: { x: number; y: number } }) => {
      const shouldShrink = isBrowser ? currPos.y > HEADER_SCROLL_THRESHOLD : false;
      if (shouldShrink !== isSmall) {
        setIsSmall(shouldShrink);
      }
    },
    [isSmall],
    null,
    true,
    100,
  );

  return (
    <ThemeProvider theme={theme}>
      <StyledHeader>
        <HeaderStickyPlaceHolder>
          <HeaderStickyContainer data-cy="header-sticky-container" isSmall={isSmall} isSticky={isSticky}>
            <SkipToMain className="skip-main" href="#main">
              Skip to main content
            </SkipToMain>
            <HeaderMainContent fullWidth={fullWidth}>
              <StyledLink href={logoLinkUrl ?? theme.siteConfig.logoUrl} title={logoLinkTitle ?? 'Home'}>
                <LogoWrapper isSmall={isSmall} isSticky={isSticky}>
                  <Logo src={logoImageSrc ?? theme.siteConfig.logoSrc} alt={logoAltText ?? theme.siteConfig.logoAlt} />
                </LogoWrapper>
              </StyledLink>
              {siteSlogan ? (
                <Tagline isSmall={isSmall} isSticky={isSticky}>
                  {siteSlogan}
                </Tagline>
              ) : null}
              {children}
            </HeaderMainContent>
          </HeaderStickyContainer>
        </HeaderStickyPlaceHolder>
      </StyledHeader>
    </ThemeProvider>
  );
};

export default Header;
