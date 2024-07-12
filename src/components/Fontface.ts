import { CustomFontType } from "../types";
import crukTheme from "../themes/cruk";
import rflTheme from "../themes/rfl";
import su2cTheme from "../themes/su2c";
import bowelbabeTheme from "../themes/bowelbabe";

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
          font-weight: ${font.fontWeight || "normal"};
          font-style: normal;
          font-display: fallback;
        }
      `,
    )
    .join("");

export const fontFaceStyleString = `
${buildCustomFonts(crukTheme.typography.customFonts)}
${buildCustomFonts(rflTheme.typography.customFonts)}
${buildCustomFonts(su2cTheme.typography.customFonts)}
${buildCustomFonts(bowelbabeTheme.typography.customFonts)}
`;

export default fontFaceStyleString;
