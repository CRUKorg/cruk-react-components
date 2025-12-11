import styled from "styled-components";

import { type ThemeType } from "../../types";

type StyledFieldsetProps = {
  $hasError?: boolean;
  $hasHintText?: boolean;
  theme: ThemeType;
};

export const LegendSpan = styled.span<{
  $hasHintText: boolean;
  theme: ThemeType;
}>`
  display: block;
  color: ${({ theme }) => theme.colors.textDark};
  font-size: var(--font-size-m, 1rem);
  line-height: ${({ theme }) => theme.typography.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeightLabels};
  font-family: ${({ theme }) => theme.typography.fontFamilyLabel};
  min-width: 3em;
  margin-bottom: ${({ $hasHintText }) =>
    $hasHintText ? "var(--spacing-xxs, 0.5rem)" : 0};

  // increase font size for desktop
  @media (min-width: 1200px) {
    font-size: var(--font-size-ml, 1.125rem);
  }
  & > * {
    font-weight: ${({ theme }) => theme.typography.fontWeightBase};
  }
`;

export const HintText = styled.span<{ theme: ThemeType }>`
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  font-weight: ${({ theme }) => theme.typography.fontWeightBase};
  display: block;
  color: ${({ theme }) => theme.colors.textMid};
`;

export const StyledFieldset = styled.fieldset<StyledFieldsetProps>`
  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  border: none;
  padding: 0;
  legend {
    margin-bottom: var(--spacing-xs, 0.5rem);
  }
  label {
    border-color: ${({ $hasError, theme }) =>
      $hasError && theme.colors.textError};
    margin-bottom: var(--spacing-none, 0);
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
