import styled, { keyframes } from "styled-components";
import { type ColorKeyType, type ThemeType } from "../../types";
import Box from "../Box";
import { Button } from "../Button";

export const Wrapper = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

const grow = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
`;

export const Content = styled(Box)<{
  $backgroundColor?: string;
  $top: string;
  $width: string;
  $maxWidth: string;
  $isAnimated?: boolean;
  theme: ThemeType;
}>`
  background-color: ${({ theme: { colors }, backgroundColor }) =>
    backgroundColor !== undefined
      ? colors[backgroundColor as ColorKeyType] !== undefined
        ? colors[backgroundColor as ColorKeyType]
        : backgroundColor
      : colors.backgroundLight};
  position: relative;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  margin: ${({ $top }) => `${$top} auto auto auto`};
  width: ${({ $width }) => $width};
  min-height: 10rem;
  max-width: ${({ $maxWidth }) => $maxWidth};
  z-index: 9999;
  animation-direction: normal;
  animation-timing-function: ease-in-out;
  animation-duration: 0.2s;
  transform-origin: top center;
  animation-name: ${({ $isAnimated }) => ($isAnimated ? grow : "none")};
`;

export const CloseButton = styled(Button)<{
  theme: ThemeType;
}>`
  float: right;
  margin-left: ${({
    theme: {
      spacing: { xs },
    },
  }) => xs};
  font-size: 1.2rem;
  padding: 0;
`;

export const Background = styled.div<{
  theme: ThemeType;
  $isAnimated?: boolean;
}>`
  background: ${({ theme }) => theme.colors.modalBackdrop};
  bottom: 0;
  left: 0;
  opacity: 0.5;
  position: fixed;
  right: 0;
  top: 0;
  transition:
    opacity 0.3s,
    bottom 0s 0.3s;
  z-index: 100;
  animation-direction: normal;
  animation-timing-function: ease-in-out;
  animation-duration: 0.3s;
  animation-name: ${({ $isAnimated }) => ($isAnimated ? fade : "none")};
`;
