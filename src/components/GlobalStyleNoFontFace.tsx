import { createGlobalStyle, withTheme } from "styled-components";
import { crukTheme as defaultTheme } from "../themes/cruk";

export const GlobalStyleNoFontFace = withTheme(createGlobalStyle`
  ${(props) => {
    const theme = {
      ...defaultTheme,
      ...props.theme,
    };
    return `
      html {
        font-size: ${theme.typography.fontSizeBase};
        font-family: ${theme.typography.fontFamilyBase};
        line-height: ${theme.typography.lineHeight};
      }
      body {
        background-color: ${theme.colors.backgroundMidLight};
        color: ${theme.colors.textDark};
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        -webkit-text-size-adjust: 100%;
        -moz-text-size-adjust: none;
        -ms-text-size-adjust: 100%;
      }
    `;
  }}
  *, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  @media (prefers-reduced-motion: reduce) {
    *, *:after, *:before {
      animation-play-state: paused !important;
      animation-direction: reverse !important;
      transition: none !important;
      scroll-behavior: auto !important;
    }
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
  section {
    width: 100%;
  }
    button {
    font-size: 1em;
  }
`);

GlobalStyleNoFontFace.defaultProps = {
  theme: defaultTheme,
};

export default GlobalStyleNoFontFace;
