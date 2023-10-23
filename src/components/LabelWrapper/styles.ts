import styled from "styled-components";
import { ThemeType } from "../../types";

type LabelTextProp = {
  hasHintText: boolean;
  theme: ThemeType;
};

type LabelProp = {
  theme: ThemeType;
};

export const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
  font-family: ${({ theme }: LabelProp) => theme.typography.fontFamilyLabel};
  font-weight: ${({ theme }: LabelProp) => theme.typography.fontWeightLabels};
`;

export const RequiredText = styled.span`
  font-family: ${({ theme }: LabelProp) => theme.typography.fontFamilyLabel};
  font-weight: ${({ theme }: LabelProp) => theme.typography.fontWeightBase};
`;

export const LabelText = styled.span<{
  hasHintText: boolean;
  theme: ThemeType;
}>`
  font-family: ${({ theme }: LabelProp) => theme.typography.fontFamilyLabel};
  font-weight: ${({ theme }: LabelProp) => theme.typography.fontWeightLabels};
  display: block;
  margin-bottom: ${({ hasHintText, theme }: LabelTextProp) =>
    hasHintText ? theme.spacing.xxs : theme.spacing.xs};
`;
