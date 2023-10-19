import styled from "styled-components";
import { ColorKeyType, ThemeType } from "../../types";
import Box from "../Box";
import { Button } from "../Button";

type ThemeProp = {
  theme: ThemeType;
};

type ContentProps = {
  backgroundColor?: string;
  theme: ThemeType;
  top: string;
  width: string;
  maxWidth: string;
};

export const Background = styled.div`
  background: ${({ theme }: ThemeProp) => theme.colors.modalBackdrop};
  bottom: 0;
  left: 0;
  opacity: 0.5;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.3s, bottom 0s 0.3s;
  z-index: 100;
`;

export const Wrapper = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

export const Content = styled(Box)<ContentProps>`
  background-color: ${({ theme: { colors }, backgroundColor }: ContentProps) =>
    backgroundColor !== undefined && typeof backgroundColor !== undefined
      ? colors[backgroundColor as ColorKeyType] !== undefined
        ? colors[backgroundColor as ColorKeyType]
        : backgroundColor
      : colors.backgroundLight};
  position: relative;
  border-radius: ${({
    theme: {
      button: { borderRadius },
    },
  }: ThemeProp) => borderRadius};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  margin: ${({ top }: ContentProps) => `${top} auto auto auto`};
  width: ${({ width }: ContentProps) => width};
  min-height: 10rem;
  max-width: ${({ maxWidth }: ContentProps) => maxWidth};
  z-index: 9999;
`;

export const CloseButton = styled(Button)`
  float: right;
  margin-left: ${({
    theme: {
      spacing: { xs },
    },
  }: ThemeProp) => xs};
  font-size: 1.2rem;
  padding: 0;
`;
