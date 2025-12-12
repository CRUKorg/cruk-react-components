import styled from "styled-components";
import { type ThemeType } from "../../types";

const HEADER_HEIGHT_LARGE = "120px";
const HEADER_HEIGHT_SMALL = "72px";
const HEADER_PADDING = "var(--spacing-xs, 1rem)";
const HEADER_LOGO_HEIGHT_LARGE = "80px";
const HEADER_LOGO_HEIGHT_SMALL = "40px";
const ANIMATION_SPEED = "0.2s";

export const StyledHeader = styled.header<{ theme: ThemeType }>`
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

export const HeaderStickyPlaceHolder = styled.div<{ theme: ThemeType }>`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: ${HEADER_HEIGHT_SMALL};

  @media (min-width: 992px) {
    height: ${HEADER_HEIGHT_LARGE};
  }
`;

export const HeaderStickyContainer = styled.div<{
  $isSmall?: boolean;
  $isSticky?: boolean;
  theme: ThemeType;
}>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 ${HEADER_PADDING};
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
  height: ${HEADER_HEIGHT_SMALL};
  box-shadow: ${({ theme, $isSticky }) =>
    $isSticky ? theme.shadows.l : "none"};
  top: ${({ $isSticky }) => ($isSticky ? 0 : "auto")};
  position: ${({ $isSticky }) => ($isSticky ? "fixed" : "relative")};
  transition: height ${ANIMATION_SPEED} ease;

  @media (min-width: 992px) {
    position: ${({ $isSticky }) => ($isSticky ? "fixed" : "relative")};
    height: ${({ $isSmall, $isSticky }) =>
      $isSmall && $isSticky ? HEADER_HEIGHT_SMALL : HEADER_HEIGHT_LARGE};
  }
`;

export const HeaderMainContent = styled.div<{
  $fullWidth?: boolean;
  theme: ThemeType;
}>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: ${({ $fullWidth }) =>
    $fullWidth ? `100%` : `var(--content-max-width, 1000px)`};
`;

export const Logo = styled.img`
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 100%;
`;

export const LogoWrapper = styled.div<{
  $isSmall?: boolean;
  $isSticky?: boolean;
  theme: ThemeType;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: auto;
  transition: height ${ANIMATION_SPEED} ease;

  height: ${HEADER_LOGO_HEIGHT_SMALL};

  @media (min-width: 992px) {
    height: ${({ $isSmall, $isSticky }) =>
      $isSmall && $isSticky
        ? HEADER_LOGO_HEIGHT_SMALL
        : HEADER_LOGO_HEIGHT_LARGE};
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
    padding: var(--spacing-xs, 1rem);
    border-radius: 15px;
    border: 4px solid yellow;
    text-align: center;
    font-size: 1.2em;
    z-index: 999;
  }
`;

export const Tagline = styled.p<{
  $isSmall?: boolean;
  $isSticky?: boolean;
  theme: ThemeType;
}>`
  flex: 1 1 auto;
  font-family: ${({ theme }) => theme.typography.fontFamilyHeadings};
  font-weight: ${({ theme }) => theme.typography.fontWeightHeadings};
  font-size: var(--font-size-xl, 1.5625rem);
  color: ${({ theme }) => theme.colors.headerTaglineText};
  text-align: center;
  opacity: 0;
  transition: opacity ${ANIMATION_SPEED} ease;
  display: none;

  @media (min-width: 992px) {
    display: block;
    opacity: ${({ $isSmall, $isSticky }) => ($isSmall && $isSticky ? 0 : 1)};
  }
`;

export const ChildWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ChildInner = styled.div`
  height: auto;
  margin: auto 0;
`;
