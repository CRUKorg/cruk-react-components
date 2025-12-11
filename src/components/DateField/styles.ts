import styled from "styled-components";
import { type ThemeType } from "../../types";
import Text from "../Text";

export const Fieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

export const LegendText = styled.legend<{ theme: ThemeType }>`
  font-family: ${({ theme }) => theme.typography.fontFamilyLabel};
  font-weight: ${({ theme }) => theme.typography.fontWeightLabels || 500};
  margin-bottom: var(--spacing-xxs, 1rem);

  // do not increase font size of check icon at this breakpoint
  @media (min-width: 1200px) {
    font-size: var(--font-size-ml, 1.125rem);
  }
`;

export const TextAsLabel = styled(Text)<{ theme: ThemeType }>`
  font-family: ${({ theme }) => theme.typography.fontFamilyLabel};
`;

export const DateTextFieldWrapper = styled.div<{ theme: ThemeType }>`
  display: inline-block;
  width: 60px;
  margin-right: var(--spacing-xs, 1rem);
  span {
    margin-bottom: 0.25rem; // this is smaller than xxs spacing
    font-weight: ${({ theme }) => theme.typography.fontWeightBase};
  }
`;

export const LargeDateTextFieldWrapper = styled(DateTextFieldWrapper)`
  width: 80px;
`;

export const ErrorTextWrapper = styled.div`
  clear: left;
`;
