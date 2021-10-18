import styled from "styled-components";

export const StyledIcon = styled.svg<{ color?: string; size?: string }>`
  display: inline-block;
  height: ${(props) => props.size};
  margin-top: -0.2em;
  vertical-align: middle;
  width: ${(props) => props.size};
  path {
    fill: ${({ theme: { colors }, color }) =>
      color && typeof colors[color] !== "undefined"
        ? colors[color]
        : color
        ? color
        : "currentColor"};
  }
`;
