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
  font-size: var(--font-size-m, 1rem);
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
  @media (min-width: var(--breakpoint-desktop-large, 1200px)) {
    font-size: var(--font-size-ml, 1.125rem);
  }
`;

export default StyledTextArea;
export { StyledTextArea };
