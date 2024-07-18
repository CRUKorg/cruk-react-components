import styled from "styled-components";
import { type ThemeType } from "../../types";

export const StyledIcon = styled.svg<{
  theme: ThemeType;
  $color?: string;
  $size: string;
}>`
  display: inline-block;
  height: ${({ $size }) => $size};
  margin-top: -0.2em;
  vertical-align: middle;
  width: ${({ $size }) => $size};
  path {
    fill: ${({ $color }) => $color};
  }
`;

export default StyledIcon;
