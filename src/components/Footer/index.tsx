import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { COLORS, UTILITIES, SPACING, FONT_SIZES, BREAKPOINT, TYPOGRAPHY } from '../../Constants';
import Text, { TextStyled } from '../Text';

const StyledFooter = styled.footer`
  box-sizing: border-box;
  display: block;
  position: relative;
  width: 100%;
  background-color: ${COLORS.grayLight};
`;

const FooterContentWrapper = styled.div`
  max-width: ${UTILITIES.contentMaxWidth};
  display: block;

  @media (min-width: ${BREAKPOINT.desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterSection = styled.div`
  display: block;
  padding: ${SPACING.extraSmall};
  position: relative;
  width: 100%;
  flex: 0 1 auto;
`;

const FooterSectionLogo = styled(FooterSection)`
  flex: 0 0 140px;
`;

const FooterSectionAddress = styled(FooterSection)`
  flex: 0 0 150px;
`;

// TODO: I'm assuming here that the links have fixed width here with a flex basis
// and the company info expands to fill the gap but it could be the other way round
const FooterSectionLinks = styled(FooterSection)`
  flex: 0 0 170px;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;

  /* TODO: make this work with themes currently there is no difference, will fix when themes are strongly typed */
  ${TextStyled} {
    font-size: ${FONT_SIZES.small};
    font-weight: ${TYPOGRAPHY.fontWeightHeavy};
  }
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

export const Footer: FunctionComponent = ({ children }) => (
  <StyledFooter>
    <FooterContentWrapper>
      <FooterSectionLogo>
        <StyledRegulatorLogo
          alt="Registered with Fundraising Regulator"
          src="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/images/fundreg.png"
        />
      </FooterSectionLogo>
      <FooterSectionLinks>
        <StyledNav>{children}</StyledNav>
      </FooterSectionLinks>

      <FooterSection>
        <Text textSize="small">
          Cancer Research UK is a registered charity in England and Wales (1089464), Scotland (SC041666), the Isle of
          Man (1103) and Jersey (247). Registered as a company limited by guarantee in England and Wales No. 4325234.
        </Text>
      </FooterSection>

      <FooterSectionAddress>
        <StyledAddress>
          <Text as="span" textSize="small">
            2 Redman Place
          </Text>
          <Text as="span" textSize="small">
            London
          </Text>
          <Text as="span" textSize="small">
            E20 1JQ
          </Text>
        </StyledAddress>
      </FooterSectionAddress>
    </FooterContentWrapper>
  </StyledFooter>
);

export default Footer;
