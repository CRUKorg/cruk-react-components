import styled from "styled-components";

type StyledFieldsetProps = {
  $hasError?: boolean;
  $hasHintText?: boolean;
};

export const LegendSpan = styled.span<{
  $hasHintText: boolean;
}>`
  display: block;
  color: var(--clr-text-dark, #000);
  font-size: var(--font-size-m, 1rem);
  line-height: var(--typ-line-height, 1.5em);
  font-weight: var(--typ-font-weight-labels, 500);
  font-family: var(--typ-font-family-label, "Poppins", Arial, sans-serif);
  min-width: 3em;
  margin-bottom: ${({ $hasHintText }) =>
    $hasHintText ? "var(--spacing-xxs, 0.5rem)" : 0};

  // increase font size for desktop
  @media (min-width: 1200px) {
    font-size: var(--font-size-ml, 1.125rem);
  }
  & > * {
    font-weight: var(--typ-font-weight-base, 300);
  }
`;

export const HintText = styled.span`
  font-family: var(--typ-font-family-base, "Poppins", Arial, sans-serif);
  font-weight: var(--typ-font-weight-base, 300);
  display: block;
  color: var(--clr-text-mid, #666);
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
    margin-bottom: var(--spacing-xs, 1rem);
  }
  label {
    border-color: ${({ $hasError }) =>
      $hasError && "var(--clr-text-error, #f00)"};
    margin-bottom: var(--spacing-none, 0);
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
