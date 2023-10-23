import styled, { css } from "styled-components";
import { ThemeType } from "../../types";

type StyledTextareaProps = {
  hasError: boolean;
  resize: "both" | "vertical" | "horizontal" | "none";
  lineCount: number;
  theme: ThemeType;
};

const StyledTextArea = styled.textarea<StyledTextareaProps>`
  resize: ${({ resize }: StyledTextareaProps) => resize};
  background-color: ${({ theme }: StyledTextareaProps) =>
    theme.colors.backgroundLight};
  background-image: none;
  border: ${({ theme, hasError }: StyledTextareaProps) => `solid ${
    theme.utilities.inputBorderWidth
  }
    ${hasError ? theme.colors.textError : theme.colors.textInputBorder}`};
  color: ${({ theme }: StyledTextareaProps) => theme.colors.textDark};
  display: block;
  font-family: ${({ theme }: StyledTextareaProps) =>
    theme.typography.fontFamilyBase};
  font-size: ${({ theme }: StyledTextareaProps) => theme.fontSizes.m};
  padding: 6px 8px;
  width: 100%;
  height: ${({ lineCount, theme }: StyledTextareaProps) =>
    `calc(${theme.typography.lineHeight} * ${lineCount})`};

  transition: border-color 150ms linear;
  &:hover {
    border-color: ${({ theme }: StyledTextareaProps) => theme.colors.secondary};
  }
  &:disabled {
    border-color: ${({ theme }: StyledTextareaProps) => theme.colors.disabled};
    color: ${({ theme }: StyledTextareaProps) => theme.colors.disabled};
  }

  ${({ theme }: StyledTextareaProps) =>
    !theme.utilities.useDefaultFocusRect
      ? css`
          &:focus {
            outline: 0;
            border-color: ${theme.colors.tertiary};
          }
        `
      : null};
`;

export default StyledTextArea;
export { StyledTextArea };
