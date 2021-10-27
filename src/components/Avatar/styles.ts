import styled from "styled-components";
import { ThemeType } from "src/types";

type AvatarStyledProps = {
  size?: string;
  theme: ThemeType;
};

export const StyledAvatar = styled.img<AvatarStyledProps>`
  border-radius: 50%;
  height: ${({ size }) => size};
  object-fit: cover;
  width: ${({ size }) => size};
`;

export default StyledAvatar;
