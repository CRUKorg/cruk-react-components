import styled from "styled-components";

export const StyledFooter = styled.footer`
  box-sizing: border-box;
  display: block;
  position: relative;
  width: 100%;
  background-color: var(--clr-footer-background, #fff);
  padding-bottom: var(--spacing-m, 2rem);
`;

export const FooterContentWrapper = styled.div`
  max-width: var(--cruk-content-max-width, 1020px);
  display: block;
  margin: 0 auto;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const FooterSection = styled.div`
  box-sizing: border-box;
  display: inline-block;
  padding: var(--spacing-m, 2rem) var(--spacing-xs, 1rem) 0;
  position: relative;
  width: 100%;
  flex: 0 1 auto;
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  a {
    font-size: var(--font-size-m, 1rem);
    font-weight: var(--typ-font-weight-links, 700);
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
  padding-bottom: var(--spacing-xxs, 0.5rem);
`;

export const StyledRegulatorLogo = styled.img`
  height: 40px;
  width: auto;
`;

export const StyledAddress = styled.address`
  display: inline;
  font-style: normal;
`;

export const Bar = styled.hr`
  opacity: 1;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: calc(50% - 50vw);
  border-width: 0px 0px 0.25rem;
  border-image: initial;
  border-color: var(--clr-cruk-black, #000);
  border-style: solid;
  width: auto;
`;
