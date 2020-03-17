import React from 'react';
import { render } from 'react-dom';
import { Router, Link as RouterLink } from '@reach/router';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import MdxProvider from '../hocs/MdxProvider';
import styled, { css, ThemeProvider } from 'styled-components';

// /////////////////////////////////////////////////////////
// HAVE YOU ADDED YOUR COMPONENT TO THE MDX PROVIDER HOC? //
// /////////////////////////////////////////////////////////
import Button from '../components/Button';
import Box from '../components/Box';
import Flex from '../components/Flex';
import Header from '../components/Header';
import Heading from '../components/Heading';

import AvatarReadme from '../components/Avatar/README.md';
import BadgeReadme from '../components/Badge/README.md';
import BoxReadme from '../components/Box/README.md';
import ButtonReadme from '../components/Button/README.md';
import CheckboxReadme from '../components/Checkbox/README.md';
import CollapseReadme from '../components/Collapse/README.md';
import ErrorTextReadme from '../components/ErrorText/README.md';
import FooterReadme from '../components/Footer/README.md';
import HeadingReadme from '../components/Heading/README.md';
import HeaderReadme from '../components/Header/README.md';
import IconReadme from '../components/Icon/README.md';
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
import TextFieldReadme from '../components/TextField/README.md';
import TotaliserReadme from '../components/Totaliser/README.md';
import UserBlockReadme from '../components/UserBlock/README.md';

import { BREAKPOINT, COLORS } from '../themes/cruk';
import su2cTheme from '../themes/su2c';
import GlobalStyle from '../components/GlobalStyle';

/*
 * Doc specific styling
 * layout, toggle, theme switch, code area
 */
const SwitchTheme = styled(Button)`
  float: right;

  @media (max-width: ${BREAKPOINT.tablet}) {
    font-size: 0.875rem;
    font-weight: 500;
    padding: 5px 10px;
    width: auto;
    margin: 0 40px 0 0;
  }
`;

const SideBar = styled(Box)`
  margin-left: 0;
  max-width: 265px;
  background-color: ${COLORS.grayVLight};
  height: 100vh;
  border: none;

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
  max-width: 940px;
  margin: 0 0 0 32px;

  @media (min-width: ${BREAKPOINT.tablet}) {
    flex: 3;
    margin: 0 auto;
  }
`;

const StyledFlex = styled(Flex)`
  width: 100%;
  padding-top: 0;

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

class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'cruk',
    };
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleOutline);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleOutline);
  }

  /*
   * outline when user start tabbing
   * https://jmperezperez.com/outline-focus-ring-a11y/
   */
  handleOutline = e => {
    if (e.key === 9) {
      document.documentElement.classList.remove('no-focus-outline');
    }
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme === 'su2c' ? su2cTheme : {}}>
        <GlobalStyle />
        <Header isSticky>
          <SwitchTheme
            onClick={() =>
              this.setState({
                theme: this.state.theme === 'su2c' ? 'cruk' : 'su2c',
              })
            }
          >
            Switch theme
          </SwitchTheme>
        </Header>
        <StyledFlex>
          <Toggle />
          <ToggleIcon />
          <SideBar>
            <Nav>
              <Heading h4>Components</Heading>
              <RouterLink to="/avatar">Avatar</RouterLink>
              <RouterLink to="/badge">Badge</RouterLink>
              <RouterLink to="/box">Box</RouterLink>
              <RouterLink to="/button">Button</RouterLink>
              <RouterLink to="/checkbox">Checkbox</RouterLink>
              <RouterLink to="/collapse">Collapse</RouterLink>
              <RouterLink to="/errortext">ErrorText</RouterLink>
              <RouterLink to="/footer">Footer</RouterLink>
              <RouterLink to="/header">Header</RouterLink>
              <RouterLink to="/heading">Heading</RouterLink>
              <RouterLink to="/icon">Icon</RouterLink>
              <RouterLink to="/loader">Loader</RouterLink>
              <RouterLink to="/modal">Modal</RouterLink>
              <RouterLink to="/pagination">Pagination</RouterLink>
              <RouterLink to="/popover">PopOver</RouterLink>
              <RouterLink to="/progressbar">ProgressBar</RouterLink>
              <RouterLink to="/radio">Radio</RouterLink>
              <RouterLink to="/radiogroup">Radio Group</RouterLink>
              <RouterLink to="/select">Select</RouterLink>
              <RouterLink to="/step">Step</RouterLink>
              <RouterLink to="/textfield">TextField</RouterLink>
              <RouterLink to="/text">Text</RouterLink>
              <RouterLink to="/totaliser">Totaliser</RouterLink>
              <RouterLink to="/userblock">UserBlock</RouterLink>
            </Nav>
          </SideBar>
          <Content>
            <MdxProvider>
              <Router>
                <AvatarReadme default path="/avatar" />
                <BadgeReadme path="/badge" />
                <BoxReadme path="/box" />
                <ButtonReadme path="/button" />
                <CheckboxReadme path="/checkbox" />
                <CollapseReadme path="/collapse" />
                <ErrorTextReadme path="/errortext" />
                <FooterReadme path="/footer" />
                <HeadingReadme path="/heading" />
                <HeaderReadme path="/header" />
                <IconReadme path="/icon" />
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
                <TextFieldReadme path="/textfield" />
                <TotaliserReadme path="/totaliser" />
                <UserBlockReadme path="/userblock" />
              </Router>
            </MdxProvider>
          </Content>
        </StyledFlex>
      </ThemeProvider>
    );
  }
}

export default Docs;
