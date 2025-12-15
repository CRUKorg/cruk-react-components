import React, { type ReactNode, type HTMLAttributes } from "react";
import { Text } from "../Text";

import {
  StyledFooter,
  FooterContentWrapper,
  FooterSection,
  StyledAddress,
  StyledRegulatorLogo,
  StyledNav,
  StyledUL,
  StyledLI,
  Bar,
} from "./styles";
import { type ThemeNameType } from "src/types";

const footerTextCruk =
  "Cancer Research UK is a registered charity in England and Wales (1089464), Scotland (SC041666), the Isle of Man (1103) and Jersey (247). A company limited by guarantee. Registered company in England and Wales(4325234) and the Isle of Man (5713F).";
const footerTextSu2c =
  "Stand Up To Cancer and Stand Up To Cancer Brand Marks are registered trademarks of the Entertainment Industry Foundation. Cancer Research UK is a registered charity in England and Wales (1089464), Scotland(SC041666), the Isle of Man (1103) and Jersey (247). A company limited by guarantee. Registered company in England and Wales (4325234) and the Isle of Man (5713F). Registered address: 2 Redman Place, London, E20 1JQ. Donations will be made to Cancer Research UK in support of the Stand Up To Cancer campaign.";
const footerTextBowelBabe =
  "The Bowelbabe Fund for Cancer Research UK, raises money to fund clinical trials, research and cancer information and awareness, as well as other initiatives to combat cancer and support those affected by cancer. The Bowelbabe Fund is a restricted fund within Cancer Research UK. Cancer Research UK is a registered charity in England and Wales (1089464), Scotland (SC041666), the Isle of Man (1103) and Jersey (247) and is registered with the Fundraising Regulator.";

function footerTextForTheme(themeName: string): string {
  switch (themeName) {
    case "su2c":
      return footerTextSu2c;
    case "bowelbabe":
      return footerTextBowelBabe;
    default:
      return footerTextCruk;
  }
}

/**
 * There should be only one footer component at the bottom of the body of each page. Links can be passed as children
 * */
export function Footer({
  children,
  themeName = "cruk",
  footerText,
}: HTMLAttributes<HTMLElement> & {
  /** used to customise text in middle section, it could also be react element, this is not to be confused with the component children which is primarily for the links in the footer */
  middleSection?: ReactNode;
  children?: ReactNode;
  themeName?: ThemeNameType;
  footerText?: string;
}) {
  const childArray = React.Children.toArray(children);

  return (
    <StyledFooter>
      <Bar />
      <FooterContentWrapper>
        <FooterSection>
          <StyledNav aria-label="footer links">
            <StyledUL>
              {childArray.length
                ? childArray.map((child, index) => {
                    const footerLinkKey = `footerLink${index}`;
                    return <StyledLI key={footerLinkKey}>{child}</StyledLI>;
                  })
                : null}
            </StyledUL>
          </StyledNav>
        </FooterSection>
        <FooterSection>
          <StyledRegulatorLogo
            width={130}
            height={40}
            alt="Registered with Fundraising Regulator"
            src="https://rcl.assets.cancerresearchuk.org/images/logos/fundreg.png"
          />
        </FooterSection>

        <FooterSection>
          {footerText ? (
            <Text textSize="m">{footerText}</Text>
          ) : (
            <>
              <Text textSize="m" as="span">
                {footerTextForTheme(themeName)} Registered address:
              </Text>
              <StyledAddress>
                <Text textSize="m" as="span">
                  {" "}
                  2 Redman Place, London, E20 1JQ
                </Text>
              </StyledAddress>
            </>
          )}
        </FooterSection>
      </FooterContentWrapper>
    </StyledFooter>
  );
}

export default Footer;
