import styled from "styled-components";
import { type ThemeType } from "../../types";

type StyledTextareaProps = {
  $hasError: boolean;
  $lineCount: number;
  $resize: "both" | "vertical" | "horizontal" | "none";
  theme: ThemeType;
};

export const StyledTextArea = styled.textarea<StyledTextareaProps>`
  resize: ${({ $resize }) => $resize};
  background-color: var(--color-background-light, #ffffff);
  background-image: none;
  border: ${({ theme, $hasError }) => `solid ${theme.utilities.inputBorderWidth}
    ${$hasError ? "var(--clr-text-error, #ff0000)" : "var(--clr-text-input-border, #2e2d2c)"}`};
  color: var(--color-text-dark, #000000);
  display: block;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  font-size: var(--font-size-m, 1rem);
  padding: 6px 8px;
  width: 100%;
  height: ${({ $lineCount, theme }) =>
    `calc(${theme.typography.lineHeight} * ${$lineCount})`};

  transition: border-color 150ms linear;
  &:hover {
    border-color: var(--clr-secondary, #e60079);
  }
  &:disabled {
    border-color: var(--clr-disabled, #e6e6e6);
    color: var(--clr-disabled, #e6e6e6);
  }

  // increase font size for desktop
  @media (min-width: 1200px) {
    font-size: var(--font-size-ml, 1.125rem);
  }
`;
