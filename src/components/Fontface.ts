import { CustomFontType } from "../types";
import crukTheme from "../themes/cruk";
import su2cTheme from "../themes/su2c";

// font-display fall back to stop font's flickering on SSR rehydration
const buildCustomFonts = (customFonts: Array<CustomFontType>) =>
  customFonts
    .map(
      (font) => `
        @font-face {
          font-family: ${font.family};
          src: ${
            font?.urlWoff2 ? `url("${font.urlWoff2}") format('woff2')` : ""
          }${!!font.urlWoff && !!font?.urlWoff2 ? ", " : ""}
          ${font?.urlWoff ? `url("${font.urlWoff}") format('woff')` : ""};
          font-weight: normal;
          font-style: normal;
          font-display: fallback;
        }
      `
    )
    .join("");

export const fontFaceStyleString = `
${buildCustomFonts(crukTheme.typography.customFonts)}
${buildCustomFonts(su2cTheme.typography.customFonts)}
`;

export default fontFaceStyleString;
