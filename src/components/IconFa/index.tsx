import React from "react";
import { type IconDefinition } from "@fortawesome/fontawesome-common-types";

import { StyledIcon } from "./styles";
import {
  themeColorOrString,
  themeSpacingSizeOrString,
} from "../../utils/themeUtils";

export type IconFaProps = {
  /** imported icon definition from "@fortawesome/free-solid-svg-icons" or "@fortawesome/free-brands-svg-icons" */
  faIcon: IconDefinition;
  /** color of icon, inherits current text colour by default */
  color?: string;
  /** size of ion 1.1em by default */
  size?: string;
};

/**
 * The IconFa component (Icon Font Awesome) displays an icon glyph as an `<svg>` element.
 *
 * This is an svg icon wrapper where a font awesome icon definition can be passed in a long with colour and size
 * */
export function IconFa({ faIcon, color, size = "1rem" }: IconFaProps) {
  const [width, height, , , svgPathData] = faIcon.icon;

  return (
    <StyledIcon
      role="presentation"
      viewBox={`0 0 ${width} ${height}`}
      $size={themeSpacingSizeOrString(size)}
      $color={themeColorOrString(color)}
    >
      {svgPathData && <path d={svgPathData as string} />}
    </StyledIcon>
  );
}

export default IconFa;
