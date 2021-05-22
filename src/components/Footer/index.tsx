import React, { FunctionComponent, ReactNode } from 'react';
import styled, { useTheme, ThemeProvider } from 'styled-components';

import defaultTheme from 'src/themes/cruk';
import Text from 'src/components/Text';

const StyledFooter = styled.footer`
  box-sizing: border-box;
  display: block;
  position: relative;
  width: 100%;
  background-color: ${({
    theme: {
      colors: { footerBackground },
    },
  }) => footerBackground};
`;

const FooterContentWrapper = styled.div`
  max-width: ${({
    theme: {
      utilities: { contentMaxWidth },
    },
  }) => contentMaxWidth};
  display: block;
  margin: 0 auto;

  @media (min-width: ${({
      theme: {
        breakpoint: { desktop },
      },
    }) => desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterSection = styled.div`
  display: inline-block;
  padding: ${({
    theme: {
      spacing: { xs },
    },
  }) => xs};
  position: relative;
  width: 100%;
  flex: 0 1 auto;
`;

const FooterSectionLogo = styled(FooterSection)`
  width: 50%;
  display: block;
  float: left;

  @media (min-width: ${({
      theme: {
        breakpoint: { desktop },
      },
    }) => desktop}) {
    flex: 0 0 140px;
    width: auto;
  }
`;

// TODO: I'm assuming here that the links have fixed width here with a flex basis
// and the company info expands to fill the gap but it could be the other way round
const FooterSectionLinks = styled(FooterSection)`
  width: 50%;
  display: block;
  float: left;

  @media (min-width: ${({
      theme: {
        breakpoint: { desktop },
      },
    }) => desktop}) {
    flex: 0 0 170px;
    width: auto;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;

  /* TODO: make this work with themes currently there is no difference, will fix when themes are strongly typed */
  a {
    font-size: ${({
      theme: {
        fontSizes: { s },
      },
    }) => s};
    font-weight: ${({
      theme: {
        typography: { fontWeightHeavy },
      },
    }) => fontWeightHeavy};
  }
`;

const StyledUL = styled.ul`
  padding: 0;
  margin: 0;
`;

const StyledLI = styled.li`
  list-style-type: none;
  display: block;
  padding: 0;
  margin: 0;
  line-height: 1;
  padding-bottom: ${({
    theme: {
      spacing: { xxs },
    },
  }) => xxs};
`;

const FooterSectionAddress = styled(FooterSection)`
  flex: 0 0 150px;
`;

const StyledRegulatorLogo = styled.img`
  height: 40px;
  width: auto;
`;

const StyledAddress = styled.address`
  display: flex;
  flex-direction: column;
  font-style: normal;
`;

type FooterPropsType = {
  middleSection?: ReactNode;
};

export const Footer: FunctionComponent<FooterPropsType> = props => {
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
