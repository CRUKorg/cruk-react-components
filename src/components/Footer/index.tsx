import React, { FC, ReactNode, HTMLAttributes } from 'react';
import { useTheme, ThemeProvider } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import Text from 'src/components/Text';

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
} from './styles';

export type FooterProps = HTMLAttributes<HTMLElement> & {
  /** used to customise text in middle section, it could also be react element, this is not to be confused with the component children which is primarily for the links in the footer */
  middleSection?: ReactNode;
};

/**
 * There should be only one footer component at the bottom of the body of each page. Links can be passed as children
 * */
export const Footer: FC<FooterProps> = props => {
  const childArray = React.Children.toArray(props.children);

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
              alt="Registered with Fundraising Regulator"
              src="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/images/fundreg.png"
            />
          </FooterSectionLogo>
          <FooterSectionLinks>
            <StyledNav aria-label="footer links">
              <StyledUL>
                {childArray.length ? childArray.map((child, index) => <StyledLI key={index}>{child}</StyledLI>) : null}
              </StyledUL>
            </StyledNav>
          </FooterSectionLinks>

          <FooterSection>
            {!!props.middleSection ? (
              typeof props.middleSection === 'string' ? (
                <Text textSize="s">{props.middleSection}</Text>
              ) : (
                <>{props.middleSection}</>
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
