import React, { FunctionComponent } from "react";
import { useTheme } from "styled-components";

import defaultTheme from "../../themes/cruk";
import { ICONS } from "./iconList";

import { StyledIcon } from "./styles";

// utility to provide people with a list of icon names
export const ICON_NAMES = Object.keys(ICONS).reduce(
  (acc: { [key: string]: string }, item: string) => {
    acc[item] = item;
    return acc;
  },
  {}
);

export type IconProps = {
  /** name defines the visible icon */
  name: keyof typeof ICONS;
  /** color of icon, inherits current text colour by default */
  color?: string;
  /** size of ion 1.1em by default */
  size?: string;
};

/**
 * The Icon component displays an icon glyph as an `<svg>` element.
 *
 * System icons are designed to be simple, modern, friendly, and sometimes quirky.
 * Each icon is reduced to its minimal form, expressing essential characteristics.
 *
 * This component has been deprecated in favour of IconFa which is more tree-shakable
 * */
const Icon: FunctionComponent<IconProps> = ({
  name,
  color,
  size = "1.1rem",
  ...rest
}) => {
  const foundTheme = useTheme();
  const theme = {
    ...defaultTheme,
    ...foundTheme,
  };
  const icon = ICONS[name];

  return (
    <StyledIcon
      theme={theme}
      alt-text=""
      role="presentation"
      viewBox={`0 0 ${icon.width} ${icon.height}`}
      size={size || "1.1rem"}
      color={color}
      {...rest}
    >
      {icon.paths.map((path: string, index: number) => (
        <path key={index} d={path} />
      ))}
    </StyledIcon>
  );
};

export default Icon;
