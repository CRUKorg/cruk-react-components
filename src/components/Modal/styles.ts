import styled from "styled-components";
import { type ColorKeyType, type ThemeType } from "../../types";
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

export const Background = styled.div<ThemeProp>`
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
  background-color: ${({ theme: { colors }, backgroundColor }) =>
    backgroundColor !== undefined && typeof backgroundColor !== undefined
      ? colors[backgroundColor as ColorKeyType] !== undefined
        ? colors[backgroundColor as ColorKeyType]
        : backgroundColor
      : colors.backgroundLight};
  position: relative;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  margin: ${({ top }) => `${top} auto auto auto`};
  width: ${({ width }) => width};
  min-height: 10rem;
  max-width: ${({ maxWidth }) => maxWidth};
  z-index: 9999;
`;

export const CloseButton = styled(Button)<ThemeProp>`
  float: right;
  margin-left: ${({
    theme: {
      spacing: { xs },
    },
  }) => xs};
  font-size: 1.2rem;
  padding: 0;
`;
