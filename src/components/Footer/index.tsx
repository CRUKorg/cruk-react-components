import React, { ReactNode, HTMLAttributes } from "react";
import { useTheme, ThemeProvider } from "styled-components";

import defaultTheme from "../../themes/cruk";
import Text from "../Text";

import {
  StyledFooter,
  FooterContentWrapper,
  FooterSectionLogo,
  FooterSection,
  FooterSectionAddress,
  StyledAddress,
  StyledRegulatorLogo,
  FooterSectionLinks,
  StyledNav,
  StyledUL,
  StyledLI,
} from "./styles";

export type FooterProps = HTMLAttributes<HTMLElement> & {
  /** used to customise text in middle section, it could also be react element, this is not to be confused with the component children which is primarily for the links in the footer */
  middleSection?: ReactNode;
  children?: ReactNode;
};

/**
 * There should be only one footer component at the bottom of the body of each page. Links can be passed as children
 * */
export const Footer = ({ children, middleSection }: FooterProps) => {
  const childArray = React.Children.toArray(children);

  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledFooter>
        <FooterContentWrapper>
          <FooterSectionLogo>
            <StyledRegulatorLogo
              width={130}
              height={40}
              alt={theme.siteConfig.footerLogoAlt || ""}
              src={theme.siteConfig.footerLogoSrc || ""}
            />
          </FooterSectionLogo>
          <FooterSectionLinks>
            <StyledNav aria-label="footer links">
              <StyledUL>
                {childArray.length
                  ? childArray.map((child, index) => (
                      // not ideal but we don't have anything other than indexes here
                      // eslint-disable-next-line react/no-array-index-key
                      <StyledLI key={`footerLink${index}`}>{child}</StyledLI>
                    ))
                  : null}
              </StyledUL>
            </StyledNav>
          </FooterSectionLinks>

          <FooterSection>
            {middleSection ? (
              typeof middleSection === "string" ? (
                <Text textSize="s">{middleSection}</Text>
              ) : (
                <>{middleSection}</>
              )
            ) : (
              <Text textSize="s">{theme.siteConfig.footerCopyText}</Text>
            )}
          </FooterSection>

          <FooterSectionAddress>
            <StyledAddress>
              <Text as="span" textSize="s">
                2 Redman Place
              </Text>
              <Text as="span" textSize="s">
                London
              </Text>
              <Text as="span" textSize="s">
                E20 1JQ
              </Text>
            </StyledAddress>
          </FooterSectionAddress>
        </FooterContentWrapper>
      </StyledFooter>
    </ThemeProvider>
  );
};

export default Footer;
