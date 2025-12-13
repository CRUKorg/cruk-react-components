import styled from "styled-components";

export const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
  font-family: var(--typ-font-family-label, "Poppins", Arial, sans-serif);
  font-weight: var(--typ-font-weight-labels, 500);
  margin-bottom: var(--spacing-s, 1.5rem);
`;

export const HintText = styled.span`
  font-family: var(--typ-font-family-label, "Poppins", Arial, sans-serif);
  font-weight: var(--typ-font-weight-base, 300);
  display: block;
  color: var(--clr-text-mid, #666);
  margin-bottom: var(--spacing-xs, 1rem);
`;

export const RequiredIndicationText = styled.span`
  font-family: var(--typ-font-family-label, "Poppins", Arial, sans-serif);
  font-weight: var(--typ-font-weight-base, 300);
`;

export const LabelText = styled.span<{
  $hasHintText: boolean;
}>`
  font-family: var(--typ-font-family-label, "Poppins", Arial, sans-serif);
  font-weight: var(--typ-font-weight-labels, 500);
  display: block;
  margin-bottom: ${({ $hasHintText }) =>
    $hasHintText ? "var(--spacing-xxxs, 0.25rem)" : "var(--spacing-xs, 1rem)"};

  // increase font size for desktop
  @media (min-width: 1200px) {
    font-size: var(--font-size-ml, 1.125rem);
  }
`;
