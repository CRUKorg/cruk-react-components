import styled from "styled-components";

import RadioInput from "../Radio";

import { type ThemeType } from "../../types";

const LEGEND_WIDTH = "20%";
const MAX_WIDTH = "5em";

type StyleRadioWidthProp = { $numberOfAttributes: number; theme: ThemeType };

export const StyledRadio = styled(RadioInput)<StyleRadioWidthProp>`
  display: block;
  float: left;
  text-align: left;
  margin-left: ${({ theme }) => theme.spacing.s};
  max-width: ${MAX_WIDTH};
  width: ${({ $numberOfAttributes, theme }) =>
    `calc(((100% - ${LEGEND_WIDTH}) / ${$numberOfAttributes}) - ${theme.spacing.s})`};

  // increase font size for desktop
  @media (min-width: ${({ theme }) => theme.breakpoint.desktopLarge}) {
    font-size: ${({ theme }) => theme.fontSizes.ml};
  }
`;

export const StyledLegend = styled.legend<{
  theme: ThemeType;
}>`
  width: ${LEGEND_WIDTH};
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
  display: block;
  position: relative;
  border: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.s} 0;
  width: 100%;
`;
