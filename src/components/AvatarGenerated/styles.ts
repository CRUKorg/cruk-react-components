import styled from "styled-components";
import { ThemeType } from "../../types";

type AvatarPatternWrapperProps = {
  size?: string;
  theme: ThemeType;
};

export const AvatarPatternWrapper = styled.div<AvatarPatternWrapperProps>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  box-shadow: ${({ theme }: AvatarPatternWrapperProps) => theme.shadows.s};
  border-radius: 50%;
  padding: 0.55rem;
`;

export const ShapeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarPattern = styled.div`
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
`;

type ShapeProps = {
  sizeInt: number;
  colorInt: number;
  theme: ThemeType;
};

const color = ["primary", "secondary", "tertiary"];

export const Shape = styled.div<ShapeProps>`
  border-radius: 50%;
  background-color: ${({ theme: { colors }, colorInt }: ShapeProps) =>
    colors[color[colorInt] as keyof typeof colors]};
  width: ${({ sizeInt }: ShapeProps) => 50 + sizeInt * 5}%;
  height: ${({ sizeInt }: ShapeProps) => 50 + sizeInt * 5}%;
`;
