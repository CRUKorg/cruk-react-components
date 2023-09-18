import styled from "styled-components";
import { ThemeType } from "../../types";

type AvatarStyledProps = {
  size?: string;
  theme: ThemeType;
};

export const StyledAvatar = styled.img<AvatarStyledProps>`
  border-radius: 50%;
  object-fit: cover;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`;

export default StyledAvatar;
