import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
// import { MDXProvider } from '@mdx-js/tag';
import { MDXProvider } from '@mdx-js/react';
import styled, { css, ThemeProvider } from 'styled-components';

import { BREAKPOINT, COLORS } from 'src/Constants';
import su2cTheme from 'src/themes/su2c';
import GlobalStyle from 'src/components/GlobalStyle';

import A from 'src/components/A';
import Avatar from 'src/components/Avatar';
import Badge from 'src/components/Badge';
import Box from 'src/components/Box';
import Button from 'src/components/Button';
import Checkbox from 'src/components/Checkbox';
import Collapse from 'src/components/Collapse';
import ErrorText from 'src/components/ErrorText';
import Flex from 'src/components/Flex';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Heading from 'src/components/Heading';
import Icon from 'src/components/Icon';
import Loader from 'src/components/Loader';
import Modal from 'src/components/Modal';
import P from 'src/components/P';
import PopOver from 'src/components/PopOver';
import ProgressBar from 'src/components/ProgressBar';
import Pagination from 'src/components/Pagination';
import Select from 'src/components/Select';
import Radio from 'src/components/Radio';
import RadioGroup from 'src/components/RadioGroup';
import Span from 'src/components/Span';
import Step from 'src/components/Step';
import TextField from 'src/components/TextField';
import Totaliser from 'src/components/Totaliser';
import UserBlock from 'src/components/UserBlock';

import AvatarReadme from 'src/components/Avatar/README.md';
import BadgeReadme from 'src/components/Badge/README.md';
import BoxReadme from 'src/components/Box/README.md';
import ButtonReadme from 'src/components/Button/README.md';
import CheckboxReadme from 'src/components/Checkbox/README.md';
import CollapseReadme from 'src/components/Collapse/README.md';
import ErrorTextReadme from 'src/components/ErrorText/README.md';
import FooterReadme from 'src/components/Footer/README.md';
import HeadingReadme from 'src/components/Heading/README.md';
import HeaderReadme from 'src/components/Header/README.md';
import IconReadme from 'src/components/Icon/README.md';
import LoaderReadme from 'src/components/Loader/README.md';
import ModalReadme from 'src/components/Modal/README.md';
import PaginationReadme from 'src/components/Pagination/README.md';
import PopOverReadme from 'src/components/PopOver/README.md';
import ProgressBarReadme from 'src/components/ProgressBar/README.md';
import RadioReadme from 'src/components/RadioGroup/README.md';
import SelectReadme from 'src/components/Select/README.md';
import StepReadme from 'src/components/Step/README.md';
import TextFieldReadme from 'src/components/TextField/README.md';
import TotaliserReadme from 'src/components/Totaliser/README.md';
import UserBlockReadme from 'src/components/UserBlock/README.md';

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
    background-color: ${COLORS.grayDarker};
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
    color: ${COLORS.grayDarker};
    text-decoration: none;
    margin-left: 10px;

    :hover {
      color: ${COLORS.secondary};
      text-decoration: underline;
    }
  }
`;

const components = {
  pre: props => <div {...props} />,
  code: ({ children }) => (
    <LiveProvider
      code={children}
      aria-label="Example code"
      scope={{
        A,
        P,
        Span,
        Avatar,
        Badge,
        Button,
        Box,
        Checkbox,
        ErrorText,
        Footer,
        Heading,
        Header,
        Icon,
        Loader,
        Modal,
        Pagination,
        PopOver,
        ProgressBar,
        Radio,
        Select,
        Step,
        TextField,
        Totaliser,
        UserBlock,
        RadioGroup,
        Collapse,
      }}
    >
      <LivePreview aria-label="Example code preview" style={{ border: '1px solid grey', padding: '5px' }} />
      <LiveEditor
        aria-label="Example code editor"
        style={{
          backgroundColor: 'black',
          caretColor: 'white',
          lineHeight: '1',
          fontSize: '0.875rem',
          marginBottom: '20px',
        }}
      />
      <LiveError />
    </LiveProvider>
  ),
  h1: props => <Heading {...props} />,
  h2: props => <Heading h2 {...props} />,
  h3: props => <Heading h3 {...props} />,
  h4: props => <Heading h3 {...props} />,
  h5: props => <Heading h3 {...props} />,
  h6: props => <Heading h3 {...props} />,
};

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
        <MDXProvider components={components}>
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
                <Heading h2>Components</Heading>
                <Link to="/avatar">Avatar</Link>
                <Link to="/badge">Badge</Link>
                <Link to="/box">Box</Link>
                <Link to="/button">Button</Link>
                <Link to="/checkbox">Checkbox</Link>
                <Link to="/collapse">Collapse</Link>
                <Link to="/errortext">ErrorText</Link>
                <Link to="/footer">Footer</Link>
                <Link to="/header">Header</Link>
                <Link to="/heading">Heading</Link>
                <Link to="/icon">Icon</Link>
                <Link to="/loader">Loader</Link>
                <Link to="/modal">Modal</Link>
                <Link to="/pagination">Pagination</Link>
                <Link to="/popover">PopOver</Link>
                <Link to="/progressbar">ProgressBar</Link>
                <Link to="/radio">Radio</Link>
                <Link to="/select">Select</Link>
                <Link to="/step">Step</Link>
                <Link to="/textfield">TextField</Link>
                <Link to="/totaliser">Totaliser</Link>
                <Link to="/userblock">UserBlock</Link>
              </Nav>
            </SideBar>
            <Content>
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
                <SelectReadme path="/select" />
                <StepReadme path="/step" />
                <TextFieldReadme path="/textfield" />
                <TotaliserReadme path="/totaliser" />
                <UserBlockReadme path="/userblock" />
              </Router>
            </Content>
          </StyledFlex>
        </MDXProvider>
      </ThemeProvider>
    );
  }
}

export default Docs;
