import styled from "styled-components";
import { type ThemeType } from "../../types";

export const StyledLegend = styled.legend<{
  theme: ThemeType;
}>`
  display: block;
  float: left;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};

  // increase font size for desktop
  @media (min-width: ${({ theme }) => theme.breakpoint.desktopLarge}) {
    font-size: ${({ theme }) => theme.fontSizes.ml};
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
  margin: 0 0 ${({ theme }) => theme.spacing.s} 0;
`;

export const OptionWrapper = styled.div<{
  theme: ThemeType;
}>`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.m};
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px;
  label {
    min-width: 0px;
  }
`;
