import styled from "styled-components";

export const StyledIcon = styled.svg<{
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
