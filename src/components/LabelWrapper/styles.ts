import styled from "styled-components";
import { ThemeType } from "src/types";

export const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
`;

export const LabelText = styled.span<{
  hasHintText: boolean;
  theme: ThemeType;
}>`
  font-weight: bold;
  display: block;
  margin-bottom: ${({ hasHintText, theme }) =>
    hasHintText ? theme.spacing.xxs : theme.spacing.xs};

  & > * {
    font-weight: normal;
  }
`;
