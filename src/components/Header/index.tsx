import React, { FunctionComponent, useState } from 'react';
import styled, { withTheme } from 'styled-components';

import { useScrollPosition } from '../../../src/hooks/useScrollPosition';

import { BREAKPOINT, COLORS, SITECONFIG, FONT_SIZES, TYPOGRAPHY, SPACING, UTILITIES } from '../../Constants';

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
  background-color: ${COLORS.white};
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
  background-color: ${COLORS.white};
  position: relative;
  border-bottom: solid 1px ${COLORS.grayLight};
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
  font-family: ${TYPOGRAPHY.fontFamilyHeadings};
  font-weight: ${TYPOGRAPHY.fontWeightLight};
  font-size: ${FONT_SIZES.extraLarge};
  color: ${COLORS.primary};
  text-align: center;

  display: none;

  @media (min-width: ${BREAKPOINT.desktop}) {
    display: ${({ isSmall, isSticky }: HeaderStickyContainerProps) => (isSmall && isSticky ? `none` : `block`)};
  }
`;

type HeaderProps = {
  isSticky?: boolean;
  theme?: {
    siteConfig?: {
      logoSrc?: string;
      logoUrl?: string;
      logoAlt?: string;
      siteSlogan?: string;
    };
  };
};

export const Header: FunctionComponent<HeaderProps> = ({
  isSticky,
  theme: {
    siteConfig: {
      logoSrc = SITECONFIG.logoSrc,
      logoUrl = SITECONFIG.logoUrl,
      logoAlt = SITECONFIG.logoAlt,
      siteSlogan = SITECONFIG.siteSlogan,
    } = {},
  } = {},

  children,
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
            {siteSlogan && siteSlogan.length && (
              <Tagline isSmall={isSmall} isSticky={isSticky}>
                {siteSlogan}
              </Tagline>
            )}
            {children}
          </HeaderMainContent>
        </HeaderStickyContainer>
      </HeaderStickyPlaceHolder>
    </StyledHeader>
  );
};

export default withTheme(Header);
