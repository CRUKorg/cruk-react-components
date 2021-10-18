import { ThemeType } from "src/types";
import styled, { css } from "styled-components";

type StyledTextareaProps = {
  hasError: boolean;
  resize: "both" | "vertical" | "horizontal" | "none";
  lineCount: number;
  theme: ThemeType;
};

export const StyledTextArea = styled.textarea<StyledTextareaProps>`
  resize: ${({ resize }) => resize};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  background-image: none;
  border-radius: ${({ theme }) => theme.utilities.borderRadius};
  border: ${({ theme, hasError }) => `solid ${theme.utilities.inputBorderWidth}
    ${hasError ? theme.colors.textError : theme.colors.textInputBorder}`};
  color: ${({ theme }) => theme.colors.textDark};
  display: block;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  font-size: ${({ theme }) => theme.fontSizes.m};
  padding: 6px 8px;
  width: 100%;
  height: ${({ lineCount, theme }) =>
    `calc(${theme.typography.lineHeight} * ${lineCount})`};

  transition: border-color 150ms linear;
  &:disabled {
    border-color: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.disabled};
  }

  ${({ theme }) =>
    !theme.utilities.useDefaultFocusRect
      ? css`
          &:focus {
            outline: 0;
            border-color: ${({ theme }) => theme.colors.tertiary};
          }
        `
      : null};
`;
