import React, { FunctionComponent, useState } from 'react';
import styled, { withTheme, ThemeProvider } from 'styled-components';

import { useScrollPosition } from '../../../src/hooks/useScrollPosition';

import defaultTheme from '../../themes/cruk';
import { ThemeType } from '../../types';

const HEADER_HEIGHT_LARGE = '120px';
const HEADER_HEIGHT_SMALL = '72px';
const HEADER_SCROLL_THRESHOLD = 66;
const HEADER_PADDING = defaultTheme.spacing.s;
const HEADER_LOGO_HEIGHT_LARGE = '80px';
const HEADER_LOGO_HEIGHT_SMALL = '40px';

type HeaderStickyContainerProps = {
  isSmall?: boolean;
  isSticky?: boolean;
  fullWidth?: boolean;
};

const StyledHeader = styled.header<HeaderStickyContainerProps>`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  background-color: ${({
    theme: {
      colors: { headerBackground },
    },
  }) => headerBackground};
  z-index: 9998;
`;

const HeaderStickyPlaceHolder = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: ${HEADER_HEIGHT_SMALL};

  @media (min-width: ${({
      theme: {
        breakpoint: { desktop },
      },
    }) => desktop}) {
    height: ${HEADER_HEIGHT_LARGE};
  }
`;

const HeaderStickyContainer = styled.div<HeaderStickyContainerProps>`
  width: 100%;
  padding: 0;
  background-color: ${({
    theme: {
      colors: { headerBackground },
    },
  }) => headerBackground};
  position: relative;
  border-bottom: ${({
    theme: {
      colors: { headerBorder },
    },
  }) => `solid 1px ${headerBorder}`};
  padding: 0 ${HEADER_PADDING};
  height: ${HEADER_HEIGHT_SMALL};

  top: ${({ isSticky }) => (isSticky ? 0 : 'auto')};
  position: ${({ isSticky }) => (isSticky ? 'fixed' : 'relative')};

  @media (min-width: ${({
      theme: {
        breakpoint: { desktop },
      },
    }) => desktop}) {
    position: ${({ isSticky, isSmall }) => (isSticky && isSmall ? 'fixed' : 'relative')};
    height: ${({ isSmall, isSticky }) => (isSmall && isSticky ? HEADER_HEIGHT_SMALL : HEADER_HEIGHT_LARGE)};
  }
`;

const HeaderMainContent = styled.div<HeaderStickyContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: ${({
    fullWidth,
    theme: {
      utilities: { contentMaxWidth },
    },
  }) => (fullWidth ? `100%` : contentMaxWidth)};
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 100%;
`;

const LogoWrapper = styled.div<HeaderStickyContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: auto;

  height: ${HEADER_LOGO_HEIGHT_SMALL};

  @media (min-width: ${({
      theme: {
        breakpoint: { desktop },
      },
    }) => desktop}) {
    height: ${({ isSmall, isSticky }) => (isSmall && isSticky ? HEADER_LOGO_HEIGHT_SMALL : HEADER_LOGO_HEIGHT_LARGE)};
  }
`;

const StyledLink = styled.a`
  display: inline-block;
`;

const SkipToMain = styled.a`
  left: -999px;
  position: absolute;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -999;
  &:focus,
  &:active,
  &:focus-within {
    left: auto;
    top: auto;
    width: 30%;
    height: auto;
    overflow: auto;
    margin: 10px 35%;
    padding: ${({
      theme: {
        spacing: { xs },
      },
    }) => xs};
    border-radius: 15px;
    border: 4px solid yellow;
    text-align: center;
    font-size: 1.2em;
    z-index: 999;
  }
`;

const Tagline = styled.p<HeaderStickyContainerProps>`
  flex: 1 1 auto;
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  font-weight: ${({
    theme: {
      typography: { fontWeightLight },
    },
  }) => fontWeightLight};
  font-size: ${({
    theme: {
      fontSizes: { xl },
    },
  }) => xl};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;

  display: none;

  @media (min-width: ${({
      theme: {
        breakpoint: { desktop },
      },
    }) => desktop}) {
    display: ${({ isSmall, isSticky }) => (isSmall && isSticky ? `none` : `block`)};
  }
`;

type HeaderProps = {
  isSticky?: boolean;
  siteSlogan?: string;
  logoAltText? : string;
  logoImageSrc? : string;
  logoLinkTitle? : string;
  logoLinkUrl? : string;
  fullWidth?: boolean;
  theme?: ThemeType;
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
  ...props
}) => {
  const [isSmall, setIsSmall] = useState(false);
  const isBrowser = typeof window !== `undefined`;

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

  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledHeader>
        <HeaderStickyPlaceHolder>
          <HeaderStickyContainer data-cy="header-sticky-container" isSmall={isSmall} isSticky={isSticky}>
            <SkipToMain className="skip-main" href="#main">
              Skip to main content
            </SkipToMain>
            <HeaderMainContent fullWidth={fullWidth}>
              <StyledLink href={logoLinkUrl ?? theme.siteConfig.logoUrl} title={logoLinkTitle ?? "Home"}>
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

export default withTheme(Header);
