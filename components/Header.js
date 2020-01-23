// @Flow

import React from 'react';
import styled from 'styled-components';
import { BREAKPOINT, COLORS, SITECONFIG, TYPOGRAPHY, UTILITIES } from './Constants';

type HeaderProps = {
  isSticky: boolean,
};

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${UTILITIES.contentMaxWidth};
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 60px;
  transition: all 0.4s ease;
  
  @media (min-width: ${BREAKPOINT.tablet}) {
    height: inherit;
  }
`;

const SkipToMain = styled.a`
    left:-999px;
    position:absolute;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
    z-index:-999;
  &:focus, &:active, &:focus-within {
    left: auto;
    top: auto;
    width: 30%;
    height: auto;
    overflow:auto;
    margin: 10px 35%;
    padding:5px;
    border-radius: 15px;
    border:4px solid yellow;
    text-align:center;
    font-size:1.2em;
    z-index:999;
  }
`;

const Tagline = styled.p`
  font-family: ${TYPOGRAPHY.fontFamilyHeadings};
  font-weight: ${TYPOGRAPHY.fontWeightLight};
  font-size: ${TYPOGRAPHY.headingLarge};
  color: ${COLORS.primary};
  
  @media (max-width: ${BREAKPOINT.tablet}) {
    display: none;
  }
`;

const StyledHeader = styled.header` 
  padding: 5px 0 0 0;
  position: relative;
  width: 100%;
  border-bottom: solid 1px ${COLORS.grayLight};
  background-color: ${COLORS.white};
  -webkit-transition: all 0.4s ease;
 	transition: all 0.4s ease;
 	z-index: 9998;
 	img {
 	  width: auto;
 	}
 	.sticky & {
    position: fixed;
    z-index: 200;
    padding: 0;
    
    ${Logo} {
      height: 43px;
      margin-top: 4px;
    }
    
    ${Tagline} {
      margin: 0 0 0 110px;
    }
  }
  
  @media (min-width: ${BREAKPOINT.mobile}) {
    padding: 5px;
  }
  @media (min-width: ${BREAKPOINT.desktop}) {
    padding: 15px 0;
  }
`;

class Header extends React.Component<HeaderProps> {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    const body = document.documentElement.classList || document.body.classList;
    if (this.props.isSticky) {
      if (top > 100) {
        body.add('sticky');
      } else {
        body.remove('sticky');
      }
    }
  };

  render() {
    return (
      <StyledHeader {...this.props} onScroll={this.handleScroll}>
        <SkipToMain class="skip-main" href="#main">Skip to main content</SkipToMain>
        <HeaderNav>
          <a href={SITECONFIG.logoUrl} title="Home">
            <Logo
              src={SITECONFIG.logoSrc}
              alt={SITECONFIG.logoAlt}
            />
          </a>
          <Tagline>{SITECONFIG.siteSlogan}</Tagline>
          {this.props.children}
        </HeaderNav>
      </StyledHeader>
    );
  }
}

export default Header;
