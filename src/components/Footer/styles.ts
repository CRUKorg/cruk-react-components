import styled from "styled-components";
import { ThemeType } from "../../types";

type ThemeProps = {
  theme: ThemeType;
};
export const StyledFooter = styled.footer`
  box-sizing: border-box;
  display: block;
  position: relative;
  width: 100%;
  background-color: ${({
    theme: {
      colors: { footerBackground },
    },
  }: ThemeProps) => footerBackground};
`;

export const FooterContentWrapper = styled.div`
  max-width: ${({
    theme: {
      utilities: { contentMaxWidth },
    },
  }: ThemeProps) => contentMaxWidth};
  display: block;
  margin: 0 auto;

  @media (min-width: ${({
      theme: {
        breakpoint: { desktop },
      },
    }: ThemeProps) => desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterSection = styled.div`
  box-sizing: border-box;
  display: inline-block;
  padding: ${({
    theme: {
      spacing: { xs },
    },
  }: ThemeProps) => xs};
  position: relative;
  width: 100%;
  flex: 0 1 auto;
`;

export const FooterSectionLogo = styled(FooterSection)`
  width: 50%;
  display: block;
  float: left;

  @media (min-width: ${({
      theme: {
        breakpoint: { desktop },
      },
    }: ThemeProps) => desktop}) {
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

  @media (min-width: ${({
      theme: {
        breakpoint: { desktop },
      },
    }: ThemeProps) => desktop}) {
    flex: 0 0 170px;
    width: auto;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;

  /* TODO: make this work with themes currently there is no difference, will fix when themes are strongly typed */
  a {
    font-size: ${({
      theme: {
        fontSizes: { s },
      },
    }: ThemeProps) => s};
    font-weight: ${({
      theme: {
        typography: { fontWeightHeavy },
      },
    }: ThemeProps) => fontWeightHeavy};
  }
`;

export const StyledUL = styled.ul`
  padding: 0;
  margin: 0;
`;

export const StyledLI = styled.li`
  list-style-type: none;
  display: block;
  padding: 0;
  margin: 0;
  line-height: 1;
  padding-bottom: ${({
    theme: {
      spacing: { xxs },
    },
  }: ThemeProps) => xxs};
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
