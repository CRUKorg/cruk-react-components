import styled from "styled-components";

import { type ThemeType } from "../../types";

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow-y: hidden;
`;

export const CarouselScrollArea = styled.ul<{
  $smoothScrolling: boolean;
}>`
  position: relative;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: ${({ $smoothScrolling }) =>
    $smoothScrolling ? "smooth" : "auto"};
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 20px;
  margin-bottom: -20px;
  height: 100%;
`;

export const CarouselCard = styled.li<{
  $onlyChild: boolean;
  $fullWidthChild: boolean;
}>`
  scroll-snap-align: center;
  display: inline-block;
  width: ${({ $onlyChild, $fullWidthChild }) =>
    $onlyChild || $fullWidthChild ? "100%" : "80%"};
`;

export const CarouselCardInner = styled.div<{
  $isSelected: boolean;
  $shrinkUnselectedPages: boolean;
  $onlyChild: boolean;
  $fullWidthChild: boolean;
}>`
  transition: transform 0.2s linear;
  transform: ${({
    $isSelected,
    $shrinkUnselectedPages,
    $onlyChild,
    $fullWidthChild,
  }) =>
    $onlyChild || ($isSelected && $shrinkUnselectedPages) || $fullWidthChild
      ? "scale(1)"
      : "scale(0.9)"};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1em;
`;

export const VerticalAlign = styled.span`
  display: block;
  margin: auto;
  height: 1.25em; // should be same size a icon size
`;

export const CarouselButton = styled.button<{
  disabled: boolean;
  theme: ThemeType;
}>`
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
  font-size: var(--font-size-xxxl, 2rem);
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

export const DotContainer = styled.div<{ $count: number; theme: ThemeType }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  display: ${({ $count }) => ($count > 6 ? "none" : "flex")};

  @media (min-width: 768px) {
    display: ${({ $count }) => ($count > 10 ? "none" : "flex")};
  }

  @media (min-width: 1024px) {
    display: ${({ $count }) => ($count > 20 ? "none" : "flex")};
  }
`;

export const Dot = styled.button<{ $selected: boolean; theme: ThemeType }>`
  border: none;
  outline-offset: var(--spacing-xxs, 1rem);
  padding: 0;
  margin: auto var(--spacing-xxs, 1rem);
  width: var(--font-size-l, 1.25rem);
  height: var(--font-size-l, 1.25rem);
  border-radius: 50%;
  /* TODO if this makes it into the component library carouselButtonColor should be a theme prop */
  border: ${({ theme }) =>
    `solid 1px ${
      theme.name === "su2c" ? theme.colors.textDark : theme.colors.primary
    }`};
  background-color: ${({ theme, $selected }) =>
    $selected
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
