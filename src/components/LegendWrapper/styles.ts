import styled from 'styled-components';

import { ThemeType } from 'src/types';

type StyledFieldsetProps = {
  hasError: boolean;
  theme: ThemeType;
  hasHintText: boolean;
};

export const LegendSpan = styled.span<{
  hasHintText: boolean;
  theme: ThemeType;
}>`
  display: block;
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: ${({ theme }) => theme.typography.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeightHeavy};
  min-width: 3em;
  margin-bottom: ${({ hasHintText, theme }) => (hasHintText ? theme.spacing.xxs : 0)};

  & > * {
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  }
`;

export const StyledFieldset = styled.fieldset<StyledFieldsetProps>`
  border: none;
  padding: 0;
  legend {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
  label {
    border-style: solid;
    border-width: ${({ theme }) => theme.utilities.inputBorderWidth};
    border-color: ${({ hasError, theme }) => hasError && theme.colors.textError};
  }
`;
