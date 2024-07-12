import styled from "styled-components";
import { type ButtonHTMLAttributes } from "react";

import { type ThemeType } from "../../types";

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

type CarouselCardProps = {
  onlyChild: boolean;
  fullWidthChild: boolean;
};

type CarouselCardInnerProps = {
  isSelected: boolean;
  shrinkUnselectedPages: boolean;
  onlyChild: boolean;
  fullWidthChild: boolean;
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

export const CarouselCard = styled.li<CarouselCardProps>`
  scroll-snap-align: center;
  display: inline-block;
  width: ${({ onlyChild, fullWidthChild }) =>
    onlyChild || fullWidthChild ? "100%" : "80%"};
`;

export const CarouselCardInner = styled.div<CarouselCardInnerProps>`
  transition: transform 0.2s linear;
  transform: ${({
    isSelected,
    shrinkUnselectedPages,
    onlyChild,
    fullWidthChild,
  }) =>
    onlyChild || (isSelected && shrinkUnselectedPages) || fullWidthChild
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

export const CarouselButton = styled.button<CarouselButtonProps>`
  height: 100%;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  /* TODO if this makes it into the component library carouselButtonColor should be a theme prop */
  color: ${({ disabled, theme }) =>
    disabled
      ? theme.colors.disabled
      : theme.name === "su2c"
        ? theme.colors.textDark
        : theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  font-weight: 600;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
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

export const DotContainer = styled.div<DotContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  display: ${({ count }) => (count > 6 ? "none" : "flex")};

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: ${({ count }) => (count > 10 ? "none" : "flex")};
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    display: ${({ count }) => (count > 20 ? "none" : "flex")};
  }
`;

export const Dot = styled.button<ThemeProps & { selected: boolean }>`
  border: none;
  outline-offset: ${({ theme }) => theme.spacing.xxs};
  padding: 0;
  margin: ${({ theme }) => `auto ${theme.spacing.xxs}`};
  width: ${({ theme }) => theme.fontSizes.l};
  height: ${({ theme }) => theme.fontSizes.l};
  border-radius: 50%;
  /* TODO if this makes it into the component library carouselButtonColor should be a theme prop */
  border: ${({ theme }) =>
    `solid 1px ${
      theme.name === "su2c" ? theme.colors.textDark : theme.colors.primary
    }`};
  background-color: ${({ theme, selected }) =>
    selected
      ? `${
          theme.name === "su2c" ? theme.colors.textDark : theme.colors.primary
        }`
      : theme.colors.backgroundLight};
  user-select: none;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
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
