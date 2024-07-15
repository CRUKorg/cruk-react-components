import styled from "styled-components";
import { type ThemeType } from "../../types";

type LabelTextProp = {
  hasHintText: boolean;
  theme: ThemeType;
};

export const Label = styled.label<{ theme: ThemeType }>`
  position: relative;
  display: block;
  width: 100%;
  font-family: ${({ theme }) => theme.typography.fontFamilyLabel};
  font-weight: ${({ theme }) => theme.typography.fontWeightLabels};
`;

export const RequiredText = styled.span<{ theme: ThemeType }>`
  font-family: ${({ theme }) => theme.typography.fontFamilyLabel};
  font-weight: ${({ theme }) => theme.typography.fontWeightBase};
`;

export const LabelText = styled.span<LabelTextProp>`
  font-family: ${({ theme }) => theme.typography.fontFamilyLabel};
  font-weight: ${({ theme }) => theme.typography.fontWeightLabels};
  display: block;
  margin-bottom: ${({ hasHintText, theme }) =>
    hasHintText ? theme.spacing.xxs : theme.spacing.xs};
`;
