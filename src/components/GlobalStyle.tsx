import { createGlobalStyle, withTheme } from 'styled-components';
import { COLORS, TYPOGRAPHY, UTILITIES } from '../Constants';

type CustomFont = {
  family: string;
  url: string;
};

const buildCustomFonts = (customFonts: Array<CustomFont>) =>
  customFonts.reduce(
    (fonts, font) =>
      `${fonts}
      @font-face {
      font-family: ${font.family};
      src: url("${font.url}.eot");
      src: url("${font.url}.eot?#iefix") format('embedded-opentype'),
      url("${font.url}.woff") format('woff'),
      url("${font.url}.woff2") format('woff2'),
      url("${font.url}.ttf") format('truetype'),
      url("${font.url}/.svg##{$font-family}") format('svg');
      font-weight: normal;
      font-style: normal;
    }`,
    '',
  );

const GlobalStyle = createGlobalStyle`
  ${props =>
    buildCustomFonts(
      (props.theme as any).typography ? (props.theme as any).typography.customFonts : TYPOGRAPHY.customFonts,
    )}
  html {
    font-size: ${TYPOGRAPHY.fontSizeBase};
    font-family: ${TYPOGRAPHY.fontFamilyBase};
    line-height: ${UTILITIES.lineHeight};
  }
  body {
    background-color: ${COLORS.white};
    color: ${COLORS.grayDarker};
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  *, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  table, td, th {
    border-spacing: 0;
    border: 1px solid #ccc;
    padding: 10px;
  }
  .no-focus-outline a:focus,
  .no-focus-outline button:focus {
    outline: none;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

GlobalStyle.defaultProps = {
  theme: {
    typography: {},
  },
};

export default withTheme(GlobalStyle);
