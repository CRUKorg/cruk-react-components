import styled from "styled-components";
import { type ThemeType, type ColorKeyType } from "../../types";

type StyledIconProp = {
  theme: ThemeType;
  color?: string;
  size: string;
};

export const StyledIcon = styled.svg<StyledIconProp>`
  display: inline-block;
  height: ${(props) => props.size};
  margin-top: -0.2em;
  vertical-align: middle;
  width: ${(props) => props.size};
  path {
    fill: ${({ theme: { colors }, color }) =>
      color && typeof colors[color as ColorKeyType] !== "undefined"
        ? colors[color as ColorKeyType]
        : color || "currentColor"};
  }
`;

export default StyledIcon;
