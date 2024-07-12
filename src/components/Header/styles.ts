import styled from "styled-components";

import defaultTheme from "../../themes/cruk";
import { type ThemeType } from "../../types";

const HEADER_HEIGHT_LARGE = "120px";
const HEADER_HEIGHT_SMALL = "72px";
const HEADER_PADDING = defaultTheme.spacing.xs;
const HEADER_LOGO_HEIGHT_LARGE = "80px";
const HEADER_LOGO_HEIGHT_SMALL = "40px";
const ANIMATION_SPEED = "0.2s";

type StyledHeaderProps = {
  theme: ThemeType;
  isSmall?: boolean;
  isSticky?: boolean;
  fullWidth?: boolean;
};

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
  }: StyledHeaderProps) => headerBackground};
  z-index: 9998;
`;

export const HeaderStickyPlaceHolder = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: ${HEADER_HEIGHT_SMALL};

  @media (min-width: ${({
      theme: {
        breakpoint: { desktop },
      },
    }: StyledHeaderProps) => desktop}) {
    height: ${HEADER_HEIGHT_LARGE};
  }
`;

type HeaderStickyProps = {
  isSmall?: boolean;
  isSticky?: boolean;
  theme: ThemeType;
};

export const HeaderStickyContainer = styled.div<HeaderStickyProps>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 ${HEADER_PADDING};
  background-color: ${({
    theme: {
      colors: { headerBackground },
    },
  }: HeaderStickyProps) => headerBackground};
  position: relative;
  border-bottom: ${({
    theme: {
      colors: { headerBorder },
    },
  }: HeaderStickyProps) => `solid 1px ${headerBorder}`};
  height: ${HEADER_HEIGHT_SMALL};
  box-shadow: ${({ theme, isSticky }: HeaderStickyProps) =>
    isSticky ? theme.shadows.l : "none"};
  top: ${({ isSticky }) => (isSticky ? 0 : "auto")};
  position: ${({ isSticky }) => (isSticky ? "fixed" : "relative")};
  transition: height ${ANIMATION_SPEED} ease;

  @media (min-width: ${({
      theme: {
        breakpoint: { desktop },
      },
    }: HeaderStickyProps) => desktop}) {
    position: ${({ isSticky }: HeaderStickyProps) =>
      isSticky ? "fixed" : "relative"};
    height: ${({ isSmall, isSticky }: HeaderStickyProps) =>
      isSmall && isSticky ? HEADER_HEIGHT_SMALL : HEADER_HEIGHT_LARGE};
  }
`;

export const HeaderMainContent = styled.div<{ fullWidth?: boolean }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: ${({
    fullWidth,
    theme: {
      utilities: { contentMaxWidth },
    },
  }: StyledHeaderProps) => (fullWidth ? `100%` : contentMaxWidth)};
`;

export const Logo = styled.img`
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 100%;
`;

type LogoWrapperProps = {
  isSmall?: boolean;
  isSticky?: boolean;
};

export const LogoWrapper = styled.div<LogoWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: auto;
  transition: height ${ANIMATION_SPEED} ease;

  height: ${HEADER_LOGO_HEIGHT_SMALL};

  @media (min-width: ${({
      theme: {
        breakpoint: { desktop },
      },
    }: StyledHeaderProps) => desktop}) {
    height: ${({ isSmall, isSticky }: StyledHeaderProps) =>
      isSmall && isSticky
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
    padding: ${({
      theme: {
        spacing: { xs },
      },
    }: StyledHeaderProps) => xs};
    border-radius: 15px;
    border: 4px solid yellow;
    text-align: center;
    font-size: 1.2em;
    z-index: 999;
  }
`;

export const Tagline = styled.p<{ isSmall?: boolean; isSticky?: boolean }>`
  flex: 1 1 auto;
  font-family: ${({ theme }: StyledHeaderProps) =>
    theme.typography.fontFamilyHeadings};
  font-weight: ${({ theme }: StyledHeaderProps) =>
    theme.typography.fontWeightHeadings};
  font-size: ${({
    theme: {
      fontSizes: { xl },
    },
  }: StyledHeaderProps) => xl};
  color: ${({ theme }: StyledHeaderProps) => theme.colors.headerTaglineText};
  text-align: center;
  opacity: 0;
  transition: opacity ${ANIMATION_SPEED} ease;
  display: none;

  @media (min-width: ${({
      theme: {
        breakpoint: { desktop },
      },
    }: StyledHeaderProps) => desktop}) {
    display: block;
    opacity: ${({ isSmall, isSticky }: StyledHeaderProps) =>
      isSmall && isSticky ? 0 : 1};
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
