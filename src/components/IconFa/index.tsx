import React from "react";
import { type IconDefinition } from "@fortawesome/fontawesome-common-types";

import {
  themeColorOrString,
  themeSpacingSizeOrString,
} from "../../utils/themeUtils";

import { type spaces, type colours } from "src/types";

/**
 * The IconFa component (Icon Font Awesome) displays an icon glyph as an `<svg>` element.
 *
 * This is an svg icon wrapper where a font awesome icon definition can be passed in a long with colour and size
 * */
export function IconFa({
  faIcon,
  size,
  color,
}: {
  /** imported icon definition from "@fortawesome/free-solid-svg-icons" or "@fortawesome/free-brands-svg-icons" */
  faIcon: IconDefinition;
  /** size of ion 1.1em by default */
  size?: (typeof spaces)[number] | "full" | string;
  /** color of icon */
  color?: string | (typeof colours)[number];
}) {
  const [width, height, , , svgPathData] = faIcon.icon;

  const themeColorOrStringValue = themeColorOrString(color);
  const themeSizeValueOrString = themeSpacingSizeOrString(size || "xs");

  return (
    <svg
      className={"component-icon-fa"}
      role="presentation"
      viewBox={`0 0 ${width} ${height}`}
      style={{
        color: themeColorOrStringValue,
        height: themeSizeValueOrString,
        width: themeSizeValueOrString,
      }}
    >
      {svgPathData && <path d={svgPathData as string} />}
    </svg>
  );
}

export default IconFa;
