import React, { FunctionComponent, useState } from 'react';
import styled, { withTheme } from 'styled-components';

import { useScrollPosition } from '../../../src/hooks/useScrollPosition';

import defaultTheme, { SPACING, BREAKPOINT, UTILITIES, FONT_SIZES, TYPOGRAPHY } from '../../themes/cruk';
import { ThemeType } from '../../themes/types';

// TODO: Should we use REMs? Do all sites use the same base size?
const HEADER_HEIGHT_LARGE = '120px';
const HEADER_HEIGHT_SMALL = '54px';
const HEADER_SCROLL_THRESHOLD = 66;
const HEADER_PADDING = SPACING.small;
const HEADER_LOGO_HEIGHT_LARGE = '80px';
const HEADER_LOGO_HEIGHT_SMALL = '40px';

type HeaderStickyContainerProps = {
  isSmall?: boolean;
  isSticky?: boolean;
};

const StyledHeader = styled.header`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => (theme.colors ? theme.colors.headerBg : defaultTheme.colors.headerBg)};
  z-index: 9998;
`;

const HeaderStickyPlaceHolder = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: ${HEADER_HEIGHT_SMALL};

  @media (min-width: ${BREAKPOINT.desktop}) {
    height: ${HEADER_HEIGHT_LARGE};
  }
`;

const HeaderStickyContainer = styled.div`
  width: 100%;
  padding: 0;
  background-color: ${({ theme }) => (theme.colors ? theme.colors.headerBg : defaultTheme.colors.headerBg)};
  position: relative;
  border-bottom: ${({ theme }) =>
    theme.colors ? `solid 1px ${theme.colors.headerBorder}` : `solid 1px ${defaultTheme.colors.headerBorder}`};
  padding: 0 ${HEADER_PADDING};
  height: ${HEADER_HEIGHT_SMALL};

  top: ${({ isSticky }: HeaderStickyContainerProps) => (isSticky ? 0 : 'auto')};
  position: ${({ isSticky }: HeaderStickyContainerProps) => (isSticky ? 'fixed' : 'relative')};

  @media (min-width: ${BREAKPOINT.desktop}) {
    position: ${({ isSticky, isSmall }: HeaderStickyContainerProps) => (isSticky && isSmall ? 'fixed' : 'relative')};
    height: ${({ isSmall, isSticky }: HeaderStickyContainerProps) =>
      isSmall && isSticky ? HEADER_HEIGHT_SMALL : HEADER_HEIGHT_LARGE};
  }
`;

const HeaderMainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: ${UTILITIES.contentMaxWidth};
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 100%;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: auto;

  height: ${HEADER_LOGO_HEIGHT_SMALL};

  @media (min-width: ${BREAKPOINT.desktop}) {
    height: ${({ isSmall, isSticky }: HeaderStickyContainerProps) =>
      isSmall && isSticky ? HEADER_LOGO_HEIGHT_SMALL : HEADER_LOGO_HEIGHT_LARGE};
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
    padding: ${SPACING.extraSmall};
    border-radius: 15px;
    border: 4px solid yellow;
    text-align: center;
    font-size: 1.2em;
    z-index: 999;
  }
`;

const Tagline = styled.p`
  flex: 1 1 auto;
  font-family: ${({ theme }) =>
    theme.typography ? theme.typography.fontFamilyHeadings : defaultTheme.typography.fontFamilyHeadings};
  font-weight: ${TYPOGRAPHY.fontWeightLight};
  font-size: ${FONT_SIZES.extraLarge};
  color: ${({ theme }) => (theme.colors ? theme.colors.primary : defaultTheme.colors.primary)};
  text-align: center;

  display: none;

  @media (min-width: ${BREAKPOINT.desktop}) {
    display: ${({ isSmall, isSticky }: HeaderStickyContainerProps) => (isSmall && isSticky ? `none` : `block`)};
  }
`;

type HeaderProps = {
  isSticky?: boolean;
  siteSlogan?: string;
  theme?: ThemeType;
};

export const Header: FunctionComponent<HeaderProps> = ({ isSticky, siteSlogan, theme, children }) => {
  const [isSmall, setIsSmall] = useState(false);
  const isBrowser = typeof window !== `undefined`;

  const logoUrl = theme.siteConfig ? theme.siteConfig.logoUrl : defaultTheme.siteConfig.logoUrl;
  const logoSrc = theme.siteConfig ? theme.siteConfig.logoSrc : defaultTheme.siteConfig.logoSrc;
  const logoAlt = theme.siteConfig ? theme.siteConfig.logoAlt : defaultTheme.siteConfig.logoAlt;

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
    <StyledHeader>
      <HeaderStickyPlaceHolder>
        <HeaderStickyContainer className="cy-header-sticky-container" isSmall={isSmall} isSticky={isSticky}>
          <SkipToMain className="skip-main" href="#main">
            Skip to main content
          </SkipToMain>
          <HeaderMainContent>
            <StyledLink href={logoUrl} title="Home">
              <LogoWrapper isSmall={isSmall} isSticky={isSticky}>
                <Logo src={logoSrc} alt={logoAlt} />
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
  );
};

export default withTheme(Header);
