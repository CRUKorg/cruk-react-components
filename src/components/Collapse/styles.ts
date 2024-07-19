import styled from "styled-components";

import {
  type FontSizeType,
  type ThemeType,
  type ColorKeyType,
} from "../../types";
import Button from "../Button";

export const transitionDurationSeconds = 0.5;

export const FlippingIcon = styled.span<{ $open: boolean }>`
  display: inline-block;
  transform: ${({ $open }) =>
    $open ? "translateY(0.1em) scaleY(-1)" : "initial"};
  transition-duration: ${transitionDurationSeconds}s;
`;

export const DefaultHeader = styled(Button)<{
  theme: ThemeType;
  $textColor?: string;
  $textSize?: FontSizeType;
  $textFontFamily?: string;
}>`
  display: flex;
  color: ${({ theme, $textColor }) =>
    !!$textColor &&
    typeof theme.colors[$textColor as ColorKeyType] !== "undefined"
      ? theme.colors[$textColor as ColorKeyType]
      : $textColor || theme.colors.collapseHeaderColor};
  font-size: ${({
    theme: {
      fontSizes,
      fontSizes: { m },
    },
    $textSize,
  }) => ($textSize ? fontSizes[$textSize] : m)};
  font-family: ${({ theme, $textFontFamily }) =>
    $textFontFamily || theme.typography.fontFamilyBase};
  font-weight: normal;
  margin-bottom: 0;
  height: initial;
  text-decoration: none;
  text-align: left;
  border-radius: 0;
  &:hover,
  &:focus {
    color: ${({ theme: { colors }, $textColor }) =>
      $textColor && typeof colors[$textColor as ColorKeyType] !== "undefined"
        ? colors[$textColor as ColorKeyType]
        : $textColor || colors.collapseHeaderColor};
  }
`;

export const CollapseContent = styled.div<{
  $contentHeight: string;
  $openStatus: boolean;
}>`
  margin: 0;
  transition: ${transitionDurationSeconds}s ease;
  height: ${({ $contentHeight }: { $contentHeight: string }) => $contentHeight};
  visibility: ${({ $openStatus }: { $openStatus: boolean }) =>
    $openStatus ? "visible" : "hidden"};
  overflow: hidden;
  & > p {
    margin-top: 0;
  }
`;

export const CustomHeader = styled.div`
  cursor: pointer;
`;
