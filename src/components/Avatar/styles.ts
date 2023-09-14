import styled from "styled-components";
import { ThemeType } from "../../types";

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
  box-shadow: ${({ theme }: AvatarStyledProps) => theme.shadows.s};
`;

export default StyledAvatar;
