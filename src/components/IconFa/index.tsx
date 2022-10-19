import React from "react";
import { useTheme } from "styled-components";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import defaultTheme from "../../themes/cruk";

import { StyledIcon } from "./styles";

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
const IconFa = ({ faIcon, color, size = "1.1rem", ...rest }: IconFaProps) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };

  const [width, height, , , svgPathData] = faIcon.icon;

  return (
    <StyledIcon
      theme={theme}
      alt-text=""
      role="presentation"
      viewBox={`0 0 ${width} ${height}`}
      size={size || "1.1rem"}
      color={color}
      {...rest}
    >
      {svgPathData && <path d={svgPathData as string} />}
    </StyledIcon>
  );
};

export default IconFa;
