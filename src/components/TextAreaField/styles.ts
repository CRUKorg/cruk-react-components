import styled from "styled-components";
import { type ThemeType } from "../../types";

type StyledTextareaProps = {
  $hasError: boolean;
  $lineCount: number;
  $resize: "both" | "vertical" | "horizontal" | "none";
  theme: ThemeType;
};

const StyledTextArea = styled.textarea<StyledTextareaProps>`
  resize: ${({ $resize }) => $resize};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  background-image: none;
  border: ${({ theme, $hasError }) => `solid ${theme.utilities.inputBorderWidth}
    ${$hasError ? theme.colors.textError : theme.colors.textInputBorder}`};
  color: ${({ theme }) => theme.colors.textDark};
  display: block;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  font-size: ${({ theme }) => theme.fontSizes.m};
  padding: 6px 8px;
  width: 100%;
  height: ${({ $lineCount, theme }) =>
    `calc(${theme.typography.lineHeight} * ${$lineCount})`};

  transition: border-color 150ms linear;
  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
  &:disabled {
    border-color: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.disabled};
  }

  // increase font size for desktop
  @media (min-width: ${({ theme }) => theme.breakpoint.desktopLarge}) {
    font-size: ${({ theme }) => theme.fontSizes.ml};
  }
`;

export default StyledTextArea;
export { StyledTextArea };
