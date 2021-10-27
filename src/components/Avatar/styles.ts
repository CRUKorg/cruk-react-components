import styled from "styled-components";
import { ThemeType, ColorKeyType } from "src/types";

type AvatarStyledProps = {
  size?: string;
  textColor?: string;
  theme: ThemeType;
};

export const StyledAvatar = styled.img<AvatarStyledProps>`
  border-radius: 50%;
  height: ${({ size }) => size};
  object-fit: cover;
  width: ${({ size }) => size};
  color: ${({ theme: { colors }, textColor }: AvatarStyledProps) =>
    textColor && typeof colors[textColor as ColorKeyType] !== "undefined"
      ? colors[textColor as ColorKeyType]
      : textColor || colors.textOnPrimary};
`;

export default StyledAvatar;
