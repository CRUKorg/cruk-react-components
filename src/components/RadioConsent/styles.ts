import styled from "styled-components";
import { type ThemeType } from "../../types";

export const StyledLegend = styled.legend<{
  theme: ThemeType;
}>`
  display: block;
  float: left;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};

  // increase font size for desktop
  @media (min-width: 1200px) {
    font-size: var(--font-size-ml, 1.125rem);
  }
`;

export const StyledFieldSet = styled.fieldset<{
  theme: ThemeType;
}>`
  box-sizing: border-box;
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(8em, 100%), 0.25fr));
  position: relative;
  border: none;
  padding: 0;
  margin: 0 0 var(--spacing-s, 1.5rem) 0;
`;

export const OptionWrapper = styled.div<{
  theme: ThemeType;
}>`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-m, 2rem);
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px;
  label {
    min-width: 0px;
  }
`;
