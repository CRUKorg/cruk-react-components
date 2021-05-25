import styled from 'styled-components';

import defaultTheme from 'src/themes/cruk';

const HEADER_HEIGHT_LARGE = '120px';
const HEADER_HEIGHT_SMALL = '72px';
const HEADER_PADDING = defaultTheme.spacing.s;
const HEADER_LOGO_HEIGHT_LARGE = '80px';
const HEADER_LOGO_HEIGHT_SMALL = '40px';

export const StyledHeader = styled.header<{
  isSmall?: boolean;
  isSticky?: boolean;
  fullWidth?: boolean;
}>`
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

export const HeaderStickyPlaceHolder = styled.div`
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

export const HeaderStickyContainer = styled.div<{ isSmall?: boolean; isSticky?: boolean }>`
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

export const HeaderMainContent = styled.div<{ fullWidth?: boolean }>`
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

export const Logo = styled.img`
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 100%;
`;

export const LogoWrapper = styled.div<{ isSmall?: boolean; isSticky?: boolean }>`
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

export const StyledLink = styled.a`
  display: inline-block;
`;

export const SkipToMain = styled.a`
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

export const Tagline = styled.p<{ isSmall?: boolean; isSticky?: boolean }>`
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
