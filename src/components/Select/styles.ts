import { type ThemeType } from "src/types";
import styled from "styled-components";

export const StyledSelect = styled.select<{
  $hasError: boolean;
  $errorMessage?: string;
  theme: ThemeType;
}>`
  --_button-height: 3rem;
  appearance: none;
  background:
    linear-gradient(
      45deg,
      var(--clr-background-light, #fff) 50%,
      var(--clr-select-background, #000) 50%
    ),
    linear-gradient(
      135deg,
      var(--clr-select-background, #000) 50%,
      var(--clr-background-light, #fff) 50%
    );
  background-color: var(--clr-background-light, #fff);
  background-position:
    calc(100% - 16px) 50%,
    calc(100% - 10px) 50%;
  background-size: 6px 6px;
  background-repeat: no-repeat;
  border: ${({ theme, $hasError, $errorMessage }) =>
    `solid ${theme.utilities.inputBorderWidth} ${
      $hasError || $errorMessage
        ? "var(--clr-text-error, #f00)"
        : "var(--clr-text-input-border, #2e2c2d)"
    }`};
  color: var(--clr-text-dark, #000);
  display: block;
  font-size: var(--font-size-m, 1rem);
  min-height: var(--_button-height, 3rem);
  padding: ${({ theme }) =>
    `calc( (var(--_button-height, 3rem) - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) var(--spacing-m, 2rem) calc( (var(--_button-height, 3rem) - ( ${theme.utilities.inputBorderWidth} * 2) - ${theme.typography.lineHeight} ) / 2) var(--spacing-xs, 1rem)`};
  width: 100%;
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
