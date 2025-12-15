import styled from "styled-components";

export const StyledAvatar = styled.img<{
  $size: "s" | "m" | "l" | "xl";
}>`
  --avatar-size-s: 32px;
  --avatar-size-m: 48px;
  --avatar-size-l: 64px;
  --avatar-size-xl: 128px;

  --_avatar-size: var(--avatar-size-m);
  --_avatar-size: var(--avatar-size-${({ $size }) => $size});

  height: var(--_avatar-size);
  width: var(--_avatar-size);
  box-sizing: border-box;
  border-radius: 50%;
  object-fit: cover;
  border-style: solid;
  border-width: 2px;
  border-color: var(--clr-avatar-border, #cccccc);
`;

export default StyledAvatar;
