import styled from "styled-components";

import { type ThemeType } from "../../types";

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
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: ${({ theme }) => theme.typography.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeightLabels};
  font-family: ${({ theme }) => theme.typography.fontFamilyLabel};
  min-width: 3em;
  margin-bottom: ${({ hasHintText, theme }) =>
    hasHintText ? theme.spacing.xxs : 0};

  & > * {
    font-weight: ${({ theme }) => theme.typography.fontWeightBase};
  }
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
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
  label {
    border-color: ${({ hasError, theme }) =>
      hasError && theme.colors.textError};
    margin-bottom: ${({ theme }) => theme.spacing.none};
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
