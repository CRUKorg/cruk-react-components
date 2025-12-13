import styled from "styled-components";

export const StyledHeader = styled.header`
  --_header-height-large: 120px;
  --_header-height-small: 72px;
  --_header-logo-height-large: 80px;
  --_header-logo-height-small: 40px;
  --_header-padding: var(--spacing-xs, 1rem);
  --_animation-speed: 0.2s;

  box-sizing: border-box;
  position: relative;
  width: 100%;
  background-color: var(--clr-header-background, #ffffff);
  z-index: 9998;
`;

export const HeaderStickyPlaceHolder = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: var(--_header-height-small, 72px);

  @media (min-width: 992px) {
    height: var(--_header-height-large, 120px);
  }
`;

export const HeaderStickyContainer = styled.div<{
  $isSmall?: boolean;
  $isSticky?: boolean;
}>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 var(--_header-padding, 1rem);
  background-color: var(--clr-header-background, #ffffff);
  position: relative;
  border-bottom: solid 1px var(--clr-header-border, #e6e6e6);
  height: var(--_header-height-small, 72px);
  box-shadow: ${({ $isSticky }) => ($isSticky ? "var(--shadow-l)" : "none")};
  top: ${({ $isSticky }) => ($isSticky ? 0 : "auto")};
  position: ${({ $isSticky }) => ($isSticky ? "fixed" : "relative")};
  transition: height var(--_animation-speed, 0.2s) ease;
  @media (min-width: 992px) {
    position: ${({ $isSticky }) => ($isSticky ? "fixed" : "relative")};
    height: ${({ $isSmall, $isSticky }) =>
      $isSmall && $isSticky
        ? "var(--_header-height-small, 72px)"
        : "var(--_header-height-large, 120px)"};
  }
`;

export const HeaderMainContent = styled.div<{
  $fullWidth?: boolean;
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
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: auto;
  transition: height var(--_animation-speed, 0.2s) ease;

  height: var(--_header-logo-height-small, 40px);

  @media (min-width: 992px) {
    height: ${({ $isSmall, $isSticky }) =>
      $isSmall && $isSticky
        ? "var(--_header-logo-height-small, 40px)"
        : "var(--_header-logo-height-large, 80px)"};
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
}>`
  flex: 1 1 auto;
  font-family: var(--typ-font-family-headings, "Progress", Arial, sans-serif);
  font-weight: var(--typ-font-weight-headings, 400);
  font-size: var(--font-size-xl, 1.5625rem);
  color: var(--clr-header-tagline-text, #000000);
  text-align: center;
  opacity: 0;
  transition: opacity var(--_animation-speed, 0.2s) ease;
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
