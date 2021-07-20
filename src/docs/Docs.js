import React, { useState } from 'react';
import { Router, Link as RouterLink } from '@reach/router';
import styled, { css, ThemeProvider } from 'styled-components';

import { useKey } from '../hooks/useKey';
import MdxProvider from '../hocs/MdxProvider';

// /////////////////////////////////////////////////////////
// HAVE YOU ADDED YOUR COMPONENT TO THE MDX PROVIDER HOC? //
// /////////////////////////////////////////////////////////
import Box from '../components/Box';
import Flex from '../components/Flex';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Select from '../components/Select';
import ThemeCheatSheet from '../components/ThemeCheatSheet';

import AddressLookupReadme from '../components/AddressLookup/README.md';
import AvatarReadme from '../components/Avatar/README.md';
import BadgeReadme from '../components/Badge/README.md';
import BoxReadme from '../components/Box/README.md';
import ButtonReadme from '../components/Button/README.md';
import CheckboxReadme from '../components/Checkbox/README.md';
import CollapseReadme from '../components/Collapse/README.md';
import DateFieldReadme from '../components/DateField/README.md';
import ErrorTextReadme from '../components/ErrorText/README.md';
import FooterReadme from '../components/Footer/README.md';
import HeadingReadme from '../components/Heading/README.md';
import HeaderReadme from '../components/Header/README.md';
import IconReadme from '../components/Icon/README.md';
import LinkReadme from '../components/Link/README.md';
import LegendWrapperReadme from '../components/LegendWrapper/README.md';
import LoaderReadme from '../components/Loader/README.md';
import ModalReadme from '../components/Modal/README.md';
import PaginationReadme from '../components/Pagination/README.md';
import PopOverReadme from '../components/PopOver/README.md';
import ProgressBarReadme from '../components/ProgressBar/README.md';
import RadioReadme from '../components/Radio/README.md';
import RadioGroupReadme from '../components/RadioGroup/README.md';
import SelectReadme from '../components/Select/README.md';
import StepReadme from '../components/Step/README.md';
import TextReadme from '../components/Text/README.md';
import TextAreaFieldReadme from '../components/TextAreaField/README.md';
import TextFieldReadme from '../components/TextField/README.md';
import TotaliserReadme from '../components/Totaliser/README.md';
import UserBlockReadme from '../components/UserBlock/README.md';

import crukTheme, { BREAKPOINT, COLORS } from '../themes/cruk';
import su2cTheme from '../themes/su2c';
import GlobalStyle from '../components/GlobalStyle';

/*
 * Doc specific styling
 * layout, toggle, theme switch, code area
 */
const SwitchTheme = styled(Select)`
  float: right;
  background-color: ${COLORS.backgroundLight};
  max-width: 150px;

  @media (max-width: ${BREAKPOINT.tablet}) {
    padding: 0.025em 1em;
    font-weight: 500;
    width: auto;
  }
`;

const SideBar = styled(Box)`
  margin-left: 0;
  max-width: 265px;
  height: 100vh;
  border: none;
  background-color: ${COLORS.backgroundLight};

  @media (max-width: ${BREAKPOINT.tablet}) {
    bottom: 0;
    height: 100%;
    left: -100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 90px;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 9997;
    -moz-transition: left 0.5s ease;
    transition: left 0.5s ease;
  }

  @media (min-width: ${BREAKPOINT.tablet}) {
    flex: 1;
  }
`;

const Content = styled.div`
  min-width: 100px;
  flex-basis: 0px;
  flex-grow: 1;

  max-width: 940px;
  background-color: ${COLORS.backgroundLight};
  @media (min-width: ${BREAKPOINT.tablet}) {
    flex: 3;
    margin: 0 auto;
  }
`;

const StyledFlex = styled(Flex)`
  display: inline-flex;
  flex-direction: row;
  min-width: 100%;
  background-color: ${COLORS.backgroundLight};

  .sticky & {
    padding-top: 117px;
  }
`;

const BaseToggleStyle = css`
  display: block;
  cursor: pointer;
  position: fixed;
  left: 0;
  top: 90px;
  width: 21px;
  height: 21px;
  margin: 0;
`;

const ToggleIcon = styled.label`
  ${BaseToggleStyle}
  z-index: 9999;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  border-width: 2px 2px 0 0;
  border-style: solid;
  transform: rotate(45deg);

  &:before,
  &:after {
    position: absolute;
    background-color: ${COLORS.textDark};
    content: '';
  }

  &:before {
    right: 0;
    top: -1px;
    height: 2px;
    box-shadow: inset 0 0 0 32px;
    transform: rotate(-45deg);
    width: 21px;
    transform-origin: right top;
  }

  @media (min-width: ${BREAKPOINT.tablet}) {
    display: none;
  }
`;

const StyledToggle = styled.input`
  background-color: ${COLORS.backgroundLight};
  ${BaseToggleStyle}
  opacity: 0;
  z-index: 10000;

  :checked,
  :checked ~ ${ToggleIcon} {
    left: 265px;
  }

  :checked ~ ${SideBar} {
    left: 0;
  }

  :checked ~ ${ToggleIcon} {
    border: 0;
    transform: none;

    &:before,
    &:after {
      left: 22px;
      top: 0;
      height: 27px;
      width: 2px;
    }
    &:before {
      transform: rotate(45deg);
      left: 18px;
    }
    &:after {
      transform: rotate(-45deg);
      box-shadow: 0px 0px 0px 32px inset;
      left: 9px;
      top: -4px;
    }
  }

  @media (min-width: ${BREAKPOINT.tablet}) {
    display: none;
  }
`;

const Toggle = props => <StyledToggle type="checkbox" {...props} />;

const Nav = styled.nav`
  a {
    display: block;
    color: ${COLORS.textDark};
    text-decoration: none;
    margin-left: 10px;

    :hover {
      color: ${COLORS.secondary};
      text-decoration: underline;
    }
  }
`;

const Docs = () => {
  const [theme, setTheme] = useState('cruk');

  useKey(
    () => {
      handleOutline();
    },
    {
      detectKeys: ['keyup'],
    },
    [],
  );

  /*
   * outline when user start tabbing
   * https://jmperezperez.com/outline-focus-ring-a11y/
   */
  const handleOutline = e => {
    if (e.key === 9) {
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('no-focus-outline');
      }
    }
  };

  const themeFile = () => {
    switch (theme) {
      case 'su2c':
        return su2cTheme;
      default:
        return crukTheme;
    }
  };

  return (
    <ThemeProvider theme={themeFile}>
      <GlobalStyle />
      <Header isSticky fullWidth>
        <SwitchTheme
          name="themeSelector"
          onChange={e => {
            setTheme(e.target.value);
          }}
        >
          <option value="cruk">CRUK theme</option>
          <option value="su2c">SU2C theme</option>
        </SwitchTheme>
      </Header>
      <StyledFlex>
        <Toggle />
        <ToggleIcon />
        <SideBar padding="xs">
          <Nav>
            <Heading h4>Components</Heading>
            <RouterLink to="/addresslookup">AddressLookup</RouterLink>
            <RouterLink to="/avatar">Avatar</RouterLink>
            <RouterLink to="/badge">Badge</RouterLink>
            <RouterLink to="/box">Box</RouterLink>
            <RouterLink to="/button">Button</RouterLink>
            <RouterLink to="/checkbox">Checkbox</RouterLink>
            <RouterLink to="/collapse">Collapse</RouterLink>
            <RouterLink to="/DateField">DateField</RouterLink>
            <RouterLink to="/errortext">ErrorText</RouterLink>
            <RouterLink to="/footer">Footer</RouterLink>
            <RouterLink to="/header">Header</RouterLink>
            <RouterLink to="/heading">Heading</RouterLink>
            <RouterLink to="/icon">Icon</RouterLink>
            <RouterLink to="/link">Link</RouterLink>
            <RouterLink to="/loader">Loader</RouterLink>
            <RouterLink to="/legendwrapper">LegendWrapper</RouterLink>
            <RouterLink to="/modal">Modal</RouterLink>
            <RouterLink to="/pagination">Pagination</RouterLink>
            <RouterLink to="/popover">PopOver</RouterLink>
            <RouterLink to="/progressbar">ProgressBar</RouterLink>
            <RouterLink to="/radio">Radio</RouterLink>
            <RouterLink to="/radiogroup">Radio Group</RouterLink>
            <RouterLink to="/select">Select</RouterLink>
            <RouterLink to="/step">Step</RouterLink>
            <RouterLink to="/textareafield">TextAreaField</RouterLink>
            <RouterLink to="/textfield">TextField</RouterLink>
            <RouterLink to="/text">Text</RouterLink>
            <RouterLink to="/totaliser">Totaliser</RouterLink>
            <RouterLink to="/userblock">UserBlock</RouterLink>
            <RouterLink to="/theme">Theme cheatsheet</RouterLink>
          </Nav>
        </SideBar>
        <Content>
          <MdxProvider>
            <Router>
              <AddressLookupReadme default path="/addressLookup" />
              <AvatarReadme path="/avatar" />
              <BadgeReadme path="/badge" />
              <BoxReadme path="/box" />
              <ButtonReadme path="/button" />
              <CheckboxReadme path="/checkbox" />
              <CollapseReadme path="/collapse" />
              <DateFieldReadme path="/DateField" />
              <ErrorTextReadme path="/errortext" />
              <FooterReadme path="/footer" />
              <HeadingReadme path="/heading" />
              <HeaderReadme path="/header" />
              <IconReadme path="/icon" />
              <LinkReadme path="/link" />
              <LegendWrapperReadme path="/legendwrapper" />
              <LoaderReadme path="/loader" />
              <ModalReadme path="/modal" />
              <PaginationReadme path="/pagination" />
              <PopOverReadme path="/popover" />
              <ProgressBarReadme path="/progressbar" />
              <RadioReadme path="/radio" />
              <RadioGroupReadme path="/radiogroup" />
              <SelectReadme path="/select" />
              <StepReadme path="/step" />
              <TextReadme path="/text" />
              <TextAreaFieldReadme path="/textareafield" />
              <TextFieldReadme path="/textfield" />
              <TotaliserReadme path="/totaliser" />
              <UserBlockReadme path="/userblock" />
              <ThemeCheatSheet path="/theme" />
            </Router>
          </MdxProvider>
        </Content>
      </StyledFlex>
    </ThemeProvider>
  );
};

export default Docs;
