import styled from "styled-components";
import { type ThemeType } from "../../types";

type ThemeProps = {
  theme: ThemeType;
};
export const StyledFooter = styled.footer<ThemeProps>`
  ${({ theme }) => theme.colors.inputBorder};
  box-sizing: border-box;
  display: block;
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.footerBackground};
`;

export const FooterContentWrapper = styled.div<ThemeProps>`
  max-width: ${({ theme }) => theme.utilities.contentMaxWidth};
  display: block;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterSection = styled.div<ThemeProps>`
  box-sizing: border-box;
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.xs};
  position: relative;
  width: 100%;
  flex: 0 1 auto;
`;

export const FooterSectionLogo = styled(FooterSection)`
  width: 50%;
  display: block;
  float: left;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex: 0 0 140px;
    width: auto;
  }
`;

// TODO: I'm assuming here that the links have fixed width here with a flex basis
// and the company info expands to fill the gap but it could be the other way round
export const FooterSectionLinks = styled(FooterSection)`
  width: 50%;
  display: block;
  float: left;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex: 0 0 170px;
    width: auto;
  }
`;

export const StyledNav = styled.nav<ThemeProps>`
  display: flex;
  flex-direction: column;
  a {
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({
      theme: {
        typography: { fontWeightLinks },
      },
    }: ThemeProps) => fontWeightLinks};
  }
`;

export const StyledUL = styled.ul`
  padding: 0;
  margin: 0;
`;

export const StyledLI = styled.li<ThemeProps>`
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

export const FooterSectionAddress = styled(FooterSection)`
  flex: 0 0 150px;
`;

export const StyledRegulatorLogo = styled.img`
  height: 40px;
  width: auto;
`;

export const StyledAddress = styled.address`
  display: flex;
  flex-direction: column;
  font-style: normal;
`;
