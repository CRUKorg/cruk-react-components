import styled from "styled-components";
import { type ThemeType } from "../../types";

export const StyledAvatar = styled.img<{
  $size?: string;
  theme: ThemeType;
}>`
  box-sizing: border-box;
  border-radius: 50%;
  height: ${({ $size }) => $size};
  object-fit: cover;
  width: ${({ $size }) => $size};
  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.avatarBorder};
`;

export default StyledAvatar;
