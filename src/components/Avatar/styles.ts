import styled from 'styled-components';

type AvatarStyledProps = {
  size?: string;
};

export const StyledAvatar = styled.img<AvatarStyledProps>`
  border-radius: 50%;
  height: ${({ size }) => size};
  object-fit: cover;
  width: ${({ size }) => size};
`;

export default StyledAvatar;