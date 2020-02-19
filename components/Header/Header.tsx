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
const HEADER_SCROLL_DOWN_THRESHOLD = 0;
const HEADER_SCROLL_UP_THRESHOLD = 120;

const HEADER_LOGO_HEIGHT_LARGE = '80px';
const HEADER_LOGO_HEIGHT_SMALL = '40px';

const HEADER_TRANSITION = '0.2s linear';

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
  transition: height ${HEADER_TRANSITION};
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

  @media (min-width: ${BREAKPOINT.tablet}) {
    display: block;
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
  transition: height ${HEADER_TRANSITION};
  height: ${HEADER_HEIGHT_SMALL};
  @media (min-width: ${BREAKPOINT.desktop}) {
    height: ${HEADER_HEIGHT_LARGE};
  }
`;

type HeaderStickyContainerProps = {
  isSmall: boolean;
  isSticky: boolean;
};

const HeaderStickyContainer = styled.div`
  width: 100%;
  transition: height ${HEADER_TRANSITION};
  height: ${HEADER_HEIGHT_SMALL};
  @media (min-width: ${BREAKPOINT.desktop}) {
    height: ${({ isSmall }: HeaderStickyContainerProps) =>
      isSmall ? HEADER_HEIGHT_SMALL : HEADER_HEIGHT_LARGE};
  }
  background-color: ${COLORS.white};
  border-bottom: solid 1px ${COLORS.grayLight};
  position: ${({ isSticky }: HeaderStickyContainerProps) =>
    isSticky ? 'fixed' : 'relative'};
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
  isSticky: boolean;
};

export const Header: FunctionComponent<HeaderProps> = ({
  isSticky,
  children,
}) => {
  const [isSmall, setIsSmall] = useState(false);
  const isBrowser = typeof window !== `undefined`;

  useScrollPosition(
    ({
      prevPos,
      currPos,
    }: {
      prevPos: { x: number; y: number };
      currPos: { x: number; y: number };
    }) => {
      const scrollingDown = prevPos.y <= currPos.y;

      const shouldShrink = isBrowser
        ? scrollingDown
          ? currPos.y > HEADER_SCROLL_DOWN_THRESHOLD
          : currPos.y > HEADER_SCROLL_UP_THRESHOLD
        : false;

      if (shouldShrink !== isSmall) {
        console.log({ shouldShrink });
        setIsSmall(shouldShrink);
      }
    },
    [isSmall],
    null,
    true,
    200,
  );

  return (
    <StyledHeader>
      <HeaderStickyPlaceHolder>
        <HeaderStickyContainer isSmall={isSmall} isSticky={isSticky}>
          <SkipToMain className="skip-main" href="#main">
            Skip to main content
          </SkipToMain>
          <HeaderMainContent>
            <StyledLink href={SITECONFIG.logoUrl} title="Home">
              <LogoWrapper isSmall={isSmall}>
                <Logo src={SITECONFIG.logoSrc} alt={SITECONFIG.logoAlt} />
              </LogoWrapper>
            </StyledLink>
            <Tagline>{SITECONFIG.siteSlogan}</Tagline>
            {children}
          </HeaderMainContent>
        </HeaderStickyContainer>
      </HeaderStickyPlaceHolder>
    </StyledHeader>
  );
};

export default Header;
