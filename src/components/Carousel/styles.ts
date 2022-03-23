import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

import { ThemeType } from "../../types";

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow-y: hidden;
`;

type ThemeProps = {
  theme: ThemeType;
};

type CarouselScrollAreaProps = {
  smoothScrolling: boolean;
};

export const CarouselScrollArea = styled.ul<CarouselScrollAreaProps>`
  position: relative;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: ${({ smoothScrolling }) =>
    smoothScrolling ? "smooth" : "auto"};
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 20px;
  margin-bottom: -20px;
  height: 100%;
`;

export const CarouselCard = styled.li`
  scroll-snap-align: center;
  display: inline-block;
  width: ${({ onlyChild }: { onlyChild: boolean }) =>
    onlyChild ? "100%" : "80%"};
`;

type CarouselCardInnerProps = {
  isSelected: boolean;
  shrinkUnselectedPages: boolean;
  onlyChild: boolean;
};

export const CarouselCardInner = styled.div<CarouselCardInnerProps>`
  transition: transform 0.2s linear;
  transform: ${({ isSelected, shrinkUnselectedPages, onlyChild }) =>
    onlyChild || (isSelected && shrinkUnselectedPages)
      ? "scale(1)"
      : "scale(0.9)"};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const VerticalAlign = styled.span`
  display: block;
  margin: auto;
  height: 2rem;
  line-height: 1.75rem;
`;

type CarouselButtonProps = ThemeProps & ButtonHTMLAttributes<HTMLElement>;

export const CarouselButton = styled.button`
  height: 100%;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  /* TODO if this makes it into the component library carouselButtonColor should be a theme prop */
  color: ${({ disabled, theme }: CarouselButtonProps) =>
    disabled
      ? theme.colors.disabled
      : theme.name === "su2c"
      ? theme.colors.textDark
      : theme.colors.primary};
  font-size: ${({ theme }: CarouselButtonProps) => theme.fontSizes.xxxl};
  font-weight: 600;
  transition: color 0.3s ease, transform 0.3s ease;
  max-width: 3rem;
  padding: 0;
  vertical-align: middle;
  user-select: none;

  transform: scale(0.8);
  &:hover {
    transform: ${({ disabled }) => (disabled ? "scale(0.8)" : "scale(1)")};
  }
`;

type DotContainerProps = ThemeProps & {
  count: number;
};

export const DotContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  display: ${({ count }) => (count > 6 ? "none" : "flex")};

  @media (min-width: ${({ theme }: DotContainerProps) =>
      theme.breakpoint.tablet}) {
    display: ${({ count }) => (count > 10 ? "none" : "flex")};
  }

  @media (min-width: ${({ theme }: DotContainerProps) =>
      theme.breakpoint.desktop}) {
    display: ${({ count }) => (count > 20 ? "none" : "flex")};
  }
`;

export const Dot = styled.button`
  border: none;
  outline-offset: ${({ theme }: ThemeProps) => theme.spacing.xxs};
  padding: 0;
  margin: ${({ theme }: ThemeProps) => `auto ${theme.spacing.xxs}`};
  width: ${({ theme }: ThemeProps) => theme.fontSizes.l};
  height: ${({ theme }: ThemeProps) => theme.fontSizes.l};
  border-radius: 50%;
  /* TODO if this makes it into the component library carouselButtonColor should be a theme prop */
  border: ${({ theme }: ThemeProps) =>
    `solid 1px ${
      theme.name === "su2c" ? theme.colors.textDark : theme.colors.primary
    }`};
  background-color: ${({
    theme,
    selected,
  }: {
    theme: ThemeType;
    selected: boolean;
  }) =>
    selected
      ? `${
          theme.name === "su2c" ? theme.colors.textDark : theme.colors.primary
        }`
      : theme.colors.backgroundLight};
  user-select: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
  transform: scale(0.8);
  &:hover {
    transform: scale(1);
  }
`;

// TODO move to its own component
export const ScreenReaderOnly = styled.span`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  margin-bottom: -1px;
  margin-right: -1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
