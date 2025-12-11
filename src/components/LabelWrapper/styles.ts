import styled from "styled-components";
import { type ThemeType } from "../../types";

type LabelTextProp = {
  $hasHintText: boolean;
  theme: ThemeType;
};

export const Label = styled.label<{ theme: ThemeType }>`
  position: relative;
  display: block;
  width: 100%;
  font-family: ${({ theme }) => theme.typography.fontFamilyLabel};
  font-weight: ${({ theme }) => theme.typography.fontWeightLabels};
  margin-bottom: var(--spacing-s, 1.5rem);
`;

export const HintText = styled.span<{ theme: ThemeType }>`
  font-family: ${({ theme }) => theme.typography.fontFamilyLabel};
  font-weight: ${({ theme }) => theme.typography.fontWeightBase};
  display: block;
  color: ${({ theme }) => theme.colors.textMid};
  margin-bottom: var(--spacing-xs, 0.5rem);
`;

export const RequiredIndicationText = styled.span<{ theme: ThemeType }>`
  font-family: ${({ theme }) => theme.typography.fontFamilyLabel};
  font-weight: ${({ theme }) => theme.typography.fontWeightBase};
`;

export const LabelText = styled.span<LabelTextProp>`
  font-family: ${({ theme }) => theme.typography.fontFamilyLabel};
  font-weight: ${({ theme }) => theme.typography.fontWeightLabels};
  display: block;
  margin-bottom: ${({ $hasHintText }) =>
    $hasHintText
      ? "var(--spacing-xxxs, 0.25rem)"
      : "var(--spacing-xs, 0.5rem)"};

  // increase font size for desktop
  @media (min-width: var(--breakpoint-desktop-large, 1200px)) {
    font-size: ${({ theme }) => theme.fontSizes.ml};
  }
`;
