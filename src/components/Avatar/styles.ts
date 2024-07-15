import styled from "styled-components";
import { type ThemeType } from "../../types";

type AvatarStyledProps = {
  size?: string;
  theme: ThemeType;
};

export const StyledAvatar = styled.img<AvatarStyledProps>`
  box-sizing: border-box;
  border-radius: 50%;
  height: ${({ size }) => size};
  object-fit: cover;
  width: ${({ size }) => size};
  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }: AvatarStyledProps) => theme.colors.avatarBorder};
`;

export default StyledAvatar;
