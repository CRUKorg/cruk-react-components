import styled from "styled-components";
import { type ThemeType } from "../../types";

export const StyledIcon = styled.svg<{
  theme: ThemeType;
  $color?: string;
  $size: string;
}>`
  display: inline-block;
  vertical-align: middle;
  height: ${({ $size }) => $size};
  width: ${({ $size }) => $size};
  path {
    fill: ${({ $color }) => $color};
  }
`;

export default StyledIcon;
