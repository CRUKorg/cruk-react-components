import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { useScrollPosition } from '../hooks/useScrollPosition';

import {
  BREAKPOINT,
  COLORS,
  SITECONFIG,
  TYPOGRAPHY,
  UTILITIES,
} from '../Constants';

// TODO: Should we use REMs, do all sites use the same base size
const HEADER_HEIGHT_LARGE = '120px';
const HEADER_HEIGHT_SMALL = '54px';
const HEADER_SCROLL_THRESHOLD = 66;

const HEADER_LOGO_HEIGHT_LARGE = '80px';
const HEADER_LOGO_HEIGHT_SMALL = '40px';

const HEADER_TRANSITION = '0.3s linear';

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
  /* transition: height ${HEADER_TRANSITION}; */
  height: ${HEADER_LOGO_HEIGHT_SMALL};
  @media (min-width: ${BREAKPOINT.desktop}) {
    height: ${({ isSmall }: { isSmall: boolean }) =>
      isSmall ? HEADER_LOGO_HEIGHT_SMALL : HEADER_LOGO_HEIGHT_LARGE};
  }
  width: auto;
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
    padding: 5px;
    border-radius: 15px;
    border: 4px solid yellow;
    text-align: center;
    font-size: 1.2em;
    z-index: 999;
  }
`;

const Tagline = styled.p`
  display: none;
  font-family: ${TYPOGRAPHY.fontFamilyHeadings};
  font-weight: ${TYPOGRAPHY.fontWeightLight};
  font-size: ${TYPOGRAPHY.headingLarge};
  color: ${COLORS.primary};
  text-align: center;
  flex: 1 1 auto;

  @media (min-width: ${BREAKPOINT.desktop}) {
    display: ${({ isSmall }: { isSmall: boolean }) =>
      isSmall ? `none` : `block`};
  }
`;

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
  border-bottom: none;

  @media (min-width: ${BREAKPOINT.desktop}) {
    height: ${HEADER_HEIGHT_LARGE};
    border-bottom: ${({ isSmall }: { isSmall: boolean }) =>
      isSmall ? `none` : `solid 1px ${COLORS.grayLight}`};
  }
`;

type HeaderStickyContainerProps = {
  isSmall: boolean;
  isSticky: boolean;
};

const HeaderStickyContainer = styled.div`
  width: 100%;
  /* transition: height ${HEADER_TRANSITION}; */
  height: ${HEADER_HEIGHT_SMALL};
  background-color: ${COLORS.white};
  position: fixed;
  border-bottom: solid 1px ${COLORS.grayLight};

  @media (min-width: ${BREAKPOINT.desktop}) {
    height: ${({ isSmall }: HeaderStickyContainerProps) =>
      isSmall ? HEADER_HEIGHT_SMALL : `calc(${HEADER_HEIGHT_LARGE} - 1px)`};
    position: ${({ isSticky, isSmall }: HeaderStickyContainerProps) =>
      isSticky && isSmall ? 'fixed' : 'relative'};
    border-bottom: ${({ isSmall }: HeaderStickyContainerProps) =>
      isSmall ? `solid 1px ${COLORS.grayLight}` : `none`};
  }
  top: ${({ isSticky }: HeaderStickyContainerProps) => (isSticky ? 0 : 'auto')};
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

type HeaderProps = {
  isSticky?: boolean;
  logoImageSrc?: string;
  logoLinkUrl?: string;
  logoAltText?: string;
  headerText?: string | null;
};

export const Header: FunctionComponent<HeaderProps> = ({
  isSticky,
  logoImageSrc = SITECONFIG.logoSrc,
  logoLinkUrl = SITECONFIG.logoUrl,
  logoAltText = SITECONFIG.logoAlt,
  headerText = SITECONFIG.siteSlogan,
  children,
}) => {
  const [isSmall, setIsSmall] = useState(false);
  const isBrowser = typeof window !== `undefined`;

  useScrollPosition(
    ({
      currPos,
    }: {
      prevPos: { x: number; y: number };
      currPos: { x: number; y: number };
    }) => {
      const shouldShrink = isBrowser
        ? currPos.y > HEADER_SCROLL_THRESHOLD
        : false;

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
      <HeaderStickyPlaceHolder isSmall={isSmall}>
        <HeaderStickyContainer isSmall={isSmall} isSticky={isSticky}>
          <SkipToMain className="skip-main" href="#main">
            Skip to main content
          </SkipToMain>
          <HeaderMainContent>
            <StyledLink href={logoLinkUrl} title="Home">
              <LogoWrapper isSmall={isSmall}>
                <Logo src={logoImageSrc} alt={logoAltText} />
              </LogoWrapper>
            </StyledLink>
            {headerText && headerText.length && (
              <Tagline isSmall={isSmall}>{headerText}</Tagline>
            )}
            {children}
          </HeaderMainContent>
        </HeaderStickyContainer>
      </HeaderStickyPlaceHolder>
    </StyledHeader>
  );
};

export default Header;
