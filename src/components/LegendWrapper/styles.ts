import styled from "styled-components";

import { ThemeType } from "../../types";

type StyledFieldsetProps = {
  hasError?: boolean;
  theme: ThemeType;
  hasHintText?: boolean;
};

export const LegendSpan = styled.span<{
  hasHintText: boolean;
  theme: ThemeType;
}>`
  display: block;
  color: ${({ theme }: StyledFieldsetProps) => theme.colors.textDark};
  font-size: ${({ theme }: StyledFieldsetProps) => theme.fontSizes.m};
  line-height: ${({ theme }: StyledFieldsetProps) =>
    theme.typography.lineHeight};
  font-weight: ${({ theme }: StyledFieldsetProps) =>
    theme.typography.fontWeightHeavy};
  min-width: 3em;
  margin-bottom: ${({ hasHintText, theme }: StyledFieldsetProps) =>
    hasHintText ? theme.spacing.xxs : 0};

  & > * {
    font-weight: ${({ theme }: StyledFieldsetProps) =>
      theme.typography.fontWeightNormal};
  }
`;

export const StyledFieldset = styled.fieldset<StyledFieldsetProps>`
  border: none;
  padding: 0;
  legend {
    margin-bottom: ${({ theme }: StyledFieldsetProps) => theme.spacing.xs};
  }
  label {
    border-style: solid;
    border-width: ${({ theme }: StyledFieldsetProps) =>
      theme.utilities.inputBorderWidth};
    border-color: ${({ hasError, theme }: StyledFieldsetProps) =>
      hasError && theme.colors.textError};
    margin-bottom: ${({ theme }: StyledFieldsetProps) => theme.spacing.s};
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
