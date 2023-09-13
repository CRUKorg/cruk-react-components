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
`;

export const LabelText = styled.span<{
  hasHintText: boolean;
  theme: ThemeType;
}>`
  font-weight: bold;
  display: block;
  margin-bottom: ${({ hasHintText, theme }: LabelTextProp) =>
    hasHintText ? theme.spacing.xxs : theme.spacing.xs};

  & > * {
    font-weight: normal;
  }
`;
