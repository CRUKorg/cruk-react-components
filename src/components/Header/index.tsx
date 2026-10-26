import React, { type HTMLAttributes, type ReactNode } from "react";

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
  isSticky,
  siteSlogan,
  logoAltText,
  logoImageSrc,
  logoLinkTitle,
  logoLinkUrl,
  fullWidth,
  children,
}: HTMLAttributes<HTMLElement> & {
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
  return (
    <header
      className="component-header"
      data-is-sticky={isSticky || false}
      data-full-width={fullWidth || false}
    >
      <div className="header-sticky-placeholder">
        <div
          className="header-sticky-container"
          data-testid="header-sticky-container"
        >
          <a className="skip-to-main" href="#main">
            Skip to main content
          </a>
          <div className="header-main-content" data-full-width={fullWidth}>
            <a
              className="header-logo-link"
              href={logoLinkUrl ?? "/"}
              title={logoLinkTitle ?? "Home"}
            >
              <div className="logo-wrapper">
                <img
                  className={logoImageSrc ? "logo" : "logo logo-themed"}
                  src={logoImageSrc}
                  alt={logoAltText ?? "Cancer Research UK Giving Pages"}
                />
              </div>
            </a>
            {siteSlogan ? <p className="tagline">{siteSlogan}</p> : null}
            <div className="child-wrapper">
              <div className="child-inner">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
