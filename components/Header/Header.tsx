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
const HEADER_SCROLL_THRESHOLD = 100;
const HEADER_HEIGHT_SMALL = '54px';

const HEADER_PADDING = '15px';
const HEADER_PADDING_SMALL = '5px';
const HEADER_LOGO_HEIGHT_LARGE = '100px';
const HEADER_LOGO_HEIGHT_SMALL = '50px';

const HEADER_TRANSITION = '0.3s linear';

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  height: ${HEADER_LOGO_HEIGHT_SMALL};
  @media (min-width: ${BREAKPOINT.desktop}) {
    height: ${({ isSmall }: { isSmall: boolean }) =>
      isSmall ? HEADER_LOGO_HEIGHT_SMALL : HEADER_LOGO_HEIGHT_LARGE};
  }
  transition: height ${HEADER_TRANSITION};
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

  @media (min-width: ${BREAKPOINT.tablet}) {
    display: block;
  }
`;

const StyledHeader = styled.header`
  box-sizing: border-box;
  padding: ${HEADER_PADDING_SMALL} 0 0 0;
  position: relative;
  width: 100%;

  background-color: ${COLORS.white};
  /* TODO: Shouldn't this all haven with post css auto-prefixing */
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  z-index: 9998;
  img {
    width: auto;
  }

  @media (min-width: ${BREAKPOINT.mobile}) {
    padding: ${HEADER_PADDING_SMALL};
  }
  @media (min-width: ${BREAKPOINT.desktop}) {
    padding: ${HEADER_PADDING} 0;
  }
`;

const HeaderStickyPlaceHolder = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT_SMALL};
  @media (min-width: ${BREAKPOINT.desktop}) {
    height: ${({ isSmall }: { isSmall: boolean }) =>
      isSmall ? HEADER_HEIGHT_SMALL : HEADER_HEIGHT_LARGE};
  }
`;

type HeaderStickyContainerProps = {
  isSmall: boolean;
  isSticky: boolean;
};

const HeaderStickyContainer = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT_SMALL};
  transition: height ${HEADER_TRANSITION};
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
      currPos,
    }: {
      prevPos: { x: number; y: number };
      currPos: { x: number; y: number };
    }) => {
      const shouldShrink = isBrowser
        ? currPos.y > HEADER_SCROLL_THRESHOLD
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
      <HeaderStickyPlaceHolder isSmall={isSmall}>
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
