import styled from "styled-components";
import { ColorKeyType, ThemeType } from "../../types";
import Box from "../Box";
import { Button } from "../Button";

type ThemeProp = {
  theme: ThemeType;
};

type ContentProp = {
  backgroundColor?: string;
  theme: ThemeType;
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

export const Content = styled(Box)<{
  maxWidth: string;
  top: string;
}>`
  background-color: ${({ theme: { colors }, backgroundColor }: ContentProp) =>
    backgroundColor !== undefined && typeof backgroundColor !== undefined
      ? colors[backgroundColor as ColorKeyType] !== undefined
        ? colors[backgroundColor as ColorKeyType]
        : backgroundColor
      : colors.backgroundLight};
  position: relative;
  border-radius: 4px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  margin: ${({ top }: { top: string }) => `${top} auto auto auto`};
  width: 90%;
  min-height: 10rem;
  padding: ${({
    theme: {
      spacing: { xs },
    },
  }: ContentProp) => xs};

  max-width: ${({ maxWidth }: { maxWidth: string }) => maxWidth};
  z-index: 9999;
  margin-bottom: ${({ theme }: ThemeProp) => theme.spacing.xxl};
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
