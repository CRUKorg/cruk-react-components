import styled from "styled-components";
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

export const LegendText = styled.legend`
  font-family: var(--typ-font-family-label, "Poppins", Arial, sans-serif);
  font-weight: var(--typ-font-weight-labels, 500);
  margin-bottom: var(--spacing-xxs, 1rem);

  // do not increase font size of check icon at this breakpoint
  @media (min-width: 1200px) {
    font-size: var(--font-size-ml, 1.125rem);
  }
`;

export const TextAsLabel = styled(Text)`
  font-family: var(--typ-font-family-label, "Poppins", Arial, sans-serif);
`;

export const DateTextFieldWrapper = styled.div`
  display: inline-block;
  width: 60px;
  margin-right: var(--spacing-xs, 1rem);
  span {
    margin-bottom: 0.25rem; // this is smaller than xxs spacing
    font-weight: var(--typ-font-weight-base, 300);
  }
`;

export const LargeDateTextFieldWrapper = styled.div`
  display: inline-block;
  width: 80px;
  margin-right: var(--spacing-xs, 1rem);
  span {
    margin-bottom: 0.25rem; // this is smaller than xxs spacing
    font-weight: var(--typ-font-weight-base, 300);
  }
`;

export const ErrorTextWrapper = styled.div`
  clear: left;
`;
