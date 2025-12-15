import styled from "styled-components";

import Button from "../Button";

export const transitionDurationSeconds = 0.5;

export const FlippingIcon = styled.span<{ $open: boolean }>`
  display: inline-block;
  transform: ${({ $open }) =>
    $open ? "translateY(0.1em) scaleY(-1)" : "initial"};
  transition-duration: ${transitionDurationSeconds}s;
`;

export const DefaultHeader = styled(Button)<{
  $textColor?: string;
  $textSize?: string;
  $textFontFamily?: string;
}>`
  display: flex;
  color: ${({ $textColor }) => $textColor};
  font-size: ${({ $textSize }) => $textSize};
  font-family: ${({ $textFontFamily }) =>
    $textFontFamily ||
    `var(--typ-font-family-base, "Poppins", Arial, sans-serif)`};
  font-weight: normal;
  margin-bottom: 0;
  height: initial;
  text-decoration: none;
  text-align: left;
  border-radius: 0;
  &:hover,
  &:focus {
    color: ${({ $textColor }) => $textColor};
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
