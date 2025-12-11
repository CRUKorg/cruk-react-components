import React, { useState, type HTMLAttributes, type ReactNode } from "react";

import { useScrollPosition } from "../../hooks/useScrollPosition";

import {
  StyledHeader,
  HeaderStickyContainer,
  HeaderStickyPlaceHolder,
  HeaderMainContent,
  SkipToMain,
  StyledLink,
  Logo,
  LogoWrapper,
  Tagline,
  ChildWrapper,
  ChildInner,
} from "./styles";

import { type ThemeNameType } from "src/types";

const HEADER_SCROLL_THRESHOLD = 240;

const crukLogoUrl =
  "https://rcl.assets.cancerresearchuk.org/images/logos/cruk.svg";
const rflLogoUrl =
  "https://rcl.assets.cancerresearchuk.org/images/logos/rfl.svg";
const su2cLogoUrl =
  "https://rcl.assets.cancerresearchuk.org/images/logos//su2c-160.png";
const bowelbabeLogoUrl =
  "https://rcl.assets.cancerresearchuk.org/images/logos//bowelbabe-logo-160.png";

function getLogoFromThemeName(themeName: ThemeNameType) {
  switch (themeName) {
    case "su2c":
      return su2cLogoUrl;
    case "bowelbabe":
      return bowelbabeLogoUrl;
    case "rfl":
      return rflLogoUrl;
    default:
      return crukLogoUrl;
  }
}

/**
 * There should be only one header component near or at the top of the body of each page.
 *
 * ### Logos
 * It is recommended that logo images are at least 80px high if they are not SVGs and that the logo is still clearly legible when reduced to 40px high for mobile.
 * It is also recommended that the logo width doesn't exceed 350px. If you need a wide logo that is shorter than 80px to keep the aspect ratio please make sure that the logo is centered with transparent space at the top and bottom and still 80px high.
 *
 * ### Site Slogan Text (optional)
 * This is a single line of text and the character limit depends on the theme, logo and children width. This is only visible on desktop at the top of the page
 *
 * ### Right section (optional)
 * This has been kept quite open you can place any child elements in here but ideally it is narrow and its height is 50px or smaller.
 *
 * ### Accessability
 * There is a hidden skip link in the header which will only reveals itself on the first tab and to screen readers. This link helps users skip to the main page content, however this will only work with there is an element with an id of 'main' which the developer should create for every page.
 *
 */
export function Header({
  themeName,
  isSticky,
  siteSlogan,
  logoAltText,
  logoImageSrc,
  logoLinkTitle,
  logoLinkUrl,
  fullWidth,
  children,
}: HTMLAttributes<HTMLElement> & {
  themeName: ThemeNameType;
  /** flag which make header fixed to the top even when scrolling */
  isSticky?: boolean;
  /** text in the middle of the header */
  siteSlogan?: string;
  /** text to explain the content of the icon for a11y usually a description of where the link will take you */
  logoAltText?: string;
  /** header logo image url */
  logoImageSrc?: string;
  /** title of the header image component, this is mainly for the tooltip text on hover */
  logoLinkTitle?: string;
  /** the url of the logo link */
  logoLinkUrl?: string;
  /** instead of the contents of the header being centered to max width as defined in theme it is 100% width fo viewport */
  fullWidth?: boolean;

  children?: ReactNode;
}) {
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
    50,
  );

  const logoUrl = getLogoFromThemeName(themeName);

  return (
    <StyledHeader>
      <HeaderStickyPlaceHolder>
        <HeaderStickyContainer
          data-testid="header-sticky-container"
          $isSmall={isSmall}
          $isSticky={isSticky}
        >
          <SkipToMain href="#main">Skip to main content</SkipToMain>
          <HeaderMainContent $fullWidth={fullWidth}>
            <StyledLink
              href={logoLinkUrl ?? "/"}
              title={logoLinkTitle ?? "Home"}
            >
              <LogoWrapper $isSmall={isSmall} $isSticky={isSticky}>
                <Logo
                  height={80}
                  src={logoImageSrc ?? logoUrl}
                  alt={logoAltText ?? "Cancer Research UK Giving Pages"}
                />
              </LogoWrapper>
            </StyledLink>
            {siteSlogan ? (
              <Tagline $isSmall={isSmall} $isSticky={isSticky}>
                {siteSlogan}
              </Tagline>
            ) : null}
            <ChildWrapper>
              <ChildInner>{children}</ChildInner>
            </ChildWrapper>
          </HeaderMainContent>
        </HeaderStickyContainer>
      </HeaderStickyPlaceHolder>
    </StyledHeader>
  );
}

export default Header;
