import styled from "styled-components";

import Button from "src/components/Button";
import Icon from "src/components/Icon";

import { FontSizeType } from "src/types";

export const transitionDurationSeconds = 0.5;

export const FlippingIcon = styled(Icon)`
  transform: ${({ open }: { open: boolean }) =>
    !!open ? "rotate(90deg) translateX(0.1em) scaleX(-1) " : "rotate(90deg)"};
  transition-duration: ${transitionDurationSeconds}s;
`;

export const DefaultHeader = styled(Button)<{
  textColor?: string;
  textSize?: FontSizeType;
  textFontFamily?: string;
}>`
  display: flex;
  color: ${({ theme: { colors }, textColor }) =>
    textColor && typeof colors[textColor] !== "undefined"
      ? colors[textColor]
      : textColor
      ? textColor
      : colors["secondary"]};
  font-size: ${({
    theme: {
      fontSizes,
      fontSizes: { m },
    },
    textSize,
  }) => (textSize ? fontSizes[textSize] : m)};
  font-family: ${({ theme, textFontFamily }) =>
    textFontFamily ? textFontFamily : theme.typography.fontFamilyBase};
  font-weight: normal;
  margin-bottom: 0;
  height: initial;
  text-decoration: none;
  text-align: left;
  :hover,
  :focus {
    color: ${({ theme: { colors }, textColor }) =>
      textColor && typeof colors[textColor] !== "undefined"
        ? colors[textColor]
        : textColor
        ? textColor
        : colors["secondary"]};
  }
`;

export const CollapseContent = styled.div<{
  contentHeight: string;
  openStatus: boolean;
}>`
  margin: 0;
  transition: ${transitionDurationSeconds}s ease;
  height: ${({ contentHeight }) => contentHeight};
  visibility: ${({ openStatus }) => (openStatus ? "visible" : "hidden")};
  overflow: hidden;
  & > p {
    margin-top: 0;
  }
`;

export const CustomHeader = styled.div`
  cursor: pointer;
`;
